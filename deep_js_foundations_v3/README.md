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

## Implicit Coercion

* Hiding unnecessary details, re-focusing the reader and increasing clarity.
* Is showing the reader the extra type details helpful or distracting?

## Understanding features

* "If a feature is sometimes useful and sometimes dangerous and if there is a better option then always use the better option." -- "The Good Parts", Crockford
* Useful: when the reader is focused on what's important.
* Dangerous: when the reader can't tell what will happen.
* Better: when the reader understands the code.
* It is irresponsible to knowingly avoid usage of a feature that can improve code readability.

## Double and triple equals

* == checks value (loose)
* === checks value and type (strict)
* Spec: <https://www.ecma-international.org/ecma-262/9.0/index.html#sec-strict-equality-comparison>
* When the types match, do the triple equals.
* == allows coercion (types different)
* === disallows coercion (types same)
* Double equals prefers numeric comparison
* Double equals only compares primitives.
* Double equality --> only primitives
* Summary of double equals algorithm
  * If the types are the same: ===
  * If null or undefined: equal
  * If non-primitives: ToPrimitive
  * Prefer: ToNumber

* Corner cases

```bash
[] = ![]; // true WAT!?
```

```bash
var workshopStudents = [];

if (workshopStudents) {
  // yep
}

if (workshopStudents == true) {
  // nope
}

if(workshopStudents == false) {
  //yep
}
```

* Corner cases summary
  * Avoid:
    * == with 0 or "" (or even "  ")
    * == with non-primitives
    * == true or == false: allow toBoolean or use ===

* You should prefer double equals in all possible places.
* Knowing types is always better than not knowing them.
* Static types is not the only (or even necessarily best) way to know your types.
* == is not about comparisons with unknown types.
* == is about comparisons with known type(s), optionally where conversions are helpful.
* If you know the type(s) in a comparison: 
  * if both types are the same, == is identical to ===
  * Using === would be unnecessary. so prefer the shorter ==
  * Since === is pointless when the types don't match, it's similarly unnecessary when they do match.
  * If the types are different, using one === would be broken.
  * Summary: whether the types match or not, == is the more sensible choice.
* If you don't know the types in a comparison:
  * Not knowing the types means not fully understanding that code.
  * So best to refactor so you know the types.
  * The uncertainty of not knowing types should be obvious to reader.
  * The most obvious signal is ===.
  * Not knowing the types is equivalent to assuming type conversion.
  * Summary: If you can't or won't use known and obvious types, === is the only reasonable choice.
* Summary: making types known and obvious leads to better code. If types are known, == is best.
  * Otherwise, fall back to ===.

## Typescript, Flow, and type-aware linting

* Benefits
  * Catch type-related mistakes.
  * Communicate type intent.
  * Provide IDE feedback.
* Caveats
  * Inferencing is best-guess, not a guarantee.
  * Annotations are optional.
  * Any part of the application that isn't typed introduces uncertainty.
* <https://github.com/niieani/typescript-vs-flowtype>
* Typescript and Flow
  * Pros
    * They make types more obvious in your code.
    * Familiarity: they look like other language's type systems.
    * Extremely popular these days.
    * They're very sophisticated and good at what they do.
  * Con
    * They use "non-js-standard" syntax (or code comments).
    * They require* a build process, which raises the barrier to entry.
    * Their sophistication can be intimidating to those without prior formal types experience.
    * They focus more on "static types" (variables, parameters, returns, properties, etc) than value types.
* You simply cannot write quality JS programs without knowing the types involved in your operations.
* The better approach is to embrace and learn JS's type system, and to adopt a coding style which makes types as obvious as possible.
* Typl - embraces and unlocks the best parts of JS's type and coercion.

## Scope

* Scope: where to look for things.
* JavaScript organizes scopes with functions and blocks.
* Dynamic global variables
* Strict mode
  * place "use strict" at the top of your file/program.
  * Have to opt in - not in javascript by default.
* undefined means a variable exists but at the moment it has no value.
* undeclared - never formally declared in any scope we have access too.
* Lexical scope elevator

## Function Expressions

* Named function expressions: benefits
  * reliable function self-reference (recursion, etc)
  * More debuggable stack traces
  * More self-documenting code.
* Arrow functions
  * Arrow functions are anonymous.
* (Named) function declaration > named function expression > anonymous function expression.

## Lexical scope and dynamic scope

* Dynamic scope does not exist in javascript.
* Principle of least exposure/privilege
* IIFE - immediately invoked function expression

## Block scoping

* Use let when block scoping.
* var attaches itself to the function scope.
* you can use var more than once in a function scope. Can't do that with a let.
* let is not the new var - it is let + var. Both are useful for our programs.
* Only use const for primitive, immutable values (strings, numbers, and booleans)

## Hoisting

* Start putting function declarations at bottom of file/scope and executable code at the top. Take advantage of the fact that functions "hoist".
* var hoisting - usually bad
* function hosting - actually pretty useful. extremely useful for code readability.
* let doesn't hoist
  * statement is meant in good spirit but is inaccurate.
  * TDZ error - temporal dead zone.

## Closure

* Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.

## Module Pattern

* Module pattern requires the concept of encapsulation (hiding data and behavior).
* Modules encapsulate data and behavior (methods) together. The state(data) of a module is held by its methods via closure.
* Minimally expose only what's necessary (principle of least exposure).
* Module Factory.
* ES6 modules and Node.js
  * workshop.mjs instead of workshop.js (different file extension)

  ```bash
  var teacher = "Kyle"

  export default function ask(question) {
    console.log(teacher, question);
  };
  ```

* TC39 is an ECMA committee which follows a process to develop language features for JavaScript.
* Importing modules

```bash
import ask from 'workshop.mjs';

import * as workshop from 'workshop.mjs';
```

## Objects (Oriented)

* this
* class {}
* Prototypes
* "Inheritance" vs "Behavior Delegation" (OO vs OLOO)
* this
  * A function's this references the execution context for that call, determined entirely by how the function was called.

## The new keyword

* Create a brand new empty object.
* *Link that bject to another object.
* Call function with this set to the new object.
* If function does not return an object, assume return of this.

## this: determination

* Is the function called by new?
* is the function called by call() or apply()?
  * Note: bind() effectively uses apply()
* Is the function called on a context object?
* DEFAULT: global object (except strict mode)
* only use => arrow functions when you need lexical this.
  * <https://github.com/getify/eslint-plugin-arrow-require-this>

## class

* <https://gist.github.com/getify/86bed0bb78ccb517c84a6e61ec16adca>

## Prototypes

* Objects are built by "constructor calls" (via new)
* A "constructor call" makes an object "based on" its own prototype.
* A constructor is making a copy of the prototype.
* A "constructor call" makes an object linked to its own prototype.
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf>
* OOLO: Objects Linked to Other Objects
* <https://www.lua.org/about.html>
* Object.create es5 feature
* Delegation: Design Pattern

## Bonus: Typl

* <https://github.com/getify/TypL>
