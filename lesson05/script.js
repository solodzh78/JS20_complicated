/*
1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
— Статья про простые числа - КЛИК
— Рядом с каждым числом написать оба делителя данного числа
    Например: “Делители этого числа: 1 и n”
3) Запушить проект в репозиторий для усложненных заданий на GitHub
*/

'use strict';

// Объявить функцию isNumber
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
// Принимает только Number и отдает в виде String
const getNumber = function (title, defaultValue = '') {
  let tempVariable;
  do {
    tempVariable = prompt(title, defaultValue);
  } while (!isNumber(tempVariable));
  return tempVariable;
};

// Ввод массива 
let arr = [];
for (let i = 0; i < 7; i++) {
  arr.push(getNumber('Введите ' + (i + 1) + ' число'));
}
console.log('arr: ', arr);

const arr1 = arr.filter((elem) => elem.substring(0, 1) === '2' || elem.substring(0, 1) === '4');
console.log('arr1: ', arr1);

const getSimpleNumbers = function (min, max) {

  if (!isNumber(min) || !isNumber(max)) {
    console.log('Минимальное и максимальное значения должны быть числами');
    return;
  }

  if (min <= 0 || max <= 0) {
    console.log('Минимальное и максимальное значения должны быть больше ноля');
    return;
  }

  if (min > max) {
    console.log('Минимальное значение не может быть больше максимального');
    return;
  }

  let min1 = Math.ceil(min);
  let max1 = Math.floor(max);

  let count = 0;

  for (let i = min1; i <= max1; i++) {
    for (let j = 1; j <= i; j++) {
      
      if (i !== 1 && j ===1) {continue;}
      if (i === j) {
        console.log('Делителями простого числа ', i, 'являются числа', 1, 'и', i);
        count++;
      }
  
      if (i%j === 0) {
        break;
      }
    }
  }

  if (count) {
    console.log('В диапазоне от', min, 'до', max, 'находится', count, 'простых чисел');
  } else {
    console.log('В диапазоне от', min, 'до', max, 'нет простых чисел');
  }
};

getSimpleNumbers(1, 100);