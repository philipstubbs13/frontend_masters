import image from './steve-after-a-workshop.jpg'
import { name } from './characters/gandorf.json';

const content = document.querySelector('#content');

// for (const [path, module] of Object.entries(import.meta.glob('./logos/**/*.svg'))) {
//     module().then(url => {
//         const img = document.createElement('img');
//         img.src = url;
//         img.height = 200;
//         content.appendChild(img);
//     });

// }

const img = document.createElement('img');
img.src = image;

console.log(import.meta.env)

document.querySelector('#content').appendChild(img);

import('./counter').then(({ initializeCounter }) => {
    initializeCounter();
})