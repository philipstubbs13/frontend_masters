import Menu from './Menu.js';
import Order from './Order.js';
import Router from './Router.js';

navigator.serviceWorker.register("/serviceworker.js");

// Request Persistance Storage
(async function () {
    if (navigator.storage && navigator.storage.persist) {
        if (!await navigator.storage.persisted()) {
            const result = await navigator.storage.persist();
            console.log(`The persistance request returned: ${result}`);
        }
    }
})()

// (async function () {
//     if (navigator.storage && navigator.storage.estimate) {
//         const q = await navigator.storage.estimate();
//         console.log(`Quota available: ${q.quota / 1024 / 1024}MiB`);
//         console.log(`Quota used: ${q.usage / 1024}KiB`);
//     }
// })()


window.addEventListener("DOMContentLoaded", () => {
    Router.init();
    Menu.load();
    Order.render();
 } );
