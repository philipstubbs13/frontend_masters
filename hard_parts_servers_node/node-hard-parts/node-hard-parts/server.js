const http = require('http');
const fs = require('fs');

function doOnRequest(request, response){
  // Send back a message saying "Welcome to Twitter"
  // code here...
  response.end("yo")  
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    fs.createReadStream()

  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    // code here...
    
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
    
  }
  else {
    // Handle 404 error: page not found
    // code here...
    
  }
}

const server = http.createServer(doOnRequest)

server.listen(3000);
