/*
1) Создать массив week и записать в него дни недели в виде строк
·        Вывести на экран все дни недели
·        Каждый из них с новой строчки
·        Выходные дни - курсивом
·        Текущий день - жирным шрифтом(использовать объект даты)
2) Запушить проект в репозиторий для усложненных заданий на Github
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
const dayNow = () => {
  const now = new Date().getDay();
  if (now === 0) {
    return 6;
  } else {return now - 1;}
};

week.forEach((value, index) => {
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
});