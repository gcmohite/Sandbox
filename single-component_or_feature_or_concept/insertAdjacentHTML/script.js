'use strict';

const parent = document.querySelector('.container');

const str = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,rem.</p>`;

parent.insertAdjacentHTML('afterbegin', str);
