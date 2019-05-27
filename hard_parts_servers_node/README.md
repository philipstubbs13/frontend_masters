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