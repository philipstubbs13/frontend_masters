# JavaScript: From Fundamentals to Functional JS, v2

* Instructor: Bianca Gandolfo
* <https://frontendmasters.com/courses/js-fundamentals-functional-v2/>
* Slides (Day 1): <https://slides.com/bgando/f2f-final-day-1>
* Slides (Day 2): <https://slides.com/bgando/f2f-final-day-2#/>

## Functional Programming

* Breaking up your code into verbs.

## Data Structures - Objects and Arrays

* Arrays are just objects.
* Array is a type of object with methods already attached to it.

## Object Review

* The Rules
  * Dots
    * strings
  * Brackets
    * strings
    * numbers
    * variables
    * weird characters
    * expressions

```bash
_.each = function(list, callback) {
  //... TODO
}
```

## Scope

* A function has access to its own local scope variables.
* inputs to a function are treated as local scope variables.
* block scope can be created with let
* A function has access to the variables contained within the same scope that function was created in.
* A function's local scope variables are not available anywhere outside that function.
* A function's local scope variables are not available anywhere outside that function, regardless of the context it's called in.
* If an inner and outer variable share the same name, and the name is referenced in the inner scope, the inner scope variable masks the variable from the outer scope with the same name. This renders the outer scope variables inaccessible from anywhere within the inner function block.
* If an inner and outer variable share the same name, and the name is referenced in the outer scope, the outer value binding will be used.
* A new variable scope is created for every call to a function, as exemplified with a counter.
* A new variable scope is created for each call to a function, as exemplified with uninitialized string variables.
* An inner function can access both its local scope variables and variables in its containing scope, provided the variables have different names.
* between calls to an inner function, that inner function retains access to a variable in an outer scope. Modifying those variables has a lasting effect between calls to the inner function.
* the fule about retaining access to variables from an outer scope still applies, even after the outer function call (that created the outer scope) has returned.

## Higher order functions and callbacks

* Higher order functions
  * Takes a function as an input (argument)
  * Returns a function as the output.

* Callbacks are functions we pass to functions.