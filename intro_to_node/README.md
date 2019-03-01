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

## Remote modules

* download and use other modules from the Internets
* Nodejs has grown a bunch, and bunch of that growth is due to its community and the ability to share modules and consume them at will.
* You can slap together an app really fast by reusing public modules. Which are the same as the modules you make, but packaged for downloading.
* This sounds nice, but now you have to be aware of malicious code. Also, you need a system to help with the management of remote modules (downloading, publishing, updating, etc)

## Three module types, one require

* modules you created are always relative paths. ".js" is implied.
* Custom local modules

```bash
var lib = require('../rel/path/to/lib') // Always have to use a "." first
```

* remote modules

```bash
var lib = require('lib') // the same name you used to install it with npm
```

* shipped modules

```bash
var fs = require('fs') // internal module, remote module with same name takes it.
```

## npm

* CLI to manage remote modules.
* Ships with node.js
* allows you to publish, download, and update modules
* Uses package.json file in your Nodejs project to determine dependencies.
* Stores remote modules in the node_modules folder.
* <https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/>
* ...whole bunch of other stuff

## yarn

* made by facebook
* was faster than npm - uses cdn to cache things. npm does this now too though.

## Asynchronous Code in Node.js

* Node.js is single threaded and async like the browser, but you'll probably do more async things.
* nodejs is single threaded and event based. just like the browser.
* Unlinke the browser, your nodejs app will be shared by all clients.

## Async patterns

* async / await is legit
* callback pattern

```bash
// callback takes error as first arg, and result as second
doAsyncThing((error, result) => {})
```

* promises

```bash
doAsyncThing()
  .then(result => {})
  .catch(error => {})
```

* async / await

```bash
const run = async () => {
  const results = await doAsyncThing() // must return a promise
  console.log('hello')
}
```

## Error handling

* Errors kill your app, just like the browser.
* Any thrown or unhandled errors will cause the process to crash and exit.
* Your app may have errors that should not cause a crash, so you must handle accordingly.

## Servers

* One server, handling many requests from clients.
* A server's job is to handle a request from some sort of client (browser, mobile app, another server, etc)
* Without considering scaling, one server instance will handle many client requests. Compared to a client app where that code only cared about itself on the host machine.
* Nodejs has built in and community packages for build all types of servers (APIs, static, realtime, etc)
* <https://www.npmjs.com/package/mime>
* <https://www.nginx.com/>
* <https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original>