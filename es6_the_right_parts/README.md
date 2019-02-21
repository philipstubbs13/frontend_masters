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