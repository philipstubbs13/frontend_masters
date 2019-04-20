# API Design in Node.js

* <https://frontendmasters.com/courses/api-design-nodejs-v3/>
* <https://github.com/FrontendMasters/api-design-node-v3>
* Scott Moss

## API

* What is an API
  * A server that creates an HTTP interface for interacting with some data.
  * Application programming interface
  * The name is used EVERYWHERE
  * Usually a server on some remote machine that dictates how another application can interact with some data.
  * Basic data operations like, Create, Read, Update, Destroy (CRUD)

## REST

* Most popular API design pattern, but is not the silver bullet. Very blurry.
* An API design that combines DB resources, route paths, and HTTP verbs to allow applications describe what action they are trying to perform.
* Popularized when SaaS products starting offering APIs for integrations.
* Works with basic data models.
* Hard to scale with complex data models and client requirements.

## Node.js and APIs

* build for high concurrent APIs that are not CPU intensive.
* Node.js is JavaScript, it's async and event driven.
* Single threaded (can optimize)
* When kept async, Node can handle a high amountof concurrent request.
* Not great for CPU intensive work (data crunching, ML, big maths)
* So many open source tools to help build APIs

## Express

* the standard API framework for Node.js
* Handles all the tedious tasks like managing sockets, route matching, error handling, and more.
* Has a huge community and support from anything that has to do with APIs in Node.js.
* Not going anywhere anytime soon.

## MongoDB

* The go to non relational DB, works like a dream in Node.js.
* Non-relational document store that is easy to get started and scales well.
* Open source and backed by a big company.
* Tons of hosting solutions (MLab, Atlas, etc.)
* ORM/ODM and other libs are some of the best for any DB.

## Insomnia

* <https://insomnia.rest/>

## What is Middleware?

* list of functions that execute, in order, before your controllers
* Allow you to execute functions on an incoming request with guaranteed order.
* Great for authenticating, transforming the request, tracking, error handling.
* Middleware can also respond to request like a controller would, but that is not their intent.

## REST routes with Express

* Express was designed with REST in mind and has all you need.
* Express has a robust route matching system that allows for exact, regex, glob, and parameter matching.
* It also supports HTTP verbs - CRUD - on a route based level. Together with the routing, you can create REST APIs.
* Routes match in the order that they were defined (top to bottom)
* For abstraction, express allows you to create sub routers that combine to make a full router.

## Data modeling with MongoDB

* Schemas for a schemaless DB?
  * You should always use a schema for models, and mongoose makes it easy.
  * MongoDB is a Schemaless document store, but you should always use schemas if you don't want to go crazy.
  * MongoDB has added support for creating schemas, but Mongoose is much better.
  * We can create models for each REST resouce we want to expose via the API.

* Schemas to models
  * Schemas are the instructions for the models.
  * Schemas hold the instructions
