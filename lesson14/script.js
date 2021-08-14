/*
1) Сделать класс DomElement, который содержит свойства
  - selector,
  - height,
  - width,
  - bg,
  - fontSize
содержит метод, который создает элемент на странице в зависимости от условия:
- если строка selector начинается с точки, создаем div с классом
- если строка selector  начинается с решетки # то создаем параграф с id
пример:
если передана строка '.block', то функция конструктор создает элемент с class="block"
если передана строка '#best', то функция конструктор создает элемент с id =best"
с помощью cssText задавать стили:
  - высотой - height,
  - шириной - width,
  - background - bg
  - размер текста fontSize
внутрь созданного блока записывать любой текст. Метод записи может быть любым.
2) Создать новый объект на основе класса DomElement
3) Вызвать его метод чтобы получить элемент на странице

Усложненное
1) Используя class DomElement из основного задания №1, создать квадрат 100 на 100 пикселей. 
Ему необходимо задать фон(background) любого цвета и свойство position: absolute.
2) Поместить его на страницу только после выполнения события DOMContentLoaded.
Внутри тега body  должно быть только подключение скрипта.
3) Написать обработчик события для keydown, который будет принимать callback-функцию. 
Данная функция будет отлавливать нажатие на стрелки клавиатуры. 
В зависимости от нажатой кнопки(Вверх - стрелка вверх, Влево - стрелка влево, 
  Вправо - стрелка вправо, Вниз - стрелка вниз) 
наш квадрат будет перемещаться на 10 пикселей.
*/

'use strict';

const DomElement = function() {
  this.selector = '';
  this.height = '';
  this.width = '';
  this.bg = '';
  this.fontSize = '';
  this.position = '';
};

DomElement.prototype.makeDiv = function(text) {

  let elem;
  if (this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.classList.add(this.selector.slice(1));
  } else if (this.selector[0] === '#') {
    elem = document.createElement('p');
    elem.setAttribute('id', this.selector.slice(1));
  } else {return;}
  elem.style.cssText=
`height: ${this.height};
width: ${this.width};
background: ${this.bg};
font-size: ${this.fontSize};
`;
  elem.textContent = text;
  elem.style.position = this.position;
  return elem;
};
const domElement = new DomElement();
domElement.selector = '.test';
domElement.height = '100px';
domElement.width = '100px';
domElement.fontSize = '25px';
domElement.bg = 'green';
domElement.position = 'absolute';

const element = domElement.makeDiv('Проверка');
document.body.append(element);


function cbFunction(e) {

  if (e.key === 'ArrowUp') {
    let top = +element.style.top.slice(0, -2) || 0;
    top -= 10;
    top = top < 0 ? 0 : top;
    element.style.top = top + 'px';  
  } else if (e.key === 'ArrowDown') {
    let top = +element.style.top.slice(0, -2) || 0;
    let topMax = document.documentElement.clientHeight-100;
    top += 10;
    top = top > topMax ? topMax : top;
    element.style.top = top + 'px';   
  } else if (e.key === 'ArrowLeft') {
    let left = +element.style.left.slice(0, -2) || 0;
    left -= 10;
    if (left < 0) {
      left = 0;
    }
    element.style.left = left + 'px'; 
  } else if (e.key === 'ArrowRight') {
    let left = +element.style.left.slice(0, -2) || 0;
    let leftMax = document.documentElement.clientWidth-100;
    left += 10;
    left = left > leftMax ? leftMax : left;
    element.style.left = left + 'px'; 
  }
}

document.addEventListener('keydown', cbFunction);