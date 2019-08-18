# State Management with Redux and MobX

* <https://frontendmasters.com/courses/redux-mobx/>
* <https://static.frontendmasters.com/resources/2019-05-28-react-state/redux-mobx.pdf>
* Pure functions take arguments and return values based on those arguments.
* Impure functions can mutate things from outside their scope or produce side effects.
* Mutating arrays and objects is also impure.
* Not mutating objects and arrays
  * <https://immutable-js.github.io/immutable-js/docs/#/>
  * <https://swannodette.github.io/mori/>
* Copy object
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign>
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax>
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice>
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat>

```bash
// copy object
const original = { a: 1, b: 2};
const copy = Object.assign({}, original);
```

```bash
// copy object
const original = { a: 1, b: 2};
const copy = { ...original };
```

```bash
// extend object
const original = { a: 1, b: 2};
const extension = { c: 3};
const extended = Object.assign({}, original, extension);
```

```bash
// extend object
const original = { a: 1, b: 2};
const extension = { c: 3};
const extended = { ...original, ...extension };
```

```bash
// copy array
const original = [1, 2, 3];
const copy = [1, 2, 3].slice();
```

```bash
// copy array
const original = [1, 2, 3];
const copy = [ ...original ];
```

```bash
// extend array
const original = [1, 2, 3];
const extended = original.concat(4);
const moreExtended = original.concat([4,5]);
```

* Redux functions
  * <https://jsbin.com/kiteboy/1/edit?js,console>

```bash
applyMiddleware: function()
bindActionCreators: function()
combineReducers: function()
compose: function()
createStore: function()
```

```bash
const createAddAction = (amount) => {
  return {
    type: 'ADD',
    payload: {
      amount
    }
  }
}

const handrolledDispatch = store.dispatch(createAddAction(4));

const dispatchAdd = bindActionCreator(add, store.dispatch);

const bindActionCreators = (actions, dispatch) => {
  return Object.keys(actions).reduce((boundActions, key) => {
    boundActions[key] = bindActionCreator actions[key], dispatch)
  }, {});
}
```

```bash
const logger = ({ getState }) => {
  return next => action => {
    console.log('MIDDLEWARE', getState(), action );
    const value = next(action);
    return value;
  }
};

const secondStore = createStore(reducer, applyMiddleware(logger));
```

## Redux and React

* <https://github.com/reduxjs/react-redux>
* <https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367>

## Normalizing Data
