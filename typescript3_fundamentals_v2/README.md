# TypeScript 3 Fundamentals, v2

* <https://frontendmasters.com/courses/typescript-v2/>
* Course repo: <https://github.com/mike-works/typescript-fundamentals>
* Slides: <https://drive.google.com/file/d/170oHzpLNeprUa-TMmOAnSU4caEFDSb3e/view>

## What's TypeScript

* An open-sourced typed, syntactic superset of JavaScript, developed by Microsoft.
* Compiles to readable JavaScript.
* Comes in three parts: Language, Language Server, and Compiler
* Works seamlessly with Babel 7.


## Why add types

* Encode constraints and assumptions, as part of developer intent.
* Catch common mistakes (i.e. incomplete refactors)
* Move some runtime errors to compile time.
* Provide your consumers (including you) with a great DX.

## Type Systems and Type Equivalence

* Nominal Type Systems answer this question based on whether x is an instance of a class/type named HTMLInputElement.

* Structural Type Systems only care about the shape of an object. This is how typescript works.

## Object Shapes

* When we talk about the shape of an object, we're referring to the names of properties and types of their values.

## Wider vs Narrower

* Describes: relative differences in range of a type's allowable values.
