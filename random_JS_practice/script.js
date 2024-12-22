// const arr = [1, 2, 4, 5, 6, 7];
// const n = 3;
// const input = arr.map(val => val * n);

// const missingElement = function (arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] !== arr[i] + n) {
//       console.log(arr[i] + n);
//       break;
//     }
//   }
// };

// missingElement(input, n);

// const str = `This is Javascript Code and you can find the max chars`;
// // sihT si tpircsavaJ edoC

// const words = str.split(' ');
// console.log(words);

// let reversedWords = [];
// words.forEach(word => {
//   reversedWords.push(word.split('').reverse().join(''));
//   if (reversedWords.length === words.length)
//     console.log(reversedWords.join(' '));
// });

// // no. of occurances of each character
// const allLetters = str.split('');
// let counter = {};
// allLetters.forEach(letter => {
//   counter[`${letter}`] ? counter[`${letter}`]++ : (counter[`${letter}`] = 1);
// });

// const [char, count] = Object.entries(counter)
//   .sort((a, b) => a[1] - b[1])
//   .at(-2);
// console.log(char, ':', count);

const input = [2, 7, 11, 4, -2];
// output : [20, 15, 11, 18, 24]

const addOthers = function (inputArr) {
  const output = [];
  inputArr.forEach((_, i, arr) => {
    const left = arr.slice(0, i);
    const right = arr.slice(i + 1, arr.length);
    const sum = left.concat(right).reduce((a, v) => a + v, 0);
    output.push(sum);
  });
  return output;
};

// console.log(addOthers(input));
// console.log(addOthers([12, 2, 7, -3, 9]));

const makeTriangleOf = function (num, char) {
  let letter = char;
  for (let i = 0; i < num; i++) {
    console.log(letter);
    letter += char;
  }
};
// makeTriangleOf(7, '#');

const fizzBuzz = function (num) {
  if (!num) return;
  const result = [];
  let counter = 1;
  for (let i = 0; i < num; i++) {
    const fizz = counter % 3 === 0;
    const buzz = counter % 5 === 0;

    if (fizz && buzz) result.push('fizzBuzz');
    else if (fizz) result.push('fizz');
    else if (buzz) result.push('buzz');
    else result.push(counter);

    counter++;
  }
  result.length === num && console.log(result);
  return result;
};

// const arr = fizzBuzz(100);

const heading = document.querySelector('.heading');
const body = document.querySelector('body');
const button = document.querySelector('.btn');

const rgbValue = function () {
  return Math.floor(Math.random() * 255 + 1);
};

const changeColor = function (e) {
  console.log(e.target.tagName);
  this.style.background = `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
};

// heading.addEventListener('mouseenter', changeColor);
// button.addEventListener('mouseenter', changeColor);
button.addEventListener('click', changeColor);

// body.addEventListener('keydown', (e) => {
//   console.log(`You pressed ${e.key}`);
// });
