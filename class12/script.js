// Numbers and math

// ---- concept 1 ----
// which is the best way to declare a number in javascript
// const score = 10 // best way to declare a number in javascript
// const score1 = new Number(10) // not a good way to declare a number in javascript
// why not to use new Number() because it creates a number object which is not recommended to use in javascript
// because it is slower and takes more memory than a primitive number
// also it can lead to unexpected behavior when comparing numbers because it compares the memory address of the object instead of the value of the number


// const score = 10

// console.log(typeof score)
// console.log(score)
// console.log(" ----- ----- ")

// const score1 = new Number(10)
// console.log(typeof score1)
// console.log(score1)

// --- concept 2 -----

// const score2 = 10.50
// console.log(score2.toFixed(1)) // it will print 10.5 because it rounds the number to 1 decimal place


// const score3 = 10.59
// console.log(score3.toPrecision(3)) // it will print 10.5 because it rounds the number to 3 significant digits

// const hunderds = 100000000
// console.log(hunderds.toLocaleString()) // it will print 100,000,000 because it formats the number with commas


//---- concept 3 ----

// ++++++++++++++ Math ++++++++++++++

// info about math 
// Math is a built-in object in JavaScript that provides various mathematical functions and constants.

// console.log(Math)
// console.log(Math.PI) // it will print 3.141592653589793 because it is the value of pi
// console.log(Math.E) // it will print 2.718281828459045 because it is the value of e
// console.log(Math.sqrt(16)) // it will print 4 because it is the square root of 16
// console.log(Math.pow(2, 3)) // it will print 8 because it is 2 raised to the power of 3
// console.log(Math.abs(-10)) // it will print 10 because it is the absolute value of -10
// console.log(Math.floor(4.9)) // it will print 4 because it rounds the number down to the nearest integer
// console.log(Math.ceil(4.1)) // it will print 5 because it rounds the number up to the nearest integer
// console.log(Math.round(4.5)) // it will print 5 because it rounds the number to the nearest integer
// console.log(Math.random()) // it will print a random number between 0 and 1
// console.log(Math.floor(Math.random() * 10)) // it will print a random number between 0 and 9
// console.log(Math.min(1, 2, 3, 4, 5)) // it will print 1 because it is the minimum number
// console.log(Math.max(1, 2, 3, 4, 5)) // it will print 5 because it is the maximum number
// console.log(Math.sign(-10)) // it will print -1 because it is the sign of the number
// console.log(Math.sign(10)) // it will print 1 because it is the sign of the number
// console.log(math.floor(Math.random() * 100)) // it will print a random number between 0 and 99



// now understand the concept of random 

console.log(Math.floor(Math.random() * 10 + 1))

max = 20
min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // it will print a random number between 10 and 20
