# Functional-Light Javascript, v3

* <https://frontendmasters.com/courses/functional-javascript-v3/>
* Course slides: <http://static.frontendmasters.com/resources/2019-05-06-functional-light-v3/functional-light-v3.pdf>
* Imperative vs Declarative
  * Imperative code means code that is focused primarily on how to do something.
  * Declarative code - the how is not the important part. The important part is the what/the outcome and even more important than that, the why.
  * Your code comment should not duplicate the narrative of what the code is doing.
  * Your code comment should focus on the why, not the what, and sometimes should focus on the how if the code is confusing/hard to understand.
* The best code is the code that doesn't have to be read.
* Functions
  * Functional programming is not all about the function keyword.
  * A procedure is a collection of operations.
  * A function not only has to take some input, it has to return some output.
  * If it doesn't have a return keyword, it is definitely not a function.
  * Functions can only call other functions. Functions can't call procedures. Otherwise, they become procedures.
  * A function is a relationship between the input and the output.
  * Function: the semantic relationship between input and computed output.
* Side effects
  * The inputs and the outputs have to be direct.
  * If the inputs, outputs, or both are indirect, then it is not a true function.
  * Indirect inputs, indirect outputs, or both are "side effects."
  * In JavaScript, there's no such thing as a function. There's such a thing as a function call.
  * Avoid side effects with function calls... if possible.
  * I / O (console, files, etc)
  * Database Storage
  * Network Calls
  * DOM
  * Timestamps
  * Random Numbers
  * CPU Heat
  * CPU Time Delay
  * Side effects impurify the benefits of functional programming.
  * No such thing as "no side effects"
  * Avoid them where possible, make them obvious otherwise.
