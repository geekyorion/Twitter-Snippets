/**
 * Returns a random generate ID
 * @returns { string } ID
 */
const getARandomID = () => {
  return Math.random().toString(16).slice(2);
}
// const getARandomID => () => Math.random().toString(16).slice(2); // <---- one liner

/*
- Used Method
  - Math.random() => generate a random number in between 0 (inclusive) and 1 (exclusive)
  - toString()    => returns the string representation of an object (basically converts to the string)
  - slice()       => it's a "string.prototype.slice()" and use to extract a string part

- explanation:
  - Math.random() generates a random number example (0.9524750476121435)
  - toString(16) converts the number to hex string ('0.f3d5679bc00d1')
  - slice(2) removes starting 2 characters of string '0.' and returns rest of the string ('f3d5679bc00d1')
*/
