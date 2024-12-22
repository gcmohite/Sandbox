'use strict';

const populate = async function () {
  const requestURL =
    'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const response = await fetch(requestURL);
  console.log(response);

  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  console.log(superHeroes);

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
};

function populateHeader(obj) {
  const header = document.querySelector('header');
  const h1 = document.createElement('h1');
  h1.textContent = obj.squadName;

  const para = document.createElement('p');
  para.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  console.log(para);

  header.insertAdjacentElement('afterbegin', para);
  header.insertAdjacentElement('afterbegin', h1);
}

function populateHeroes(obj) {
  const section = document.querySelector('section');
  const heroes = obj.members;
  console.log(heroes);

  heroes.forEach((hero) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const list = document.createElement('ul');

    h2.textContent = hero.name;
    para1.textContent = `Secret Identity: ${hero.secretIdentity}`;
    para2.textContent = `Age: ${hero.age}`;
    para3.textContent = 'SuperPowers: ';
    para3.style.fontWeight = 'bolder';

    const superPowers = hero.powers;

    superPowers.forEach((power) => {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      listItem.style.listStyle = 'none';
      listItem.style.marginLeft = '-40px';

      list.insertAdjacentElement('afterbegin', listItem);
    });

    article.insertAdjacentElement('beforeend', h2);
    article.insertAdjacentElement('beforeend', para1);
    article.insertAdjacentElement('beforeend', para2);
    article.insertAdjacentElement('beforeend', para3);
    article.insertAdjacentElement('beforeend', list);

    section.insertAdjacentElement('beforeend', article);
  });
}

populate();
