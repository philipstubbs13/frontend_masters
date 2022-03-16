# Testing React Applications v2

* <https://frontendmasters.com/courses/testing-react/>
* Instructor: Kent C. Dodds
* Jest
* <https://slides.com/kentcdodds/testing-react-apps>

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

```bash
// So you can use JSX (which transpiles down to React.createElement):
import React from 'react'

// So you can render the component for testing:
import ReactDOM from 'react-dom'

// So you can create a react element for the component you're testing:
import ItemList from '../item-list'

test('renders "no items" when no items are given', () => {
  const container = document.createElement('div')
  ReactDOM.render(<ItemList items={[]} />, container)
  expect(container.textContent).toMatch('no items')
})

test('renders the items given', () => {
  const container = document.createElement('div')
  ReactDOM.render(<ItemList items={['apple', 'orange', 'pear']} />, container)
  expect(container.textContent).toMatch('apple')
  expect(container.textContent).toMatch('orange')
  expect(container.textContent).toMatch('pear')
})
```

and here's an outline example of your first test:
* Create a "container" to render your component into (tip: use document.createElement('div'))
* Render your component (tip: use ReactDOM.render(JSX, container))
* Make your assertion(s) on the textContent of the container
* (tip: expect's toMatch function might be what you want for example: `expect('some text content').toMatch('text')`)

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
coverageThreshold: {
  global: {
    statements: 18,
    branches: 10,
    functions: 19,
    lines: 18
  }
}
```

## Jest Watch Mode

add to package.json

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

```bash
import React from 'react'
import ReactDOM from 'react-dom'
import Editor from '../editor.todo' 
import * as utilsMock from '../../utils/api'

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve())
    }
  }
})

const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

test('calls onSubmit with the username and password when submitted', async () => {
  const container = document.createElement('div')
  const fakeUser = { id: 'foobar' }
  const fakeHistory = {
    push: jest.fn()
  }
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container)
  const form = container.querySelector('form')
  const { title, content, tags } = form.elements
  title.value = 'I like twix'
  content.value = 'Like a lot... Sorta'
  tags.value = 'twix,      my,  likes'

  const submit = new window.Event('submit')
  form.dispatchEvent(submit)

  await flushPromises()

  expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  expect(fakeHistory.push).toHaveBeenCalledWith('/')
  expect(utilsMock.posts.create).toHaveBeenCalledTimes(1)
  expect(utilsMock.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    title: title.value,
    content: content.value,
    tags: ['twix', 'my', 'likes'],
    date: expect.any(String)
  })
})
```

```bash
import Login from '../login'
import ReactDOM from 'react-dom'
import React from 'react'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  const handleSubmit = jest.fn();
  const container = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)

  const form = container.querySelector('form')
  const { username, password } = form.elements
  username.value = 'chucknorris'
  password.value = 'I do not need a password'

  form.dispatchEvent(new window.Event('submit'))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value
  })
  // Arrange
  // create a fake object to hold the form field values (username and password)
  // create a jest.fn() for your submit handler
  // render the Login component to a div
  // TIP: const div = document.createElement('div')
  //
  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  // TIP: const form = div.querySelector('form')
  // fill in the field values
  //
  // Act
  // submit the form:
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // ensure your submit handler was called properly
})
```

## Snapshot Testing

* <https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269>
* <https://kentcdodds.com/blog/effective-snapshot-testing>

