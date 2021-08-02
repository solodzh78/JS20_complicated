/*
Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.
Решите задачу 
  через if, 
  через switch-case, 
  через многомерный массив без ифов и switch.
*/

'use strict';
let lang = 'en';
console.log('lang: ', lang);

let daysOfWeek = {
  ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
};

console.log('Вывод при помощи оператора if:');
if (lang === 'ru') {
  console.log(String(daysOfWeek.ru));
} else if (lang === 'en') {
  console.log(String(daysOfWeek.en));
}else {
  console.log('Значение переменной lang должно быть либо "ru", либо "en"');
}

console.log('Вывод при помощи оператора switch-case:');
switch (lang) {
  case 'en':
    console.log(String(daysOfWeek.en));
    break;
  case 'ru':
    console.log(String(daysOfWeek.ru));
    break;
  default: console.log('Значение переменной lang должно быть либо "ru", либо "en"');
}

console.log('Вывод при помощи многомерного массива:');
console.log(String(daysOfWeek[lang] ?? 'Значение переменной lang должно быть либо "ru", либо "en"'));

/*
У нас есть переменная namePerson.
Если значение этой переменной “Артем” то вывести в консоль “директор”,
если значение “Максим” то вывести в консоль “преподаватель”,
с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
Запушить проект в репозиторий для усложненных заданий на GitHub
*/

let namePerson = 'Артем';
console.log('namePerson: ', namePerson);
console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент');