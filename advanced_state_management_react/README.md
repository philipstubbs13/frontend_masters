# Advanced State Management in React (feat. Redux and Mobx)

* Instructor: Steve Kinney
* <https://frontendmasters.com/courses/react-state/>
* Slides and code: <https://gist.github.com/stevekinney/7b25237edd43c3e450b288c9e7857c29>

## What is Application State

* The main job of React is to take your application state and turn it into DOM nodes.
* React Docs: Thinking in React
  * The key here is DRY: Don't Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.
  * Is it passed in from a parent via props? If so, it probably isn't state.
  * Does it remain unchanged over time? If so, it probably isn't state.
  * Can you compute it based on any other state or props in your component? If so, it isn't state.
  * React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state.
* props vs state
* State is created in the component and stays in the component. It can be passed to a children as its props.

## Types of state

* All state is not created equal.
* There are many kinds of state.
  * Model data: The nouns in your application.
  * View/UI state: Are those nouns sorted in ascending or descending order?
  * Session state: Is the user even logged in?
  * Communication: Are we in the process of fetching the nouns from the server?
  * Location: Where are we in the application? Which nouns are we looking at?
* State relative to time
  * Long-lasting state: This is likely the data in your application.
  * Ephemeral state: Stuff like the value of an input field that will be wiped away when you  hit "enter."
* Ask yourself: Does a input field need the same kind of state management as your model data?
* What about form validation?
* Does it make sense to store all of your data in one place or compartmentalize it?

## React Component State

* this.setState() is asynchronous.
* React is trying to avoid unnecessary re-renders.
* this.setState also takes a callback.

## State patterns and anti-patterns

* State should be considered private data (unique to this component).
* When we're working with props, we have PropTypes. That's not the case with state.
* Don't use this.state for derivations of props.
* You don't need to shove everything into your render method.
* You can break things out into helper methods.
* Don't use state for things you're not going to render.
* Use sensible defaults.

## State Architecture Patterns

* React state is stored in a component and passed down as props to its children.
* Data down. Events up.
* Identify every component that renders something based on that state.
* Find a common owner component (a single component above all the components that need the state in the hierarchy).
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
* Though this sounds complex, it's really just a few lines of code. And it's really explicit how your data is flowing throughout the app.
* While it may be a little more typing than you're used to, remember that code is read for more than it's written, and it's extremely easy to read this modular, explicit code.
* As you start to build large libraries of components, you'll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink.
* This effectively means that all state needs to live in the topmost common component that needs access.
* The Lowest Common Ancestor
* Deep component trees

## Introduction to the Container pattern

* Draw a line between state and presentation.
* Container components manage state and pass it to presentational components.
* Presentational components receive props and render UI.
  * They also receive actions and pass them back to the container.
  * They either only have a render() method or they are stateless functional components.

## Higher Order Components

* A container factory.
* Hey, I'm going to need this state all over the place - and I don't want to pass it all around.

## Render Properties

## The Flux Pattern

* Make a dispatcher

```bash
const AppDispatcher = new Dispatcher();
```

* An action creator is simply a function that dispatches an object.

```bash
export const addItem = value => {
  AppDispatcher.dispatch({
    type: 'ADD_NEW_ITEM',
    item: {
      id: uniqueId(),
      packed: false,
      value,
    },
  });
};
```

* Stores register themselves with the dispatcher

```bash
class ItemStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      if (action.type === 'ADD_NEW_ITEM') { ... }
      if (action.type === 'UPDATE_ITEM') { ... }
      if (action.type === 'REMOVE_ITEM' ) { ... }
    });
  }
}
```

* The store contains models. It registers itself with the dispatcher and receives actions.

* action (noun): The minimal amount of information necessary to represent the change that should occur.

* Actions are the only way to initiae a change to the state inside a store.

* Actions can contain additional information, but they don't need to.

* Whenver it does something based on an action, it emits a change event.

* Your views listen for these change events.

* Your views can trigger actions based on user interaction.

* Which then goes to the dispatcher and then to the store, which triggers another change - updating the view.