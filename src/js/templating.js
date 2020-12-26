import menu from '../menu.json';
import itemsTemplate from '../tamplates/menu.hbs';
console.log(menu);

const markup = itemsTemplate(menu);
console.log(markup);

const menuRef = document.querySelector('.menu');
menuRef.insertAdjacentHTML('beforeend', markup);
