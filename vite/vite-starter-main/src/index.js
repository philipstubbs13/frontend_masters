import image from './steve-after-a-workshop.jpg'
import { name } from './characters/gandorf.json';

console.log(name);

const img = document.createElement('img');
img.src = image;

console.log(import.meta.env)

document.querySelector('#content').appendChild(img);

import('./counter').then(({ initializeCounter }) => {
    initializeCounter();
})