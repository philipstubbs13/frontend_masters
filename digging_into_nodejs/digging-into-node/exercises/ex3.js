#!/usr/bin/env node

"use strict";
//  chmod u+x ex1.js
// ./ex1.js

var util = require("util");
var path = require('path');
var fs = require('fs');
var Transform = require('stream').Transform;
var zlib = require("zlib");
var CAF = require('caf');
// var getStdin = require("get-stdin");

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in", "out", "compress", "uncompress"],
  string: ["file"]
});

processFile = CAF(processFile);

function streamComplete(stream){
  return new Promise(function c(res) {
    stream.on("end", res);
  });
}


var BASE_PATH = path.resolve(
  process.env.BASE_PATH || __dirname
);

var OUTFILE = path.join(BASE_PATH, "out.txt");

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
  let tooLong = CAF.timeout(7, "Took too long!");

  processFile(tooLong, process.stdin)
  .catch(error)
}
else if (args.file) {
  let stream = fs.createReadStream(path.join(BASE_PATH,args.file))

  let tooLong = CAF.timeout(7, "Took too long! ");

  processFile(tooLong, stream).then(function(){
    console.log("Complete!");
  })
  .catch(error);

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
function *processFile(signal, inStream) {
  var outStream = inStream;

  if (args.uncompress) {
    let gunzipStream = zlib.createGunzip();
    outStream = outStream.pipe(gunzipStream);
  }

  var upperStream = new Transform({
    transform(chunk, enc, cb) {
      this.push(chunk.toString().toUpperCase());
      cb();
    }
  });

  outStream = outStream.pipe(upperStream);

  if (args.compress) {
    let gzipStream = zlib.createGzip();
    outStream = outStream.pipe(gzipStream);
    OUTFILE =  `${OUTFILE}.gz`;
  }

  var targetStream;
  if (args.out) {
    targetStream = process.stdout;
  }
  else {
    targetStream = fs.createWriteStream(OUTFILE);
  }

  outStream.pipe(targetStream);

  signal.pr.catch(function f(){
    outStream.unpipe(targetStream);
    outStream.destroy();
  });

  yield streamComplete(outStream);
}

function  error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function printHelp() {
  console.log("ex3 usage:")
  console.log("   ex3.js --file={FILENAME}");
  console.log("");
  console.log("--help               print this help");
  console.log("--file={FILENAME}    process the file");
  console.log("--in, -              process stdin");
  console.log("--out                print to stdout");
  console.log("--compress           gzip the output");
  console.log("--uncompress         un-gzip the input");
  console.log("");
}

// Environemt variables
// HELLO=WORLD ./ex1.js

// var stream1; // readable stream
// var stream2; // writeable stream
// var stream3;

// var stream3 = stream1.pipe(stream2).pipe(stream5).pipe(final);
