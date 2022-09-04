// let's imagine an array something like this:
const array = [1, 2, [3, 5], [3, 5], 1, 2, 4];

// and if we create a set from this array then you probably guessed it:
const set = new Set(array);
console.log(set);
// output: {1, 2, [3, 5], [3, 5], 4}
// yeah it won't remove the array or object as both arrays are different here
// when we create an array or an object then variables hold the references

const arr = [3, 5];
const newSet = new Set([1, 2, arr, arr, 1, 2, 4]);
console.log(newSet);
// output: {1, 2, [3, 5], 4}
// cause both "arr" holds the same reference, Set will remove the duplicate reference here
// hence it will work in this scenario

// if we use destructuring of the array or objects then also it won't work
const obj = { a: 1 };
const arr2 = [1, 2];
console.log(new Set([obj, { ...obj }, arr2, [...arr2]]));
// output: { {a: 1}, {a: 1}, [1, 2], [1, 2] }

// Some useful terms for further reading with links
// - Shallow Copy: https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
// - Object/Array Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// - Set Class: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
