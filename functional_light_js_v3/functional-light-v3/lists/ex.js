"use strict";

function five() { return 5 };
function nine() { return 9 };
function add(x, y) { return x + y };
// add(five(), nine())
function add2(fn1, fn2) { return add(fn1(), fn2()); }
function constant(v) {
    return function f() {
        return v;
    }
}
var five = constant(5);
var nine = constant(9);
// add2(five, nine);

// function addn(fns) {
//      while (fns.length > 2) {
//         let [fn0, fn1, ...rest] = fns;
//         fns = [
//             function(){
//                 return add2(fn0, fn1);
//             },
//             ...rest
//         ]
//     }
//     return add2(fns[0], fns[1]);
// }

// function addn([fn0, fn1, ...rest]) {
//     if (rest.length == 0) return add2(fn0, fn1);
//     if (rest.length > 0) {
//         return addn([
//             function(){
//                 return add2(fn0, fn1);
//             },
//             ...rest
//         ]);
//     }
// }

function addn(fns) {
    return fns.reduce(function reducer(bigFn, fn) {
        return function f() {
            return add2(bigFn, fn);
        }
    })();
}

// const result = addn([constant(3), constant(7), five, nine , constant(11)])
// console.log(result);

var numbers = [5,2,15,4,2,7,9,17,6,3,2,4,8,10,5,12,13];

const result = addn(numbers
    .reduce(function unique(newList, num) {
        if (!newList.includes(num)) return [...newList, num];
        return newList;
    }, [])
    .filter(function isEven(v) {
        return v % 2 == 0;
    })
    .map(constant)
)

console.log(result);