import '../css/style.css';
import javascriptLogo from '../assets/javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
  <div class="flex p-6">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="md:text-white h-24 mr-6" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="h-24" alt="JavaScript logo" />
    </a>
  </div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button class="bg-darkGray" id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
