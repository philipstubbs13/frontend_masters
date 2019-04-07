# JavaScript: The Hard Parts

* Instructor: Will Sentance
* <https://frontendmasters.com/courses/javascript-hard-parts/>
* Slides: <https://frontendmasters.com/assets/resources/willsentance/js-the-hard-parts.pdf>

## Global Execution Context

* As soon as we start running our code, we create a global execution context.
  * Thread of execution (parsing and executing the code line after line)
  * Live memory of variables with data (known as Global Variable Environment)
* The Thread of JavaScript
  * Single threaded (one thing at a time)
  * Synchronous execution (for now)

## Local Execution Context

* When you execute a function you create a new execution context comprising:
  * The thread of execution (we go through the code in the function line by line)
  * A local memory (variable environment) where anything defined in the function is stored.

## Call Stack

* Special data structure that allows us to track where JavaScript (the thread of execution) is currently in my code.
* We keep track of the functions being called in JavaScript with a Call stack.
* Tracks which execution context we are in - that is, what function is currently being run and where to return to after an execution context is popped of the stack.
* One global execution context, multiple function contexts.

## Functional Programming

* Functions are first class citizens.
* Pure functions (no side effects)
* Higher order functions - highly valuable tool & often part of the Codesmith interview.

## Higher Order Functions

## Callbacks and Higher Order Functions Exercises

* <http://csbin.io/callbacks>
* Solution: <https://github.com/FrontendMasters/fm-snippets/blob/master/2018-01-22-javascript-hard-parts/fem-JavaScriptTheHardParts-CallbacksSolutions.js>

## Passing Functions

* <http://csbin.io/callbacks>
* Solutions: <https://github.com/FrontendMasters/fm-snippets/blob/master/2018-01-22-javascript-hard-parts/fem-JavaScriptTheHardParts-CallbacksSolutions.js>

## First Class Objects

* Functions in Javascript = first class objects
* They can co-exist with and can be treated like any other javascript object.

1. assigned to variables and properties of other objects.
2. passed as arguments into functions.
3. returned as values from functions.

## Higher Oder function

* A function that can take in another function.
* The outer function that takes in the function (our callback) is a higher-order function.
* Takes in a function or passes out a function.

## Callback function

* A function that can be passed in as input.
* The function we pass in is a callback function.

## Closure

* When our functions get called, we create a live store of data (local memory/variable environment/state) for the function's execution context.
* When the function finishes executing, its local memory is deleted (except the returned value).
* But what if our functions could hold on to live data/state between executions?
* This would let our function definitions have an associated cache/persistent memory.
* But it starts with us returning function from another function.
* Closures exercises: <http://csbin.io/closures>
* Closures solutions: <https://github.com/FrontendMasters/fm-snippets/blob/master/2018-01-22-javascript-hard-parts/fem-JavaScriptTheHardParts-ClosuresSolutions.js>
* Where you define your functions determines what variables your function have access to when you call the function.
* There is a way to run a function outside where it was defined - return the function and assign it to a new variable.
* Closure - the closed over variable environment ("my backpack")
* Lexical scope
  * when a function is defined, it gets a [[scope]] property that references the Local Memory/Variable Environment in which it has been defined.
  * Wherever we call the incrementCounter function - it will always look first in its immediate local memory (variable environment), and then in the [[scope]] property next before it looks any further up.
* JavaScript static/lexical scoping
  * Our lexical scope (the available live data when our function was defined) is what determines our available variables and prioritization at function execution, not where our function is called.
* The power of closure
  * Now: our functiongs get 'memories' - once, memoize.
  * Advanced: We can implement the module pattern in JavaScript.