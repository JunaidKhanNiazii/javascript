// Rest operator 

//if i want to pass multiple parameter in the
 
// function calculateCarPrice (...num1)
// {
//     return num1
// }

// console.log(calculateCarPrice(200,400, 500))


// function calculateCarPrice2 (value1, value2, ...num1)
// {
//     console.log(value1, value2)
//     return num1
// }

// console.log(calculateCarPrice2(200,400, 500, 600))


// concept 3 handle object through functions

// const user = {
//     username : "hitesh",
//     price : 199
// }

// function handleObject(anyobject){
//     return `Username is ${anyobject.username} and price is ${anyobject.price}`
// }

// console.log(handleObject(user))

// console.log(handleObject(
//     {
//     username :"junaid",
//     price : 40
// }
// ))



// concept 3 array handle through functiion 


const myNewArray = [200, 400, 100, 600]

function returnSecondValue (getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray))