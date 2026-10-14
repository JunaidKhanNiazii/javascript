
// /*
//  * Summary:
//  * Learn array creation using array literals and the Array constructor.
//  * Understand shallow copies and deep copies in JavaScript.
//  */

// // 1. Create an array using an array literal (recommended)
// const array = [0, 1, 2, "Ahmad", true, false];

// // 2. Create an array using the Array constructor
// const myArray = new Array(1, 2, 3, 4, 5);

// // 3. Difference when passing a single number
// const literalArray = [5];       // One element: 5
// const constructorArray = new Array(5); // Length 5, with empty slots

// console.log("Array literal:", array);
// console.log("Array constructor:", myArray);

// console.log("Literal array:", literalArray);
// console.log("Literal array length:", literalArray.length);

// console.log("Constructor array:", constructorArray);
// console.log("Constructor array length:", constructorArray.length);

// // 4. Create a shallow copy
// const shallowCopy = [...array];

// // 5. Create a deep copy
// const original = [[1, 2], [3, 4]];
// const deepCopy = structuredClone(original);

// console.log("Shallow copy:", shallowCopy);
// console.log("Deep copy:", deepCopy);



// concept 2

// const array = [1,2,3,4]

// array.push(5)
// array.push(6)
// array.pop()
// console.log(array)

// array.unshift(0) // push on the start
// array.shift  // shift from the first 
// console.log(array)


// Concept 3

// console.log(array.includes(2))
// console.log(array.indexOf(2))


// concept 4

// const array = [1,2,3,4]


// result = array.join("-")

// console.log(result)
// console.log(typeof result)



// concept 5

// slice, splice

/* 
Difference Between slice() and splice()
- slice()
- Returns a portion of an array.
- Does not modify the original array.
- array.slice(1, 3) selects elements at index 1 and 2 (end index 3 is excluded).
- splice()
- Adds, removes, or replaces elements in an array.
- Modifies the original array.
- array.splice(1, 3) removes 3 elements starting at index 1 and returns them.
*/

let array = [1,2,3,4, 5,6,7]
console.log(array)

const myn1 = array.slice(1,3)
console.log(myn1)
console.log("After slice original array" , array)

const myn2 = array.splice(1,3)
console.log(myn2)
console.log("After splice original array", array)


