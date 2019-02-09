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