// main thread
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("serviceworker.js")
}

const assets = ['/', 'styles.css', 'app.js', 'sw-register.js', 'https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2']

self.addEventListener("install", event => {
  console.log('cache assets');
  caches.open('assets').then(cache => {
    cache.addAll(assets);
  })
})

self.addEventListener("fetch", event => {
  const response = new Response(`hello, I'm a response on URL ${event.request.url}`)
  event.respondWith(response)
})
