/*
2. Order of execution
- Add a challenge that shows the order of execution of different delayed functions
- Use promise-based fs.promises API instead of callback fs
- Set up a timer
- Set a setImmediate
*/

const http = require('http');

function doOnIncoming(incomingData, outgoingData) {
  outgoingData.end("Welcome to Twitter!");
}



function blockFor10secs() {
  const end = Date.now() + 10000;
  while (Date.now() < end) {
    const arbitraryCalculation = 1 + 2 + 3;
  }
  console.log('Blocking operation complete');
}

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 0);

const server = http.createServer(doOnIncoming);
server.listen(8080, () => {
  console.log('Server listening on port 8080')
});

blockFor10secs();
console.log("Me first");