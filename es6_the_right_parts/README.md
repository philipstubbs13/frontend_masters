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