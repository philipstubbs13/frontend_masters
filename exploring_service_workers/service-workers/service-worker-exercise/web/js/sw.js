"use strict";

const version = 4;
var isOnline = true;
var isLoggedIn = false;
var cacheName = `ramblings-${version}`;

var urlsToCache = {
  loggedOut: [
    "/",
    "/about",
    "/contact",
    "/login",
    "/404",
    "/offline",
    "/js/blog.js",
    "/js/home.js",
    "/js/login.js",
    "/js/add-post.js",
    "/css/style.css",
    "/images/logo.gif",
    "/images/offline.png"
  ]
};

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("message", onMessage);

main().catch(console.error);

// ************************************

async function main() {
  await sendMessage({ requestStatusUpdate: true });
  await cacheLoggedOutFiles();

  // console.log(`Service Worker (${version}) is starting...`);
}

async function onInstall(evt) {
  console.log(`Service Worker (${version}) installed...`);
  self.skipWaiting();
}

async function sendMessage(msg) {
  var allClients = await clients.matchAll({ includeUncontrolled: true });
  return Promise.all(
    allClients.map(function clientMsg(client){
      var chan = new MessageChannel();
      chan.port1.onmessage = onMessage;
      return client.postMessage(msg, [chan.port2]);
    })
  )
}

function onMessage({ data }) {
  if(data.statusUpdate) {
    ({ isOnline, isLoggedIn } = data.statusUpdate);
    console.log(`Service Worker (v${version}) status update, isOnline:${isOnline}, isLoggedIn:${isLoggedIn}`);
  }
}

function onActivate(evt) {
  evt.waitUntil(handleActivation());
}

async function handleActivation() {
  await clearCaches();
  await clients.claim();
  await cacheLoggedOutFiles(/*forceReload=*/true);
  console.log(`Service Worker (${version}) activated...`);
}

async function clearCaches() {
  var cacheNames = await caches.keys();
  var oldCacheNames = cacheNames.filter(function matchOldCache(cacheName){
    if(/^ramblings-\d+$/.test(cacheName)) {
      let [,cacheVersion] = cacheName.match(/^ramblings-(\d+)$/);
      cacheVersion = (cacheVersion != null) ? Number(cacheVersion) : cacheVersion;
        return (
          cacheVersion > 0 &&
          cacheVersion != version
        ) 
      }
  });
  return Promise.all(
    oldCacheNames.map(function deleteCache(cacheName){
      return caches.delete(cacheName);
    })
  )
}

async function cacheLoggedOutFiles(forceReload = false) {
  var cache = await caches.open(cacheName);

  return Promise.all(
    urlsToCache.loggedOut.map(async function requestFile(url){
      try {
        let res;

        if(!forceReload) {
          res = await cache.match(url);
          if (res) {
            return res;
          }
        }

        let fetchOptions = {
          method: "GET",
          cache: "no-cache",
          credentials: "omit",
        };
        res = await fetch(url, fetchOptions);
        if (res.ok) {
          await cache.put(url, res);
        }
      
      }
      catch(err) {}
    })
  );
}