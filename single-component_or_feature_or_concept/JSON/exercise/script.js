'use strict';

const catData = async function () {
  const catURL =
    'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

  const request = await fetch(catURL);
  const response = await request.text();
  const catInfo = JSON.parse(response);
  console.log(catInfo);

  kittyDetails(catInfo);
};

function kittyDetails(allCats) {
  console.log(`The three mother cats are:`);
  const mothers = allCats.map((cat) => cat.name);
  console.log(mothers.join(', '));

  const kittenCount = allCats.reduce((a, v) => a + v.kittens.length, 0);
  console.log(`Total number of kittens: ${kittenCount}`);

  const kittens = allCats.flatMap((cat) => cat.kittens);
  let male = 0;
  let female = 0;

  kittens.forEach((kitten) => {
    if (kitten.gender === 'm') male++;
    if (kitten.gender === 'f') female++;
  });

  console.log(`Male kittens: ${male}  Female kittens: ${female}`);
  console.log(kittens);
}

catData();
