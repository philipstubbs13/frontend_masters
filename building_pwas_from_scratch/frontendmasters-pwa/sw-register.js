// main thread
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("serviceworker.js")
}

const assets = ['/', 'styles.css', 'app.js', 'sw-register.js', 'https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2']

self.addEventListener("install", event => {
  console.log('cache assets');
  event.waitUntil(
    caches.open('assets').then(cache => {
      cache.addAll(assets);
    })
  )
})

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)  // searching in the cache
            .then( response => {
                if (response) {
                    // The request is in the cache 
                    return response; // cache hit
                } else {
                    // We need to go to the network  
                    return fetch(event.request);  // cache miss
                }
            })
    );
});
