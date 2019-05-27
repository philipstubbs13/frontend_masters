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