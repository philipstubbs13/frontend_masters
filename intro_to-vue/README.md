# Introduction to Vue.js

* <https://github.com/sdras/intro-to-vue>
* Code pen collection: <https://codepen.io/collection/noYZxW/>
* Instructor: Sarah Drasner
* CSS tricks vue guide: <https://css-tricks.com/guides/vue/>

## Why Vue

* Declarative
* Legible
* Easy to Maintain
* Powerful
* A collection of the best of the best.
* Elegant
* Gives me what I want when I neet it, and gets out of my way.
* A way to be really productive.
* Goodness gracious it's freaking fun!

## Comparison with other frameworks

* A virtual DOM
* Reactive components that offer the View layer only.
* Props and a Redux-like store similar to React.
* Conditional rendering, and services, similar to Angular
* Inspired by polymer for simplicity and performance. Vue offers a similar development style as HTML, styles, and JavaScript are composed in tandem.
* Slightly better performance than React, no use of polyfills like Polymer.
* Nuxt.js: <https://nuxtjs.org/>

## Comparing Vanilla JS with Vue

* Vue is clean, semantic, declarative, legible, easy to maintain, reactive.

## Directives

* Directives are these tiny pieces of HTML attributes that Vue offers us. Always prepended with "v-". it basically attaches some piece of functionality to that bit of HTML markup so you're not diving into the DOM and doing something with it.
* v-text
  * similar to using mustache templates.
  * If you want to dynamically update, it's recommended to use mustache templates instead.
* v-html
  * great for strings that have html elements that need to rendered.
  * Warnings: Not the same as templates: inserted as plain Html. Don't use on user-rendered content, avoid XSS attacks.
* v-if/v-show
  * is a conditional that will display information depending on meeting a requirement. This can be anthing - buttons, forms, divs, components.
* v-if/v-else
  * pretty straightforward - you can conditionally render one thing or another. There's also v-else-if.
* v-else-if
* v-for
  * Loops through a set of values. Can also do a static number
* v-on or @ - extremely useful so there's a shortcut. v-on is great for binding to events like click and mouseenter. You're able to pass in a parameter for the event like (e). We can also use ternaries directly.
* v-bind
  * one of the most useful directives so there's a shortcut. We can use it for so many things - class and style bindings, creating dynamic props, etc...
* v-model
  * Creates a relationship between the data in the instance/component and a form input, so you can dynamically update values.
* v-pre - will print out the inner text exactly how it is, including code (good for documentation)
* v-cloak
* v-once - will not update once it's been rendered.

* Modifiers
  * v-model.trim - will strip any leading or trailing whitespace from the bound string.
  * v-model.number - changes strings to number inputs.
  * v-model.lazy - won't populate the content automatically. It will wait to bind until an event happens. (it listens to change events instead of input)
  * @mousemove.stop is comparable to e.stopPropogation()
  * @mousemove.prevent is like e.preventDefault()
  * @submit.prevent this will no longer reload the page on submission.
  * @click.once not to be confused with v-once, this click event will be triggered once.
  * @click.native so that you can listen to native events in the DOM.
  * Keycodes, and configure your own.

  * Exercise: <https://codepen.io/sdras/pen/vZjozM/>
  * Solution: <https://codepen.io/sdras/pen/685454ccb793ad59193a369c58b8747b>

## Methods, Computed, Watchers

* Methods - are bound to vue instance, they are incredibly useful for functions you would like to access in directives.
  * Runs whenever an update occurs.
  * Not cached
  * Typically invoked from v-on/@, but flexible.
  * 


* Computed Properties - calculations that will be cached and will only update when needed. Highly performant but use with understanding.
  * Runs only when a dependency has changed.
  * Cached
  * Should be used as a property, in place of data.
  * By default getter only, but you can define a setter.
  * using our computed property in place of the data, we now have a different view of the data.

* Exercise: <https://codepen.io/sdras/pen/WOyjoj/>
* Solution: <https://codepen.io/sdras/pen/9405ba833415572d34ec7c3ba13b1608>

## Watchers

* What is Reactive?
  * Reactive programming is programming with asynchronous data streams.
  * A stream is a sequence of ongoing events ordered in time that offer some hooks with which to observe it.
  * When we use reactive premises for building applications, this means it's very easy to update state in reaction to events.
  * Vue takes the object, walks through its properties and converts them to getters/setters.
  * Vue cannot detect property addition or deletion so we create this object to keep track.
* Each component has a watcher instance.
* The properties touched by the watcher during the render are registered as dependencies.
* When the setter is triggered, it lets the watcher know, and causes the component to re-render.
* The Vue instance is the middleman between the DOM and the business logic.
* Watch updates the DOM only if it's required - performing calculations in JS is really performant but accessing the DOM is not. So we have a Virtual DOM wich is like a copy, but parsed in JavaScript.
* Watchers are good for asynchronous updates, and updates/transitions with data changes.
* when watching a property, you trigger a method on change.
* We also have access to the new value and the old value.
* We can also gain access to nested values with 'deep'.
* Transitioning state with watchers
  * SVG is good for this because it's built with MATH
* you can retrieve the old value and the new one.
* <https://vuejs.org/v2/guide/reactivity.html>
* <https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects>
* <https://punkapi.com/>
* <https://greensock.com/>
* <https://gist.github.com/staltz/868e7e9bc2a7b8c1f754>

## Components

* Vue.js uses HTML-based template when template syntax to bind the Vue.js instance to the DOM, very useful for components
* Templates are optional, you can also write render functions with optional JSX support.
* strings - only useful for small cases.
* Component is a collection of elements that are encapsulated into a group that can be accessed through one single element.
* Props - passing data down from the parent to the child.

```bash
props: ['text']
```

* props are intended for one way communication.
* you can think of it a little like the component holds a variable that is waiting to be filled out by whatever the parent sends down to it.
* Props - types and validations

```bash
props: {
  text: [String, Number]
}
```

* Objects and arrays need their defaults to be returned from a function:

```bash
text: {
  type: Object,
  default: function () {
    return { message: 'hello mr. magoo' }
  }
}
```

* You don't need to necessarily pass the data in props to the child, either, you have the option of using vue instance data or a static value as you see fit.
* We use v-bind or : to dynamically bind props to data on the parent.
* Each component instance has its own isolated scope.
  * data must be a function
* camelCasing will be converted

```bash
props: ['booleanValue']
```

* in HTML it will be kebab-case:

```bash
<checkbox :boolean-value="booleanValue"></checkbox>
```

* Refactoring into a component

```bash
Vue.component('individual-comment', {
  template: '#comment-template',
  props: ['commentpost']
});
```

* Communicating events
  * $emit
    * The child is reporting it's activity to the parent.

* Slots
  * We can use slots to populate content.
  * You can have defaults
  * You can have more than one.
    * or just keep things tidy by naming them.

* keep-alive

* Refactoring into a component
  * Exercise: <https://codepen.io/sdras/pen/OgBmYV/>
  * Solution: <https://codepen.io/sdras/pen/owaWwd>

## Introducing Vue CLI

* Build process that allow us to use greate features like ES6, or SCSS, easy to use other libraries.
* We're going to build and concatenate single file templates, which are AWESOME.
* Not load all our files at startup(lazy load, async)
* Server side rendering, code splitting, performance metrics
* Build/prod versions

```bash
npm install -g vue-cli

----------

vue init webpack-simple my-project
cd my-project
yarn

npm run dev
```

* Eventualy we'll use webpack, not webpack-simple

* Single file templates

```bash
<template>
  <div>
    <!-- Write your HTML with Vue in here -->
  </div>
</template>

<script>
  export default {
    // Write your Vue component logic here
  }
</script>

<style scoped>
  /* Write your styles for the component in here */
</style>
```

* Vue files mean no context shifting

```bash
import New from './components/New.vue';

export default {
  components: {
    New
  }
}

<new></new>
```

* Vue CLI Walkthrough
  * Codepen: <https://codepen.io/sdras/pen/2751def77693975f59bc72a237f1ba89>
  
  * Build for deployment

  ```bash
  npm run build
  ```

  * You'll start off with an App file in your /src/
  directory with a Hello.vue file in the /components directory. This is really nice because you can see already how you'd set up these files, and how imports and exports might work.

## Vue Snippets

* vue-sublime-snippets
* atom (v 1.x)
* vscode
* Vetur for vscode

* style scoped allows us to easily scope the styles for this component to only this component.
  * @import styles: vue-style-loader
* Slots in Vue components with the scoped style tags, they apply to the component that has the slots.