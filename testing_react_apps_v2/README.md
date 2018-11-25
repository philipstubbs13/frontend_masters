# Testing React Applications v2

* <https://frontendmasters.com/courses/testing-react/>
* Instructor: Kent C. Dodds

## What this workshop is

* Learn the fundamentals of what a test is and what role testing frameworks play.
* Configure Jest for a client-side React project
* Learn what Code Coverage is and how to properly use that metric.
* Write unit tests for JavaScript utilities and React components.
* Learn what snapshot testing is and how to use it effectively.
* Write integration tests for a React application.
* Configure Cypress for a web application.
* Write E2E (end-to-end) tests with Cypress.

## Setup

```bash
git clone https://github.com/kentcdodds/testing-workshop.git
cd testing-workshop
npm run setup --silent
```

git.io/testing-worshop

## Testing Fundamentals

* Static Code Analysis
  * ESLint
  * flow
* Unit tests
* Integration tests
* End-to-end tests
* But really, what is a JavaScript test?
  * <https://blog.kentcdodds.com/but-really-what-is-a-javascript-test-46fe5f3fad77>
  * Something that throws an error when things are wrong.

## Writing a React Test

```bash
npm run test:react
```

## Configuring Jest & Babel

```bash
cd ./other/configuration/calculator
npm run dev
npm install --save-dev jest
npm t
```
