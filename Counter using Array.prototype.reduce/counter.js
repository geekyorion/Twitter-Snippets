// let's say we have an array and we want the output like:
const array = [ 1, 1, 1, 2, 2, 3, 4, 5, 1, 2, 6 ];
const outputFormat = { 1: 4, 2: 3, 3: 1, 4: 1, 5: 1, 6: 1 };

// so to generate the output like this, we can use general object as
const output = {};
for (let num of array) {
  if (!(num in output)) {
    output[num] = 0;
  }
  output[num]++;
}
console.log(output); // { 1: 4, 2: 3, 3: 1, 4: 1, 5: 1, 6: 1 }

// we can also use Array.prototype.reduce as well to do the same
const counter = array.reduce((hash, num) => {
  if (!(num in hash)) {
    hash[num] = 0;
  }
  hash[num]++;
  return hash;
}, {
  /* this is the empty object which is assigned to hash variable (similar to output variable at line 7) */
});
console.log(counter); // { 1: 4, 2: 3, 3: 1, 4: 1, 5: 1, 6: 1 }

// a very cool and complex way of writing
const oneLiner = array.reduce((_, $) => $ in _ ? { ..._, [$]: _[$] + 1 } : { ..._, [$]: 1 }, {});
console.log(oneLiner); // { 1: 4, 2: 3, 3: 1, 4: 1, 5: 1, 6: 1 }
