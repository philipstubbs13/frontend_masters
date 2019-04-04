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