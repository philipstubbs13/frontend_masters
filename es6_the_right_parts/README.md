# ES6: The Right Parts

* Instructor: Kyle Simpson
* <https://frontendmasters.com/courses/es6-right-parts/>
* Automated code readability

## The arrow function

```bash
foo = x ==> 2;

function foo() {
  return 2;
}
```

## Arrow function variations

```bash
=> 3
() => 3
_ => 3
x => 3
(...x) => 3
(x,y) => 3
x => { try { 3; } catch(e) {} }
x => { return 3; }
x => ({ y: x})
var foo = x => 3;
foo.name; // "foo"
foo ( x => 3 )
```

## Promises and This

```bash
p.then( function extractId(v) { return v.id } )

p.then( v => v.id )\

var obj = {
  id: 42,
  foo: function foo() {
    setTimeout(() =>
      console.log ( this.id )
    ,100);
  }
};

obj.foo(); // undefined instead of 42
```

```bash
function foo(x) {
  if (x > 5) return x;
  else return 1;
}

var foo = x => x > 5 ? x : 1;

## Block Scoping

* Use var when intended to use across a lot of scopes.
* Use let when you want to contain it to this block.

```bash
function foo(x,y) {

  if ( .. ) {
    var w = ..
    var r = ..
  }
  else if ( .. ) {
    var w = ..
    var r = ..
  }
  else {
    var w = ..
    var r = ..
  }

  let z;

  try {
    z = bar(x * 2);
  } catch(err) {
    // ..
  }

  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }

  for (let i=0; i<10; i++){
    // ..
  }
}

```

## Closures & Explicit Blocs

* TDZ - temporary dead zone

```bash
function foo(x, y) {
  for (let i=0; i<10; i++){
    $("#btn" +i).click(function(){
      console.log(" button " + i + " clicked!");
    });
  }
}

function foo(x, y) {
  
  if (x > y) {
    { let x = 2;
      // ..
    }
  }

}
```

## Const

* a constant is a variable that cannot be reassigned.
* Use var
* Use let where that's helpful
* every once in a while maybe use const.
* const keyword is saying i'm not going to reassign this variable in the next few lines of code.

```bash

const x = 3;

const y = [0,1,2];
y = 2;
y = [];
y[0]=42;

function foo(x, y) {
  
  if (x > y) {
    { const x = 2, y = x * 3;
      // ..
    }
  }

}

```

```bash

{
  var x = Object.freeze([1,2,3]);

  // ..

  foo(x);
}

```

## When to use const

```bash

const PI = 3.14;

function foo() {
  const x = Object.freeze([1,2,3,........]);

  $("#btn").click(function(){
    console.log( x[0] );
    x.length = 0;
  })
}

```

## Default Values

```bash

function foo(x) {
  x = x !== undefined ? x : 42;
}

foo( undefined )


function foo(x = 42) {

}

foo(0)
foo(null)
foo(undefined)
foo.apply(null, []);
foo.apply(null, [,] );
```

```bash

function required() {
  throw "Parameter required!";
}

function foo(id = required("id"), x = id) {

}

foo(); // !
foo(); // !

```

```bash
var x = 1;

function foo( x = 2, f = function() { return x; } ) {
  var x = 5;
  console.log( f() );
}

foo();
```

## Gather and spread operators

* Imperative includes all of the implementation details of how
* Purpose of abstraction is focus.

```bash
function foo() {
  var args = [].slice.call ( arguments );
  args.unshift( 42 );
  bar.apply ( null, args );
}

function foo( x, ...args ) {
  bar( 42, ...args );
}
```

## Using the Gather and Spread Operator

```bash
var x = [1,2,3];
var y = [4,5];
var z = [0].concat(x,y,[6]);
```

```bash
var x = [1,2,3];
var y = [4, 5];
var z = [0,...x,...y,6];

foo( 0,...x,...y,6 )
```

```bash
function foo(x,y,...rest) {
  return rest;
}

var a = [1,2,3];
var b = [4,5,6];

foo ( ...a, ...b );
```

```bash
var str = "Hello";

[...str]
```

## Babel

* Transpiling - take the es6 code and convert it into the equivalent of what will be es5.
* babeljs.io

## Array Destructuring

```bash
function foo() {
  return [1,2,3];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];
```

```bash
function foo() {
  return [1,2,3,4,5,6];
}

var a,b,c,args;

var o = {};

[
    o.a,
    o.b = 42,
    o.c,
    ...o.args
]  = foo() || [];
```

```bash
var x = 10, y = 20;

[x,y] = [y,x];
```

```bash
var a = [1,2,3];

[ , , ...a ] = [ 0, ...a, 4 ];
```

## Object Destructuring

## Nested Object Destructuring

## Destructuring and Function Parameters

```bash
function foo( [a,b,c] = [] ) {
  console.log( a, b, c);
}

foo( [1, 2, 3]);
```

## Advanced Destructuring

```bash
var defaults = {
  method: "POST",
  callback: function(){}
  headers: {
    "content-type": "text/plain"
  }
};

var config = {
  url: "http://some.url",
  callback: foo,
  headers: {
    "x-requested-with": "foo"
  }
};


{
  let {
    method = "POST",
    url,
    callback = function(){},
    headers: {
      "content-type": contentType = "text/plain",
      "x-requested-with": xRequestedWith
    }
  } = config;

  config = {
    method,
    url,
    callback,
    headers: {
      "content-type": contentType,
      "x-requested-with": xRequestedWith
    }
  };
}
```

## Concise Properties and Methods

```bash
var a = 1;

var obj = {
  a,
  b() { },
  // b: function() {}
  [c]: 42,
  [c+"fn"]() { },
  *foo(){},
  *[c+"gn"]() { }
};
```

## Template Strings

```bash
var name = "Kyle";
var orderNumber = "123";
var total = 319.7;

var msg = "Hello, " + name + ", your \
order (#" + orderNumber + ") was $" +
total + ".";
```

```bash
var name = "Kyle";
var orderNumber = "123";
var total = 319.7;

var msg = `Hello, ${name}, your
order (#${orderNumber}) was $${total}.`;
```

* A template literal is a multiline string. The old es5 way is just a string that spans multiple lines.
* Interpolated string literals (interpoliterals)

## Tag Functions

```bash
function currency(strings, ...values){
  var str = "";
  for (var i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i-1] == "number") {
        str += values[i-1].toFixed(2);
      }
      else {
      str += values[i-1];
      }
    }
    str += strings[i];
  }
  return str;
}

var name = "Kyle";
var orderNumber = "123";
var total = 319.7;

var msg = currency`Hello, ${name}, your
order (#${orderNumber}) was $${total}.`;
```

## Symbols

```bash
var x = Symbol( " whatever description " );

var obj = {
  id: 42
};

obj[x] = "shhh this is secret!";
```

## Well known symbols

```bash
Symbol.iterator
Symbol.toStringTag
Symbol.toPrimitive
Symbol.isConcatSpreadable
```

## Iterators

* A simple interface for stepping through data.

```bash
var arr = [1,2,3];

var it = arr[Symbol.iterator]();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }
```

```bash
var arr = [1,2,3];

var str = "Hello";

for ( var v of arr ) {
  console.log( v );
}

for ( var v of str ) {
  console.log( v );
}

[ ...str ]

[ x, y, ...rest ] = [ ...str ];
```

## Creating a Custom Iterator

```bash
var obj = {
  [Symbol.iterator]() {
    var idx = this.start, en = this.end;
    var it = {
      next: () => {
        if (idx <= en ) {
          var v = this.values[idx];
          idx++;
          return { value: v, done: false }
        }
        else {
          return { done: true };
        }
      }
    };

    return it;
  },
  values: [ 2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32 ],
  start: 4,
  end: 13
};

var vals = [ ...obj ];
```

## Generators

* A generator is a function that can be started and stopped as many times as you would like.
* state machine
* generates values

```bash
function *main() {
  console.log("hello");
  yield 9;
  console.log("world");
  return 10;
}

var it = main();

it.next(); // { value: 9, done: false }

it.next(); // { value: 10, done: true }

for ( var v of main()) {
  console.log( v );
}
```

```bash
function uniqID() {
  while (true) {
    yield Math.random();
  }
}

var numbers = uniqID();

numbers.next().value
```

## Computed Generated Methods

```bash
var obj = {
  *[Symbol.iterator]() {
    for (var i = this.start; i <= this.end; i++) {
      yield this.values[i];
    }
  },
  values: [ 2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32 ],
  start: 4,
  end: 13
};

var vals = [ ...obj ];
```

## Ranges

```bash
Number.prototype[Symbol.iterator] = function*(){
  for (var i=0; i<=this; i++) {
    yield i+
  }
};
[...8]
```