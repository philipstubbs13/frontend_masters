# JavaScript Testing Practices and Principles

* Course: <https://frontendmasters.com/courses/testing-practices-principles/>
* Slides: <https://slides.com/kentcdodds/testing-principles#/>
* Repo: <https://github.com/kentcdodds/testing-workshop>

## What kind of bugs are there

* Security bugs
* Memory leaks
* Logic
* Integration
* null pointer exceptions
* regression
* accessiblity

## How do we prevent bugs

1. Static Types: Flow/TypeScript
2. Linting: ESLint
3. Testing: ??

## What kinds of testing can we do

* unit testing
* integration testing
* E2E testing
* performance
* stress test
* penetration testing
* a11y testing
* i18n testing
* regression testing
* fuzz testing

## What is a JavaScript Test

* <https://kentcdodds.com/blog/but-really-what-is-a-javascript-test/>
* Fundamentally, a test is something that throws an error if there's a problem.

## Jest Testing Framework

```bash
npm run test:expect
```

* <https://github.com/atlassian/jest-in-case>
* <https://github.com/kentcdodds/rtl-css-js>
* <https://kentcdodds.com/blog/what-code-comments-can-teach-us-about-scaling-a-codebase>

## Code Coverage

* Instanbul
  * <https://istanbul.js.org/>

* Mac

```bash
open coverage/lcov-report/index.html
```

* Windows

```bash
start coverage/lcov-report/index.html
```
  