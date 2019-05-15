# Deep JavaScript Foundations, v3

* <https://frontendmasters.com/courses/deep-javascript-v3/>
* <https://static.frontendmasters.com/resources/2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf>
* JavaScript spec: <https://www.ecma-international.org/ecma-262/9.0/index.html#Title>

## Types

* In JavaScript, everything is an object (false - a misconception)
* <https://www.ecma-international.org/ecma-262/9.0/index.html#sec-ecmascript-language-types>
* Primitive Types
  * undefined
  * string
  * number
  * boolean
  * object
  * symbol
  * undeclared?
  * null?
  * function? - subtype of object type (callable object)
  * array? - subtype of object type
  * bigint? (future) - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt>
* In javascript, variables don't have types, values do.

## typeOf Operator

```bash
var v;
typeof v; // "undefined" (does not currently have a value)
v = "1";
typeof v; // "string"
v = 2;
typeof v; // "number"
v = true;
typeof v; // "boolean"
v = {};
typeof v; // "object"
v = Symbol();
typeof v; // "symbol"

typeof doesntExist // "undefined"
var v = null;
typeof v; // "object" OOPS!
v = function({});
typeof v; // "function"
v = [1,2,3];
typeof v; // "object"
```

## BigInt

```bash
// coming soon!
var v = 42n;
// or: BigInt(42)
typeof v; // "bigint"
```

## Kinds of emptiness

* undefined vs undeclared
* undeclared - has never been created in any scope we have access to.
* undefined - there is definitely a varible and at the moment, there is no value.
* uninitialized (aka TDZ - temporal dead zone): <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#The_temporal_dead_zone_and_typeof>

## Special values

* NaN
  * an invalid number

```bash
var myAge = Number("0o46"); // 38
var myNextAge = Number("39"); // 39
var myCatsAge = Number("n/a") // NaN
myAge - "my son's age"; // NaN

myCatsAge === myCatsAge // false OOPS!

isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); // true OOPS!

Number.isNAN(myCatsAge); // true
Number.isNAN("my son's age"); // false
```

## Negative Zero

```bash
var trendRate = -0;
trendRate === -0; // true

trendRate.toString(); // "0" OOPS!
trendRate === 0; // true OOPS!
trendRate < 0; // false
trendRate > 0; // false

Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false
```

```bash
Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(-0); // -0
Math.sign(0); // 0
```