# Progressive Web Applications and Offline

* <https://github.com/mike-works/pwa-fundamentals>
* <https://frontendmasters.com/courses/progressive-web-apps/>

## Defining PWA

* What is a Progressive Web App?
  * Use the latest advanced web technologies
  * Adopt Progressive Enhancement as a core tenant.
  * Can transcend what users expect from the browser.
  * Offer a native-app-like experience.

## Characteristics of Progressive Web Apps

* Progressive
* Responsive
* Works Offline
* App-Like
* Fresh
* Safe
* Discoverable
* Re-Engageable
* Durable
* Linkable

## Quantifying Web App Success

* Important Metrics
  * Time to...
    * First Paint
    * Interactive
    * Data

## Chrome DevTools

* Devtools - Network tab
* Devtools - Performance tab
  * Timeline
  * Network Usage
  * CPU Usage

## Lighthouse & WebPageTest

* Lighthouse
  * Chrome Extension
  * Audit your performance
  * Look for the presence of metadata, ability to go offline, ability to serve app securely, ...
  * Ships with Chrome 61 for free.
* webpagetest.org
  * Allows you to run speed tests from various locations around the world.
  * Uses real browsers at real connection speeds.
  * Supports some pretty advanced features.
    * Multi-step transactions
    * Video capture
    * Content blocking
    * Single Point of Failure Testing
    * Scripting

## Baseline

* Let's measure app using Lighthouse
* Read through README.md
* Make a production optimized build of app: npm run build:prod
* Bundle analysis: ANALYZE=true npm run build:prod
* Lighthouse will want to run the app in HTTP/2 mode.
  * ./run serve --http2
* Things to note: lighthouse score, gzipped app size, time to first paint, to interactive.

```bash
npm run clean
rm -rf dist/*
node ./server/cli/cli.js gen-certs
web-push generate-vapid-keys --json > ./private/vapid.json
rm -rf dist/*.pem && mkdir -p dist
cp private/*.pem dist/
npm run watch:ui
npm run watch:api
npm run build:prod
```

## IndexedDB

* Versioned
* Indexable
* Worker Friendly
* Durable
* Supports values of many types
* Not a SQL, or a relational DB.

## IndexedDB API

```bash
// Open (or create) the database
let open = indexedDB.open('MyDatabase', 1);

// Create and/or Migrate the Schema
open.onupgradeneeded = (evt) ==> { ... };

// Transactions
open.onsuccess = () ==> { ... };
```

```bash
// Create and/or Migrate the Schema
open.onupgradeneeded = (evt) ==> {
  let db = open.result;
  let store = null;
  switch (evt.oldVersion) {
    case 0: // Upgrade from 0
      // ...
    case 1: // Upgrade from 1
      // ...
  }
};
```

```bash
// Transactions
open.onsuccess = () => {
  
  // Start a new transaction
  let db = open.result;
  let tx = db.transaction('MyObjectStore', 'readwrite');
  let store = tx.objectStore('MyObjectStore');

  // Transaction Particulars //

  // Close the db when the transaction is done
  tx.oncomplete = () => db.close();
}'
```

```bash
let index = store.index('NameIndex');

// Add some data
store.put({
  id: 12345,
  name: {first: 'Mike', last: 'North' },
  age: 33
});

// Query the data
let getJohn = store.get(12345);
let getBob = index.get(['North', 'Mike']);
```

## IDB: IndexedDb Promisified

```bash
const dbPromise = idb.open('keyval-store', 1, upgradeDB => {
  upgradeDB.createObjectStore('keyval');
});

dbPromise.then(db => {
  const tx = db.transaction('objs', 'readwrite');
  tx.objectStore('objs').put({
    id: 123456,
    data: {foo: "bar"}
  });
  return tx.complete;
});
```

* localForage

```bash
import idb from 'idb';
```

```bash
function groceryItemDb() {
  return idb.open('groceryitem-store', 1, upgradeDb => {
    switch(upgradeDb.oldVersion) {
      case 0: upgradeDb.createObjectStore('grocery-items', {keyPath: 'id' });
    }
  })
}

function downloadGroceryItems() {
  return groceryItemDb().then(db => {
    fetch('https://localhost:3100/api/grocery/items?limit=9999')
      .then((response) => response.json())
      .then({ data: groceryItems }) => {
        let tx = db.transaction('grocery-items', 'readwrite');
        tx.objectStore('grocery-items').clear();
        tx.complete.then(() => {
          let txx = db.transaction('grocery-items', 'readwrite');
          groceryItems.forEach((groceryItem) => {
            return txx.objectStore('grocery-items').put(groceryItem);
          });
          return txx.complete;
        });
      })
  })
}

// populate IndexedDb with grocery-items
downloadGroceryItems();
```

## Async Data

### Fetch API

```bash
fetch('http://example.com')
  .then((response) => response.json())
  .then(jsonData) => {
    ...
  });
```

* Can be polyfilled today.
* First-class treatment of request/response objects
* More Node.js friendly.

* Getting Data: Fetch from the Future

```bash
const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Do stuff...
  } catch (error) {
    // Handle error...
  }
}
```

* So, Fetch is like AJAX, right?
  * The promises returned by a Fetch request will not reject if the response has a 400- or 500-level status code.
  * It only rejects on network failure. (This is actually a good thing for us today.)
  * By default, Fetch does not send or receive any cookies.

* Fetch is Much More Than AJAX
  * Typyically with AJAX, we're just sending and receiving JSON or XML.
  * The later is even baked into the name.
  * With Fetch, we can acess a wider range of data types.

* The 3 things you need to know
  * How the fetch() method works.
  * Configuring Request objects.
  * Working with Response objects.

### Fetch Requests

* A basic Fetch Request

```bash
const imageElement = document.querySelector('img');

fetch('beatles.jpg').then(response => {
  return response.blob();
}).then(response => {
  const objectURL = URL.createObjectURL(response);
  imageElement.src = objectURL;
});
```

* Are you going to talk about CORS?
  * CORS rules apply, but you can request things like images that you don't plan on reading outright.
  * This applies to images, audio, videos, scripts.
  * Rule of thumb: anything you might pass into the src attribute of an HTML element.

### Fetch & CORS

```bash
const mike = 'https://frontendmasters.com/wp-content/themes/frontendmasters/assets/images/workshop/instructor-mike-north@2x.jpg';

fetch(mike).then(response => {
  console.log(response);
});
```

```bash
const mike = 'https://frontendmasters.com/wp-content/themes/frontendmasters/assets/images/workshop/instructor-mike-north@2x.jpg';

fetch(mike, { mode: 'no-cors' }).then(response => {
  console.log(response.type); // opaque
  const objectURL = URL.createObjectURL(response);
  imageElement.src = objectURL;
});
```

```bash
const headers = new Headers();

const options = { method: 'GET',
                  headers: headers,
                  mode: 'cors',
                  cache: 'default' };

const request = new Request('beatles.jpg', options);

fetch(request).then(response => {
  return response.blob();
}).then(response => {
  const objectURL = URL.createObjectURL(response);
  imageElement.src = objectURL;
});
```

```bash
const mike = 'https://frontendmasters.com/wp-content/themes/frontendmasters/assets/images/workshop/instructor-mike-north@2x.jpg';

const request = new Request(mike, {
  mode: 'no-cors'
});

fetch(request).then(response => {
  console.log(response.type); // opaque
})
```

```bash
const content = 'I am a banana';
const contentLength = content.length.toString();
const headers = new Headers();

headers.append('Content-Type', 'text/plain');
headers.append('Content-Length', contentLength);
```

```bash
const content = 'I am a banana';
const contentLength = content.length.toString();
const headers = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': contentLength
});
```

* What about responses?
  * Fetch works with more than just JSON and XML.
  * We need to let it know what we're dealing with.

```bash
fetch(request)
  .then(response => response.json())
  .then(doStuffWithResponse);

response.blob();
response.json();
response.text();
response.formData();
response.arrayBuffer();
```

* Quick work on reading the body of a request or response
  * You can only read the body of a request or a response object once.
  * You can however, clone the object if you think you'll need to read it again.