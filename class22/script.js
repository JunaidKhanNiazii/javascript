// Nested Scope 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"

        console.log(username)
    }

    // console.log(website)
    two()
}

one()



// concept 2  /// interesting question 
// is tarika is hum function ka oper sa bhi call kar sakta 
console.log(addone(5))
function addone(num)
{
    return num + 1
}
// addone(5)


// is ko jab function ka oper sa call kara ga to error da ga

// console.log(addTwo(5))
const addTwo = function (num){
    return num + 2
}

console.log(addTwo(5))  // it also say expression 
