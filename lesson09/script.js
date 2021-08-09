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

let week = [
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
  'воскресенье'
];

let body = document.querySelector('body');
const now = new Date();

const options = {
  // era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
console.log(now.toLocaleString("ru", options)); // понедельник, 9 августа 2021 г. от Рождества Христова, 07:20:50



/* const dayNow = () => {
  if (now === 0) {
    return 6;
  } else {return now - 1;}
}; */

/* week.forEach((value, index) => {
  let day = getElement('div',{
    textContent: value
  });
  if (index === dayNow()) {
    day.style['font-weight'] = 'bold';
  }
  if (index === 5 || index === 6) {
    day.style['font-style'] = 'italic';
  }
  body.append(day);
}); */