/*
1) Выведите на страницу текущую дату и время в 2-х форматах:
    a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
    б) '04.02.2020 - 21:05:33'
2) Для вывода в формате (а) напишите функцию, 
которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
3) Для вывода в формате (б) напишите функцию, 
которая будет добавлять 0 перед значениями 
которые состоят из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)
4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду
*/

'use strict';

const getElement = (tagName, atributes) => {
	const element = document.createElement(tagName);

	if (atributes) {
		for (const atribute in atributes) {
			element[atribute] = atributes[atribute];
		}
	}

	return element;
};

const getNowObj = (now) => {
  return {  
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate(),
    dayMonthLong: now.toLocaleString("ru", {month: 'long', day: 'numeric',}),
    weekday:  now.toLocaleString("ru", {weekday: 'long'})[0].toUpperCase() + 
              now.toLocaleString("ru", {weekday: 'long'}).slice(1),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds()
  };
};

const addHour = (hour) => {

  if (hour > 4 && hour < 21 || hour === 0){
    return 'ов';
  } else if (hour%10 === 1) {
    return '';
  } else if (hour%10 > 1 && hour%10 < 5) {
    return 'а';
  }  
};

const addMinute = (minute) => {

  if (minute > 4 && minute < 21 || minute%10 > 4 && minute%10 < 10|| minute%10 === 0){
    return '';
  } else if (minute%10 === 1) {
    return 'а';
  } else if (minute%10 > 1 && minute%10 < 5) {
    return 'ы';
  }  
};

const addSecond = (second) => {

  if (second > 4 && second < 21 || second%10 > 4 && second%10 < 10|| second%10 === 0){
    return '';
  } else if (second%10 === 1) {
    return 'а';
  } else if (second%10 > 1 && second%10 < 5) {
    return 'ы';
  }  
};

const typeA = (nowObj) => {
  let str =  
  `Сегодня ${nowObj.weekday}, ${nowObj.dayMonthLong} ${nowObj.year} года, ` + 
  `${nowObj.hour} час${addHour(nowObj.hour)} ${nowObj.minute} минут${addMinute(nowObj.minute)} ` +
  `${nowObj.second} секунд${addSecond(nowObj.second)}`;
  return str;
};

const addZero = (n) => n < 10 ? '0' + n : n;

const typeB = (nowObj) => {
  let str =`${addZero(nowObj.day)}.${addZero(nowObj.month)}.${nowObj.year} - ` +
  `${addZero(nowObj.hour)}:${addZero(nowObj.minute)}:${addZero(nowObj.second)}`;
  return str;
};

// ============================================================================================================
let body = document.querySelector('body');
let blokA = getElement('div'),
    blokB = getElement('div');
body.append(blokA, blokB); 

let timer = setInterval(() => {
  let now = new Date();
  let nowObj = getNowObj(now);
  blokA.textContent = typeA(nowObj);
  blokB.textContent = typeB(nowObj);
}, 1000,);