// sigleten 

// const tinderUser = new Object()
// concept 1 

const tinderUser = {
}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggin = false

// console.log(tinderUser)



// concept 2 



// object chaning 
// const regularUser = {
//     email : "junaid@gmail.com",
//     fullname : {
//         userfullname:{
//             firstname :"junaid",
//             lastname : "khan"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname)

// optional chaining with ? 

// topic 3

// how combine 2 object 

// const obj1 = {
//     1 : "a",
//     2 : "b"
// }
// const obj2 = {
//     3 : "a",
//     4 : "b"
// }

// // const obj3 = {obj1, obj2}
// const obj3 = {...obj1, ...obj2}
// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj3)
// console.log(obj4)



// concept 4

// array of object 

// const users = [
//     {
//         id:1,
//         email: "Junaid@gmail.com"
//     },
//     {
//        id :2,
//        email: "Khan@gmail.com" 
//     }
// ]

// console.log(users[1].email)


// concept 5

const tinderUser1 = {
}
tinderUser1.id = "123abc"
tinderUser1.name = "Sammy"
tinderUser1.isLoggin = false

// console.log(Object.keys(tinderUser1))
// console.log(Object.values(tinderUser1))
// console.log(Object.entries(tinderUser1))

console.log(tinderUser1.hasOwnProperty('isLoggedIn')) // answer in true false

