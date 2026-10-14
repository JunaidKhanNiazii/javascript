/////// stack and heep memory 
// stack : primitive 
// heap : non primitive data type


let myname = "John"
let anotherName = myname

anotherName = "Doe"

// console.table([myname, anotherName]) // it will print John and Doe because primitive data types are stored in stack memory and they are copied by value



let userone = {
    name : "junaid",
    email : "junaid@gmail.com"
}

let usertwo = userone

usertwo.name = "ali"

console.table([userone, usertwo]) // it will print ali and ali because non primitive data types are stored in heap memory and they are copied by reference