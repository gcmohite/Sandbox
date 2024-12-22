'use strict';

const btn = document.querySelector('.off');

btn.addEventListener('focus', function (e) {
  // console.log(this.textContent);
  console.log(`${e.type}ed on`, this.tagName);
  if (this.textContent.includes('off')) {
    this.textContent = 'Machine is on';
  } else {
    this.textContent = 'Machine is off';
  }
});
