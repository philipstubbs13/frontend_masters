# Functional JavaScript First Steps

* <https://frontendmasters.com/courses/functional-first-steps/>
* <https://observablehq.com/collection/@anjana/functional-javascript-first-steps>
* <https://www.youtube.com/watch?v=TbP2B1ijWr8>
* <https://www.recurse.com/>
* <https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming>
* pure functions
  * only input in
  * only output out
  * a function that does not have any side effects.
* Why functional programming?
  * more predictable, safer
  * easier to test/debug
* Why functional JavaScript?
  * object-oriented JS gets tricky
  * (prototypes? this?!?)
  * established community and tools.
* Avoid side effects
  * do nothing but return output based on nothing but input.
* Recursion
* Tail Call Optimization
* Proper Tail Calls
* first class functions
  * can be passed around as values (like callbacks)
* higher order functions
  * take other functions as input/output
* Remember: Don't loop
  * use higher-order functions like map, reduce, filter instead.
* <https://www.datasciencecentral.com/forum/topics/what-is-map-reduce>
* Closure
  * Functions can define functions
  * return the inner function and it will "remember" scope.
  * This lets us "partially apply" functions to "lock in" some arguments and make more reusable functions.
* Currying breaks up a multi-arg function into a series of single-arg ones.
* The Lambda Function
* Functional Composition
  * It's functons all the way down.
  * program === function(s)
  * Flow data through functions
    * outputs become inputs become outputs.
  * function composition lets us make complex programs out of simple functions.
* Immutability
  * Avoid mutability for happier programming.
  * don't change in-place; instead, replace.
  * Copying data isn't very efficient...
    * immutable data structures to the rescue!
  * Immutable (aka persistent) data structures
    * use "structural sharing" to reuse unchanged data.
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>
  * Immutable data structures video: <https://www.youtube.com/watch?v=n5REbbvRYqQ>
