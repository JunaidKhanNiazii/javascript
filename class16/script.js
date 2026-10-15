// object class 1

// Two way 1) literal 2) constructor 

// Singleton : jab constructor sa bana ga
//Object.create

//object  literal 

let symbol =  Symbol("key1")
const jsuser= {
    name1 : "junaid",
    "Full Name": "Junaid Ameer Khan",
    [symbol] : "Hello key",
    age : 18,
    locaton : "Karachi"
}
 
// concept 1

// console.log(jsuser.name1)
// console.log(jsuser["name1"])


//concept 2
//console.log(jsuser."Full Name") here come an error 
// console.log(jsuser["Full Name"])

// concept 3

// console.log(jsuser[symbol])
// console.log(jsuser.symbol)


// concept 4 

// jsuser.age = 23
// Object.freeze(jsuser)
// jsuser.age = 25

// console.log(jsuser)

// concept 4

jsuser.greating = function (){
    console.log("Hello Js user")
}
jsuser.greating2 = function ()
{
    console.log(this.age)
}

jsuser.greating()
jsuser.greating2()

