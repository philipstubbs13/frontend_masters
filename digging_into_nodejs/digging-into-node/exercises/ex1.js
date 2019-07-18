#!/usr/bin/env node

"use strict";
//  chmod u+x ex1.js
// ./ex1.js

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"]
});

if (args.help) {
  printHelp();
}
else if (args.file) {
  console.log(args.file);
}
else {
  error("Incorrect usage", true);
}

// console.log(args);
// console.log(process.argv.slice(2));

// printHelp();

// process.stdout.write("Hello world\n");

// console.log("Hello world");

// console.error("Oops");
// node ex1.js 1>/dev/null
// node ex1.js 2>/dev/null
// node ex1.js 2>/dev/ 1>&2

// process.stdin.read()



// **************************

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function printHelp() {
  console.log("ex1 usage:")
  console.log("   ex1.js --file={FILENAME}");
  console.log("");
  console.log("--help               print this help");
  console.log("--file={FILENAME}    process the file");
  console.log("");
}
