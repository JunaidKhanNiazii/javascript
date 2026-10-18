// Arrow function + this keyword


// concept 1
// this is used to refer for current context 
const user = {
    username : "Junaid ",
    price : 999,

    welcomeMessage : function(){
        console.log (`${this.username}, Welcome to website`)
        console.log(this)
    }

}


// user.welcomeMessage()
// user.username = "SAIM"
// user.welcomeMessage()


// console.log(this ) Broswer ka ander global object window ha (jab browser ka ander run kar ka dakta hin)
console.log(this) // is ka sirf {} aia ga



// Concept 2
// mean this ko hum object ka under use kara ga
function chai (){
    let username = "Junaid"
    console.log(this)
    console.log(this.username) // undefined
}


// chai()

const chai1 = function (){
    let username = "junaid"
    console.log(this.username)
}
// chai1()

const chai3 = () =>{
    let username = "junaid"
    console.log(this.username)
}

// chai3()

// concept 3 

// arrow function :::+++   () => {}

// method 1

const addTwo = (value1, value2) => {
    return value1 + value2
}

// console.log(addTwo(4,5))

// method 2

// const addTwos = (value1, value2) => value1 + value2
const addTwos = (value1, value2) => (value1 + value2)

const objreturn = (num1, num2) => ({username: "Junaid"})

console.log(addTwos(4,5))

// Note ::Explicet return :: if use {} in function then return must write  // other wiste like () no need return in arrow function 
// Implicit return :: no need to write return keyword