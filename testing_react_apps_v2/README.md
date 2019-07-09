# Testing React Applications v2

* <https://frontendmasters.com/courses/testing-react/>
* Instructor: Kent C. Dodds
* Jest

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

## Jest JSDOM

```bash
"jest": {
  "testEnvironment": "node"
},
```

```bash
"jest": {
  "testEnvironment": "jsdom"
},
```

## CSS Imports

* Created configuration file called jest.config.js.
* Created file at test/style-mock.js

```bash
npm install --save-dev identity-obj-proxy
```

## CSS Modules

```bash
npm install --save-dev babel-plugin-dynamic-import-node
```

## Handling Dynamic Imports

## Adding Code Coverage Reports

* Add this to package.json

```bash
"test": "jest --coverage",
```

* Add this to jest-config.js

```bash
collectCoverageFrom: ['**/src/**/*.js'],
```

## Jest Watch Mode

```bash
"test:watch": "jest --watch",
```

```bash
npm run test:watch
```

## Jest Config Review

* Added jest as a dependency.
* Added identity-obj-proxy as a dependency.
* Added babel-plugin-dynamic-import-node as a dependency.
* Added the following scripts:

```bash
"test": "jest --coverage",
"test:watch": "jest --watch"
```

* Added a couple tests.
* Added jest-config.js
  * Added moduleNameMapper to support css modules.
  * Added setupTestFrameworkScriptFile for anything not supported by default.
  * Specified where we want our coverage to be collected.
  * Specified coverage thresholds.
* Updated .babelrc.js
  * because we do care about tree shaking.
  * because we have dynamic imports to support.

## Unit Testing a React Component

```bash
npm run test:client
```

* <https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d>
* <https://github.com/kentcdodds/how-jest-mocking-works>

## react-testing-library

## Snapshot Testing

* <https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269>