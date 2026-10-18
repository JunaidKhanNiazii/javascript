// Immediately Invoked Function Expressions (IIFE)

// Global scope sa polution hoti ha. us poluton sa bachana kalia 
// () () IIFE ko istamal karta ho automatically run ho jata ha. 



// (function chai ()
// {
//     console.log("DB connected")
// }) () 

// ( () => {
//     console.log("DB connected 2")
// })

// concept 2 IIFE ko samj nahi a raha ka kaha per end karo
// ; functon ka last main lagna para ga.


(function chai ()
{
    console.log("DB connected")
}) ();

( (nam) => console.log(`DB connected 2 ${nam}`) )("junaid");


