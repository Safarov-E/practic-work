let item = document.querySelector('.menu');
let items = document.querySelectorAll('.menu-item');
item.insertBefore(items[2], items[1]);

let li = document.createElement('li');
li.classList.add('menu-item')
li.innerHTML = 'Пятый пункт';
item.appendChild(li);

document.querySelector('body').style.background = 'url(../img/apple_true.jpg)';

let title = document.querySelector('div .title');
title.textContent = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');
let column = document.querySelectorAll('.column');
column[1].removeChild(adv);

let text = prompt('Как вы относитесь к технике apple', "");
let alert = document.querySelector('.prompt');
alert.textContent = text;