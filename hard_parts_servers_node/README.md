# The Hard Parts of Servers and Node.js

* Instructor: Will Sentence
* <https://frontendmasters.com/courses/servers-node-js/>
* Slides: <https://static.frontendmasters.com/resources/2019-04-24-servers-node-js/Hard-Parts-Servers-Node.pdf>

## The power of node

* Allows us to build entire applications end-to-end in one language - JavaScript.
* Most powerful technology in web development to emerge in 10 years.
* Enables applications that can handle millions of users without blocking.
* From simple webpages to largest scaled applications, to Windows/Mac desktop apps (with Electron), and hardware (embedded systems)

## Node Overview

* Servers are the behind-the-scenes of all web applications - where our client-side code/data comes from.
* Computers connected to the internet - a permanent store of code/data, alwas on, ready to receive messages over the internet from users requesting code/data and send it back.
  * How's this computer know what to send back?
  * What languages can we use?
* Sending the right data back requires using multiple features of the computer.
  * Network socket - Receive and send back messages over the internet.
  * Filesystem - that's where the html/css/javascript code is stored in files.
  * CPU - for cryptography and optimizing hashing passwords.
  * Kernel - I/O management
* C++ has many features that let it directly interact with the OS directly. JavaScript does not! So it has to work with C++ to control these computer features. What is this combination known as? ...Node.js.
* JS --> Node --> Computer feature (e.g. network, file system)

## Executing Node Code

* So let's see JavaScript other talent- built-in labels that trigger Node features.
  * We can set up, with a JavaScript label, a Node.js feature(and so computer internals) to wait for requests for html/css/js/tweets from our users.
  * How? The most powerful built-in Node feature of all: http (and its associated built-in label in JS - also http conveniently).
* Using http feature of Node to set up an open socket.

```bash
const server = http.createServer()
server.listen(80)
```

* Inbound web request -> run code to send back message
* If inbound message -> send back data.

## Calling Methods in Node

* Node auto-runs the code (function) for us when a request arrives from a user.
  * We don't know when the inbound request would come - we have to rely on Node to trigger JS code to run.
  * JavaScript is single-threaded and synchronous. All slow work (e.g. speaking to a database) is done by Node in the background.

```bash
const server = http.createServer(doOnIncoming)
server.listen(80)
```

## Calling a function under the hood

* Two parts to calling a function - executing its code and inserting input (arguments)
  * Node not only will auto-run our function at the right moment, it will also automatically insert whatever the relevant data is as the additional argument (input)/
  * Sometimes it will even insert a set of functions in an object (as an argument) which give us direct access to the message (in Node) being sent back to the user and allows us to add data to that message.
  * People often end up using req and res for the parameters...

## Request and Response with Node

* Messages are sent in HTTP format - The protocol for browser-server interaction.
* HTTP message: Request line (url, method), Headers, Body (optional)

## Node with HTTP

* Our return message is also in HTTP format.
* We can use the body to send the data and headers to send important metadata.
* In the headers we can include info on the format of the data being sent back - e.g. it's html so to load it as a webpage.
* Getting access to Node's built in features with require.
  * We have to tell Node we want to have access to each of its C++ features independently - we get a built in function to do this require.

  ```bash
  const http = require('http');
  ```

* How do we start JavaScript off to do all this?
  * Write the code (VSCode et all)
  * Load it into Node and run it (have to load in using the terminal interface)
  * Need to reload our code with Node every time we make a change so nodemon.
* Cloud Node Development
  * Do we need an always-on computer in our house to run a server?
    * Write code on your computer.
    * SSH into someone else's computer (ne of AWS's)
    * Set up DNS to match domain name to right IP.
* Local Node Development
  * OS developers included the loopback feature with localhost as the pseudo-domain.

## Error Handling in Node

* Node will automatically send out the appropriate event depending on what it gets from the computer internals(http message or error)
* Node events: <https://nodejs.org/api/events.html>
* Node docs for on: <https://nodejs.org/api/events.html#events_emitter_on_eventname_listener>

## File System API

* Node documentation on file system (fs): <https://nodejs.org/api/fs.html#fs_file_system>
* Every file has a 'path' ( a link - like a domestic url)
* JSON is a javascript-ready data format.
* JSON parse: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse>
* JSON: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON>
* Documentation on readFile: <https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback>
* threads: <https://en.wikipedia.org/wiki/Thread_(computing)>

## Call Stack

* Call stack is JS's behind the scenes way of tracking what line of code is currently running.
* Whatever is on the top of the call stack is the function we are currently running.
* JSON.parse: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse>
* Buffer: <https://nodejs.org/api/buffer.html#buffer_buffer>
* Error-first callbacks: <https://nodejs.org/api/errors.html#errors_error_first_callbacks>

## Node Streams

* Streams: <https://nodejs.org/api/stream.html#stream_stream>
* What if Node used the event (message-broadcasting) pattern to send out a message(event) each time a sufficient batch of the json data had been loaded in.
* Streams are chunks of data.
* Callback queue
* Event loop