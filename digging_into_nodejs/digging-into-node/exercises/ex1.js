#!/usr/bin/env node

"use strict";
//  chmod u+x ex1.js
// ./ex1.js

var util = require("util");
var path = require('path');
var fs = require('fs');
var getStdin = require("get-stdin");

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: ["file"]
});

var BASE_PATH = path.resolve(
  process.env.BASE_PATH || __dirname
);

if (process.env.HELLO) {
  console.log(process.env.HELLO);
}

if (args.help) {
  printHelp();
}
else if (
  args.in ||
  args._.includes("-")
) {
  getStdin().then(processFile).catch(error);
}
else if (args.file) {
  fs.readFile(path.join(BASE_PATH,args.file), function onContents(err, contents){
    if (err) {
      error(err.toString());
    } else {
      processFile(contents.toString());
      // BASE_PATH=files/  ./ex1.js --file=hello.txt
      // contents = contents.toString().toUpperCase();
      // process.stdout.write(contents);
    }
  });

  // processFile(path.resolve(args.file));
  // let filepath = path.resolve(args.file);
  // console.log(__dirname);
  // console.log(filepath);
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

function processFile(contents) {
  // var contents = fs.readFileSync(filepath, "utf8");
  // process.stdout.write(contents);
  contents = contents.toUpperCase();
  process.stdout.write(contents.toString());
}

function  error(msg, includeHelp = false) {
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
  console.log("--in, -              process stdin");
  console.log("");
}

// Environemt variables
// HELLO=WORLD ./ex1.js
