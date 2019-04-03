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