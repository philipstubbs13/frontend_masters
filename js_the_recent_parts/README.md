# JavaScript: The Recent Parts

* <https://frontendmasters.com/courses/js-recent-parts/>

## Code is for humans: <https://frontendmasters.com/teachers/kyle-simpson/code-is-for-humans/>

* If you don't know why your code works, you have no hope of fixing it when it breaks.
* Problem: We're writing our code primarily for the computer.
* Infinite number of ways to write the same program.
* The program is just a suggestion to the computer.
* primary purpose: code is for communicating ideas with other people.
* Code that you do not understand is cod that you cannot trust and code that you cannot trust is code that you do not understand.
* As much as 70% of our time spent coding is actually spent reading the code.
* Code must first be read before it can be written.
* The only way to ensure your code survives is to make sure it's readable.
* Warning: if your code has to be rewritten to be fixed, improved, or extended, you failed.
* 10% - 6 minutes out of each hour.
* Documentation and tests are important, but ultimately they're indirectly related to code quality.
* Readability directly impacts your ability, and that of everyone else, to do their job.
* The one thing we will always be better at than the computer: empathetic communication with other people.

## Slides

<https://static.frontendmasters.com/resources/2019-03-09-js-recent-parts/js-recent-parts.pdf>

* Declarative JavaScript
* Transpilers (e.g., Babel)

* Template Strings
  * Interpolated Literals
  * "Interpoliterals"
  * string interpolation
* Tagged Templates/Functions
* String Padding
* String Trimming

```bash
var str = "Hello";

str.padStart( 5 );            // "Hello"
str.padStart ( 8 );           // "   Hello"
str.padStart( 8, "*" );       // "***Hello"
str.padStart( 8, "12345" );   // "123Hello"
str.padStart( 8, "ab" );      // "abaHello"
```

```bash
var str = "Hello";

str.padEnd( 5 );            // "Hello"
str.padEnd ( 8 );           // "Hello   "
str.padEnd( 8, "*" );       // "Hello***"
str.padEnd( 8, "12345" );   // "Hello123"
str.padEnd( 8, "ab" );      // "Helloaba"
```

```bash
var str = "   some stuff   \t\t";
str.trim();  // "some stuff"
str.trimStart(); // "some stuff
str.trimEnd(); // "   somestuff"
```

## Destructuring

* decomposing a structure into its individual parts.
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>

```bash
var [
  {
    name: firstName,
    email: firstEmail = "nobody@none.tld"
  },
  {
    name: secondName,
    email: secondEmail = "nobody@none.tld"
  }
] = getSomeRecords();
```

## Refactoring code using destructuring

```bash
function data() {
  return [1,2,3];
}

var tmp = data() || [];

var first = tmp[0];
// var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
var fourth = tmp.slice(3);
```

```bash
function data() {
  return [1,2,3];
}

var tmp;

[
  first,
  ,
  third,
  ...fourth
] = tmp = data() || [];
```

```bash
var x = 10;
var y = 20;
{
  let tmp = x;
  x = y;
  y = tmp;
}
```

```bash
var x = 10;
var y = 20;
[y, x] = [x, y];
```

## Parameter Arrays

```bash
function data(tmp = []){
  var [
    first = 10,
    second = 20,
    third = 30
  ] = tmp;
}
```

```bash
function data([
  first = 10,
  second = 20,
  third = 30
] = []) {
  // ..
}
```

## Object Destructuring

```bash
function data() {
  return { a: 1, b: 2, c: 3};
}
var first, second, third

var tmp = data();
first = tmp.a;
second = tmp.b;
third = tmp.c;
```

```bash
function data() {
  return { a: 1, b: 2, c: 3, d: 4};
}

var tmp;
var first, second;

tmp = {
  b: second,
  a: first,
  ...third
} = data();
```

## Nested object and array destructuring

```bash
var obj = {
  a: 1,
  b: {
    x: 2
  }
  c: 3
};

var {
  a,
  b,
  b: {
    x: W
  }
  c
} = obj
```

## Named Arguments

## Destructuring and Restructuring

## Array .find(..) Array .includes(..)

* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes>

## flat and flatMap

* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat>
* <https://twitter.com/search?q=smooshgate&src=typd>