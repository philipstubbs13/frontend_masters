import('./style.css');

import('./postcss.css')
import('./sassy.scss')

import styles from './counter.module.css';

export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count');
  const incrementButton = doc.getElementById('increment');
  const decrementButton = doc.getElementById('decrement');

  countElement.classList.add(styles.count);

  let count = 0;

  const render = () => {
    countElement.textContent = count;

    if (count < 0) {
      import('./banner.js').then(({ addBanner }) => {
        addBanner("You're below zero!");
      })
    }
  };

  const increment = () => {
    count++;
    render();
  };

  const decrement = () => {
    count--;
    render();
  };

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  render();

  return () => {
    incrementButton.removeEventListener('click', increment);
    decrementButton.removeEventListener('click', decrement);
  };
};
