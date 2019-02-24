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

## Lifecycle hooks

* The lifecycle hooks provide you a method so that you might trigger something precisely at different junctures of a component's lifecycle. Components are mounted when we instantiate them, and in turn unmounted, for instance when we toggle them in a v-if/v-else statement.
  * beforeCreate
  * created
  * beforeMount
  * mounted
  * beforeUpdate
  * updated
  * activated
  * deactivated
  * beforeDestroy
  * destroyed
* Lifecycle hooks also auto-bind to the instance so that you can use the component's state, and methods. Again, you don't have to console.log to find out what this refers to.
* For this reason though, you shouldn't use an arrow function on a lifecycle method, as it will return the parent instead of giving you nice binding out of the box.

## Introducing Nuxt.js

* automatic code splitting
* server side rendering
* lighthouse reports: <https://developers.google.com/web/tools/lighthouse/>
* powerful routing system with asynchronous data
* great lighthouse scores out of the gate
* static file serving
* ES6/ES7 transpilation
* hot reloading in development
* pre-processor: SASS, LESS,Stylus, etc
* Write Vue files

## Nuxt.js Application Walkthrough

```bash
npm install -g vue-cli

-----------

vue init nuxt/starter my-project
cd my-project
yarn

npm run dev
```

* <https://github.com/sdras/intro-to-vue/tree/master/setup2>
* Exercise: <https://codepen.io/sdras/pen/owaWwd>

## Animations

* Transitions are taking one thing that is at one particular state and another thing that is at another state and it's interpolating those values.
* Animations can have multiple steps. Animations are slightly more powerful.
* <http://cubic-bezier.com/#.17,.67,.83,.67>
* Exercise: <https://codepen.io/sdras/pen/pRWxGg>
* Transition modes
  * in-out 
    * The current element waits until the new element is done transitioning in to fire.
  * out-in
    * The current element transitions out and then the new element transitions in.
* JavaScript hooks
* <https://daneden.github.io/animate.css/>

## Filters, Mixins, and Custom Directives

* Filters aren't replacements for methods, computed values, or watchers, because filters don't transform the data, just the output that the user sees.
* Examples of using filter
  * Tip calculator, formatting dates, chance currency
* Filters sound like it would be good to filter a lot of data, but filters are rerun on every single update, so better to use computed, for values like these that should be cached.
* It's a common situation: you have two components that are pretty similar, they share the same basic functionality, but there's enough that's different about each of them that you come to a crossroads: do I split this component into two different components? Or do I keep one component, but create enough variance with props that I can alter each one?
* A mixin allows you to encapsulate one pice of functionality so that you can use it in different components throughout the application.
* If written correctly, they are pure - they don't modify or change things outside of the function's scope, so you will reliably always receive the same value with the same inputs on multiple executions.
* Some examples mixins
  * getting dimensions of the viewport and component
  * gathering specific mousemove events
  * base elements of charts
  * <https://github.com/paulpflug/vue-mixins>
* Merging with mixins
  * By default, mixins will be applied first, and the component will be applied second so that we can override it as necessary.
  * The component has the last say.
* Global mixins
  * Global mixins are literally applied to every single component. One use I can think of that mekes sense is something like a plugin, where you may need to gain access to everything.
  * But still, the use case for them is extremely limited and they should be considered with great caution.
* Custom directives
  * v-example - this will instantiate a directive, but doesn't accept any arguments. Without passing a value, this would not be very flexible, but you could still hange some piece of functionality of of the DOM element.
  * v-example="value" - this will pass a value into the directive, and the directive figures out what to do based off of that value.
  * v-example="'string'" - this will let you use a string as an expression.
  * v-example:arg="value" - this allows us to pass in an argument to the directive. In the example below, we're binding to a class, and we'd style it with an object, stored separately.
  * v-example:arg.modifier="value" - this allows us to use a modifier.
  * <http://imakewebthings.com/waypoints/>
* Exercise: <https://github.com/sdras/intro-to-vue>
* Solution: <https://codepen.io/sdras/pen/a74e42adcead4d3a6968f5cc746709eb?editors=1010>

## Vuex

* Centralized store for shared data and logic, even shared methods or async.
* Unidirectional data flow
* Influenced by Flux application architecture
* Similar to Redux
* You can still use Redux if you like but this is Vue's version.
* Why? In a complex single page application, passing state between many components, and especialy deeply nested or sibling components, can get complicated quickly. Having one centralized place to access your data can help you stay organized.
* When? 
  * Multiple instances of children/siblings communicating
  * I'd like to see what all of the state looks like and keep it organized in one place.
* Warning: not a replacement for single component methods.

## Vuex Setup

```bash
npm install --save vuex

yarn add vuex
```

* I set it up this way: within my /src directory, I create another directory named store (this is a preference, you could also just create a store.js file in that same directory), and a file named store.js.

* The initial set up in store.js would look something like this (vstore sublime snippet)

```bash
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    key: value
  }
});
```

* Getters will make values able to show statically in our templates. In other words, getters can read the value, but not mutate the state.
* Mutations allow us to update the state, but they will always be synchronous. Mutations are the only way to change data in the state in the store.
* Actions will allow us to update the state, asynchronously, but will use an existing mutation. This can be very helpful if you need to perform a few different mutations at once in a particular order, or reach out to a server.
* We separate actions and mutations because we don't want to get into an ordering problem.
* <https://github.com/sdras/vue-weather-notifier>
* Repo/Exercise: <https://github.com/sdras/intro-to-vue>

## Further resources

* Vue docs: <https://vuejs.org/>
* Vue repo: <https://github.com/vuejs>
* Nuxt docs: <https://nuxtjs.org/>
* Vuex docs: <https://github.com/vuejs/vuex>
* CSS tricks guide: <https://css-tricks.com/guides/vue/>
* awesome vue: <https://github.com/vuejs/awesome-vue>
* vue newsleter: <https://news.vuejs.org/>
* monterail blog: <https://www.monterail.com/blog>
* vue tips: <http://vuetips.com/>
* the majesty of vue: <https://leanpub.com/vuejs2>