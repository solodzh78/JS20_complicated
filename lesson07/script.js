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

week.forEach((value, index) => {
  let day = getElement('p',{
    
    textContent: value
  });
  if (value === 'пятница') {
    day.style['font-weight'] = 'bold';
  }
  if (value === 'суббота' || value === 'воскресенье') {
    day.style['font-style'] = 'italic';
  }
  

  console.dir('day: ', day);
  body.append(day);
});