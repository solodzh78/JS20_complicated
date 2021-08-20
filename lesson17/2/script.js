'use strict';

const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const out = document.querySelector('.out');
const box = document.querySelector('.box');

let count = 0;
let interval;
let animate = false;

const boxAnim = () => {
  interval = requestAnimationFrame(boxAnim);
  count++;
  if (count < 470) {
    box.style.top = count + 'px';
  } else {
    cancelAnimationFrame(interval);
  }
};

startBtn.addEventListener('click', () => {
  
  if (animate) {
    animate = false;
    cancelAnimationFrame(interval);
  } else {
    animate = true;
    interval = requestAnimationFrame(boxAnim);
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
    box.style.top = count + 'px';
  cancelAnimationFrame(interval);
});