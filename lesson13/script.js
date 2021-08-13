'use strict';

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const text = document.querySelector('.text');
const startBtn = document.querySelector('.btn');
const buttonText = document.querySelector('span');
const body = document.querySelector('body');

function getColor() {
  let color = '#';
  for (let i=0; i < 6; i++) {
    color += (randomInteger(0, 15).toString(16).toUpperCase());
  }
  text.textContent = color;
  buttonText.style.color = color;
  body.style.backgroundColor = color;
}
startBtn.addEventListener('click', getColor);
