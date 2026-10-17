// function
// A function in JavaScript is a reusable block of code designed to perform a specific task. It takes inputs (parameters), executes the code inside, and sends back a result using the return keyword. You define it once, and then run (call) it anywhere in your program to avoid repeating code.

function sayMyName (){
    console.log("Junaid")
}

sayMyName() // sayMyname is reference and () this is excution 

function sum (num1, num2) // parameter : in the function 
{
    console.log(num1 + num2)
}
sum (3, 4) //Argument :  when pass orginal value in the function is the 


// concept 3 
// Result value

function sub(num1, num2)
{
    return num1 - num2
}

console.log(sub (9, 7))


// concept 4
function loginUserMessage(username)
{
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


// concept 4
function loginUserMessage1(username = "saim") // if no value input then saim go to it
{
    return `${username} just logged in`
}

console.log(loginUserMessage1())