import { decktr } from './moduleCheck.js';

const root = document.getElementById('root');
const tx = document.getElementById('txarea');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    localStorage.setItem('txValue', tx.value);
})
tx.value = localStorage.getItem('txValue');


