// Double tilde acts as Math.floor() and Math.ceil()
//  1. Math.ceil() when number is negative
//  2. Math.floor() when number is positive

const floor = ~~(12.5);   // 12
const ceil = ~~(-12.5);   // -12

// but how it is doing that. It is using a formula
// where ~ means -(N + 1) where N is the integer part of that number
// let's see this in action

const alternative = number => -(-(parseInt(number) + 1) + 1);

const x = 12.5;
const y = -12.5;

console.log(~~x === alternative(x));  // true
console.log(~~y === alternative(y));  // true
