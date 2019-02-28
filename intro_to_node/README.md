# Introduction to Node.js

* Instructor: Scott Moss
* <https://frontendmasters.com/courses/node-js/>
* course repo: <https://github.com/frontendmasters/intro-node-js>
* <https://slides.com/scotups/deck/fullscreen#/>

## What is Nodejs

* Environment to run JavaScript outside a browser.
* open source runtime
* Built on Chrome's V8 JavaScript engine.
* Evolved since creation to allow developers to build almost anything.
* Created by Ryan Dhal in 2009
  * <https://github.com/ry>

## What can I create with Nodejs

* Pretty much anything a scripting and server language like python or ruby can, but with JavaScript.
* Tooling (build, automation, etc)
* APIs (REST, Realtime, etc)
* CDNs
* Shareable libraries
* Desktop applications
* IOT
* pretty much anything because node is on everything now.

## Installing Nodejs

* From Nodejs source
  * the easiest way to install
  * limits your options for have many versions of Nodejs
  * Can cause permission errors
* Using NVM (node version manager)
  * Recommended way of installing node
  * allows you to run many versions of Node whenever.
  * <https://github.com/creationix/nvm#installation>

## Running Nodejs code

* REPL for playing around, cli for everything else.

* Interactive REPL
  * Great for trying this out, think console on the browser
  * just type the node command with no args and begin
* CLI Executable
  * use to execute your node apps

```bash
node path/to/your/file.js
```

```bash
which node
```

```bash
~/.bashrc
~/.bash_profile
source .bashrc
```

## Browser vs Nodejs

* Browser
  * Build interactive apps for the web
  * DOM
  * Window
  * Fragmentation
    * caniuse.com
  * optional modules (es6)
  * Cannot access filesystem
  * Async
* Node
  * Build server side apps and scripts
  * Nope, no GUI (can virtualize)
  * No window, but does have a global
  * Versioned, so no fragmentation.
  * Required modules (commonjs +)
    * <https://requirejs.org/docs/commonjs.html>
  * Can access filesystem
  * Async
  * No browser based APIs

## Globals in Node.js

* Nodejs gives you helpful globals, but just like the browser, you should not create your own
* process - has information about the environment the program is running in.
* require - function to find and use modules in current module.
* __dirname - the current directory path.
* module - information about current module, methods or making module consumable.
* global - like window, its the "global" object. Almost NEVER use this.
* .....many more

## Node.js Modules

* Encapsulated code
* CommonJs
* <https://requirejs.org/docs/commonjs.html>
* NodeJs uses commonJs for its module system.
* There are other module systems out there like:
  * ESM (ecmascript modules) *new standard
  * AMD (pretty much dead)
  * ...others, but don't matter at all

## Creating modules

* Regular code, just export it.
* All your Nodejs code are modules.
* As the author, you decide how and what to expose from your modules, to other modules.
* You do this with the module global object provided you by the Nodejs runtime.

## Using modules

* require
* The Nodejs runtime injects another global, require.
* This function takes a relative path to the module that you want to consume, and synchronously loads it by returning whatever the target module exported.
* <https://jestjs.io/>

## Shipped modules

* Nodejs ships with a bunch of helpful modules already.
* fs - fileSystem module to interacting with files on a machine.
* http - low level-ish module for creating network based programs, like APIs
* path - useful for manipulating path strings and handling differences across many OS's
* ...many more
* url
* crypto