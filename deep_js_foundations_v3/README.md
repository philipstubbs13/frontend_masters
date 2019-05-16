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

## Fundamental Objects

* Use new:
  * Object()
  * Array()
  * Date()
  * Function()
  * RegExp()
  * Error()
* Don't use new:
  * String()
  * Number()
  * Boolean()

## Abstract Operations

* <https://www.ecma-international.org/ecma-262/9.0/index.html#sec-abstract-operations>
* aka coercion
* ToPrimitive(hint) (7.1.1)
* hint: "number"
  * valueOf()
  * toString()
* hint: "string"
  * toString()
  * valueOf()
* ToString (7.1.12)
  
```bash
null "null"
undefined "undefined"
true "true"
false "false"
3.14159 "3.1459"
0 "0"
-0 "0"
```

```bash
[]  ""
[1,2,3] "1,2,3"
[null,undefined]  ","
[[],[],[],[]] ",,,"
```

```bash
{}  "[object Object]"
{a:2} "[object Object]"
{toString(){ return "X";}} "X"
```

* toNumber

```bash
""  0
"0"  0
"-0"  -0
"  009 "  9
"3.1459"  3.1459
"0."  0
".0"  0
"."  NaN
```

```bash
false  0
true  1
null  0
undefined  NaN
```

```bash
[""]  0
["0"]  0
["-0"] -0
```

* ToBoolean (7.1.2)
  * Falsy
    * "",
    * 0, -0
    * null
    * NaN
    * false
    * undefined
  * Truthy
    * "foo"
    * 23
    * { a: 1}
    * [1,3]
    * true
    * function(){..}

## Boxing

* form of implicit coercion.
* all programming languages have type conversions, because it's absolutely necessary.

## Type conversion corner cases

* A quality JS program embraces coercions, making sure the types involved in every operation are clear. thus, corner cases are safely managed.