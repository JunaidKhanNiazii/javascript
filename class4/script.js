// Now we learn the difference between var, let and const 

const accountId = 12345; // const is used to declare a variable that cannot be reassigned
let accountName = "John Doe"; // let is used to declare a variable that can be reassigned
var accountBalance = 1000; // var is used to declare a variable that can be reassigned and has function scope

accountcity = "new yark"; 

let accountstate; // it show undifined because we have not assigned any value to it yet
// accountId = 54321; // This will throw an error because accountId is a constant and cannot be reassigned

console.table({accountId, accountName, accountBalance, accountcity, accountstate}); // This will print the values of the variables in a table format

/*
prefer to use const and let instead of var because they have block scope and are less prone to errors. 

*/