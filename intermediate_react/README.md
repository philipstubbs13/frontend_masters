# Intermediate React

* Instructor: Brian Holt
* <https://frontendmasters.com/courses/intermediate-react/>
* Course notes: <https://btholt.github.io/complete-intro-to-react-v4/>
* Code repository: <https://github.com/btholt/complete-intro-to-react-v4/>

## Writing a Component Test with Jest

```bash
npm install -D jest react-test-renderer
```

## Jest Snapshot Tests

* Don't snapshot everything
* Easy to write, low confidence test that this looked like the before and I expect it to continue looking like this until I don't and update it.
* Okay to check in snapshot file
* API test would be a perfect thing to write a snapshot test with.

```bash
npx jest
```

```bash
npx jest --silent
```

```bash
npx jest --silent -u
```

## Creating a Jest CLI Script

Add script to package.json:

```bash
"test": "jest --silent",
"test:update": "jest --silent -u",
```

To run the test:

```bash
npm run test
```

or

```bash
npm t
```

## Testing Component Methods

## Jest Watch

```bash
npm run test -- --watch
```

Add to package.json

```bash
"test:watch": "jest --silent --watch",
```

```bash
npm run test:watch
```

## Code Coverage

Istanbul: <https://istanbul.js.org/> 
Tells you how much of your code is covered by tests.

Add to package.json:

```bash
"test:coverage": "jest --silent --coverage"
```

Make sure to gitignore the coverage directory that is automagically created after you run this.

Open the index.html file in the coverage/lcov-report folder to view coverage report in browser.

## Testing Philosophy

* Test modules. Testing React components not as important because UI may change a lot.

## Installing Emotion and Isolating a Module

To reset your code to the master branch:

```bash
git reset HEAD --hard
```

Emotion: CSS in JS solution

To install Emotion:

```bash
npm install emotion react-emotion
```

## Styling Components with Emotion

<https://www.styled-components.com/docs/tooling#syntax-highlighting>

## Reusing Styles with JavaScript

## Animation with Emotion

## Why Emotion and CSS in JS

* Vue Single File Components: <https://www.styled-components.com/docs/tooling#syntax-highlighting>
* Emotion Docs: <https://emotion.sh/>

## React Loadable

* Code splitting: you don't need all of your code upfront to run your application.

```bash
npm install react-loadable
```

React loadable is a component that you provide to it the component that you want to load, the component to show while it's loading. Can also define an error.

## Why Code Split

* <https://speakerdeck.com/btholt/10-kb-or-bust?slide=8>
* <https://www.youtube.com/watch?v=cy4rCi9mry4>

## Prefetch

* <https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf>
* <https://github.com/btholt/complete-intro-to-react/blob/master/js/AsyncRoute.jsx>

## Redux

* Central data store for your entire repo.
* One React state for your entire repo.
* Very convenient if you have multiple, different components reading from the same data store.
* Extremely testable
* Debugging is pretty great. Time travel debugging.
* Store - central repository of the data (state).
* A reducer is a pure function that takes old state, action, and a payload and returns a new state from that.

```bash
npm install redux redux-thunk react-redux
```

* flux standard actions: <https://github.com/redux-utilities/flux-standard-action>
* Advanced State Management Course: <https://frontendmasters.com/courses/react-state/>
* Redux Dev Tools: <https://github.com/zalmoxisus/redux-devtools-extension#installation>
* Mobx (more complicated than Redux)
* Global actions: <https://github.com/btholt/complete-intro-to-react/blob/master/js/actions.js>

## Server Side Rendering

* Running React application in Node.

```bash
npm install babel-cli express
```