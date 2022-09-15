// let's have an array
const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array.length) // 8;

// let's say we want to delete the last 3 items;
array.length = (array.length - 3); // in case, the array size is dynamic
console.log(array); // [1, 2, 3, 4, 5]
// OR
array.length = 5; // in case, array size is static
console.log(array); // [1, 2, 3, 4, 5]

// Let's say we want to empty an array
array.length = 0;
console.log(array); // []

/**
 * This is a better solution to delete the array elements
 * which can improve the performance as well
 */

// Links:
// 1. Array.prototype.length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
