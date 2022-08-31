// let's generate a random number in a range (x, y)

// we know that Math.random() generates the number in between 0 (inclusive) and 1 (exclusive)
// and we multiply that number with any other integer then it can go till that number
Math.random() * 100 // will generate a number from 0 to 100 (including floating value)

// and now we want to generate a random number in range of 50 to 100
// so here we can not do
const ans = (Math.random() * 100 - Math.random() * 50);

// cause let's say generated numbers are 25 and 24 so the difference is 1
// which is not in the range of 50 to 100

// SOLUTION:
// generate a number by taking the difference

const max = 100;
const min = 50;

const random = Math.random() * (max - min);

// here the random number is in between 0 and 50
// but if we add 'min' to that number it will provide us the range from 50 to 100

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const randomNumber = randomRange(50, 100);

// to overcome floating issue use ~~ or parseInt()
let intRandom = ~~(Math.random() * 100);    // will be an integer (here ~~ acts as Math.floor())
intRandom = parseInt(Math.random() * 100);  // will be an integer


/* Links:
  1. Math.random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
