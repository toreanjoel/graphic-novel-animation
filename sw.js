/**
 * Service worker that will run after application after application is ready
 */

 /**
  * Cache name and files to cache
  */

 var cacheName = 'novelish-v1';
 var appShellFiles = [
  // root app
  './index.html',
  // helper methods
  './utils/helpers.js',
  // third party libraries
  './scripts/libraries/gsap/gsap.min.js',
  './scripts/libraries/gsap/ScrollTrigger.min.js',
  // assets
  './assets/icons/icon-196.png',
  './assets/icons/icon-256.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-1024.png',
  // app render scripts/styles
  './app/index.js',
  './app/variables.css',
  './app/style.css',
  './app/animations/index.js',
  './app/animations/style.css',
  './app/header/index.js',
  './app/header/style.css',
  './app/scene/index.js',
  './app/scene/style.css',
 ];

 /**
  * install event initially after setting up the service worker on the device
  */
 self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  // here we use the event callback to wait
  e.waitUntil(
    // open and add the cached items with the current app cache name
    caches.open(cacheName).then((cache) => {
      console.log('[Service Worker] Caching all: the application and all needed render scripts and styles');
      return cache.addAll(appShellFiles);
    })
  )
});

// Activation
// There is also an activate event, which is used in the same way as
// install. This event is usually used to delete any files that are 
// no longer necessary and clean up after the app in general.
// We don't need to do that in our app, so we'll skip it.
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
        if(key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

/**
 * Here we check if the resource is avail in the cache and we serve that before fetching
 * and if we fetch becuase it doesnt exist, we add it to the cache for next time
 */
 self.addEventListener('fetch', (e) => {
  // respond with will be changing the data from the remote and respond in a certain way
   // to the client - we can use this for changing the data as the service worker
   // sits as a proxy between the client and the net
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log('[Service Worker] Fetching resource: '+ e.request.url);
      return r || fetch(e.request).then((response) => {
        return caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching new resource: '+ e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});