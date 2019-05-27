/*
2. Order of execution
- Add a challenge that shows the order of execution of different delayed functions
- Use promise-based fs.promises API instead of callback fs
- Set up a timer
- Set a setImmediate
*/
const fs = require('fs');

function useImportedtweets(errorData, data){
  // const tweets = JSON.parse(data);
  // console.log(tweets.tweet1);
  console.log(data);
}

function immediately(){
  console.log("Run me last 😭");
}

function printHello(){
  console.log("Hello");
}

function blockFor500ms(){
  const end = Date.now() + 5000;
  while (Date.now() < end) {
    const arbitraryCalculation = 1 + 2 + 3;
  }
  console.log('Blocking operation complete');
}

setTimeout(printHello, 0);

fs.readFile('./tweets.json', useImportedtweets);

blockFor500ms();

console.log("Me first");
setImmediate(immediately);