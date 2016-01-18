import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import App from './components/App';

const b = document.getElementById('play');

b.addEventListener('click', () => {
  run(App, {DOM: makeDOMDriver('#root')});
  b.innerHTML = 'Pause';
});