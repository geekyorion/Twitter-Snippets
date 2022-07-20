// NullishCoalescing Operator (??)

// it is binary operator [requires two operands; LHS and RHS]
const value = 0 ?? true;

/**
 * It returns left hand side value iff:
 *  - LHS is not null
 *  - LHS is not undefined
 * otherwise it returns the right hand side value
 */
const value = null ?? 1;        // OUTPUT: 1
const value = 1 ?? null;        // OUTPUT: 1
const value = 2 ?? 1;           // OUTPUT: 2
const value = undefined ?? 3    // OUTPUT: 3
const value = undefined ?? null // OUTPUT: null
const value = null ?? undefined // OUTPUT: undefined
const value = 4 ?? undefined    // OUTPUT: 4

// falsy values are actual values those are not null or undefined
// so it returns the LHS in this case
const value = 0 ?? 1            // OUTPUT: 0
const value = false ?? 1        // OUTPUT: false
const value = '' ?? 1           // OUTPUT: ''
const value = NaN ?? 1          // OUTPUT: NaN
