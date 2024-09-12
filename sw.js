// mise en place du service worker
self.addEventListener('install', (event) => {
    console.log('Service Worker installé'); 

});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

//interception des requettes

 


 