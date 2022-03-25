import './style.css';
import { createMachine, interpret, assign } from 'xstate';
import { raise } from 'xstate/lib/actions';

const machine = createMachine({
    initial: 'loading',
    context: {
        count: 42
    },
    states: {
        loading: {
            entry: ['loadData'],
            exit: [],
            on: {
                BLAH: {
                    actions: raise({ type: 'SUCCESS'}),
                },
                SKIP: {
                    cond: 'greaterThan100',
                    target: 'loaded'
                },
                SUCCESS: {
                    actions: [
                        assign({
                            count: (context, event) => context.count + event.value
                        })
                    ],
                    target: 'loaded'
                }
            }
        },
        loaded: {}
    }
}).withConfig({
    actions: {
        loadData: () => {
            console.log('configured loading data')
        }
    },
    guards: {
        greaterThan100: (context) => context.count > 100
    }
})

console.log(machine.initialState)

const service = interpret(machine).start();

service.subscribe(state => {
    console.log(state.value, state.context);
})

window.service = service;




// state: { status: 'idle' }
// event: { type: 'FETCH' }
// function transition(state, event) {
//     switch (state.status) {
//         case 'idle':
//             if (event.type === 'FETCH') {
//                 console.log('Starting to fetch data');
//                 return { status: 'loading' }
//             }
//             return state;
//         case 'loading':
//             // other behavior
//             break;
//         default:
//             break;
//     }
// }

// const machine = {
//     initial: 'idle',
//     state: {
//         idle: {
//             on: {
//                 FETCH: 'loading'
//             }
//         },
//         loading: {}
//     }
// }

// function transition2(state, event) {
//     const nextState = machine.states[state.status].on?.[event.type] ?? state.status;

//     return {
//         status: nextState
//     }
// }

// window.machine = machine;
// window.transition = transition;
// window.transition2 = transition2;