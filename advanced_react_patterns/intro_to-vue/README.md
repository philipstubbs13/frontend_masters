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