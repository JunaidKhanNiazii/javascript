// Primitive datatypes in javascript

/* 
1. number => range  2^53 + 1
2. bigint => range No theoretical limit 
3. string => "" 
4. bollean => true or false
5. null =>  stanalone value 
6. undefined => variable is declared but not assigned any value
7. symbol => unique and immutable value
*/



const id = Symbol("123")
const id1 = Symbol("123")

const bignumber = 1234567890123456789012345678901234567890n // n at the end of the number indicates that it is a bigint 

console.log(typeof bignumber) // it will print bigint
console.table([id, id1]) // it will print the symbol values in a table format
console.log(id === id1) // it will print false because symbol is unique and immutable value

// Non-primitive datatypes in javascript -- Reference datatypes 

/*
Array => collection of values

const arr = [1, 2, 3, 4, 5] // it is an array of numbers

Object => collection of key value pairs

let obj = 
{
    name: "John",
    age: 30,
    city: "New York"
}


Function => block of code that can be executed when called

function myFunction() {
    // code here
}
*/

