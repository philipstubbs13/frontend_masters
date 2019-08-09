"use strict";

var curFib = 0;

self.postMessage("Hello from the web worker");

self.onmessage = onMessage;

// **********************************

function onMessage(evt) {
  console.log(`Received in web worker: ${evt.data}`);
  getNextFib();
}

function getNextFib() {
  var fibNum = fib(curFib);
  self.postMessage({ idx: curFib , fib: fibNum});
  curFib++;
  setTimeout(getNextFib,0);
}

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
