// // strings in javascript

// const name = "junaid"
// const age = 21

// // old way of concatenation 

// console.log("My name is " + name + " and my age is " + age)
// console.log("My name is " , name , " and my age is " , age , " and my city is " , "karachi")

// //  new way of concatenation using template literals

// console.log(`My name is ${name} and my age is ${age}`) // it will print My name is junaid and my age is 21





// Methods in string

// const gameName = new String("FIFA 23")
// console.log(gameName)
// console.log(typeof gameName)

// const gameName1 = "FIFA 23"
// console.log(gameName1)
// console.log(typeof gameName1)

/**
 * REVISION CHEAT SHEET: Primitive String vs String Object
 * 
 * 1. TYPE:
 *    - Primitive ("FIFA 23"): type is "string". Faster and lower memory.
 *    - Object (new String()): type is "object". Avoid this.
 * 
 * 2. EQUALITY TRAP:
 *    - "FIFA 23" === "FIFA 23" is TRUE (compares values).
 *    - new String("FIFA 23") === new String("FIFA 23") is FALSE (compares memory addresses).
 * 
 * 3. AUTO-BOXING: 
 *    - Primitives can still use methods (like .toUpperCase() or .length).
 *    - JavaScript temporarily converts the primitive to an object behind the scenes automatically.
 * 
 * CONCLUSION: Always use primitives. NEVER use 'new String()'.
 */


const gameName2 = "FIFA 23"

// console.log(gameName2.length) // it will print 8 because there are 8 characters in the string
// console.log(gameName2.toUpperCase()) // it will print FIFA 23 because it converts the string to uppercase
// console.log(gameName2.toLowerCase()) // it will print fifa 23 because it converts the string to lowercase
// console.log(gameName2.includes("FIFA")) // it will print true because the string contains "FIFA"
// console.log(gameName2.charAt(3))
// console.log(gameName2.indexOf("FIFA")) // it will print 0 because "FIFA" starts at index 0


// const newString = gameName2.substring(0, 4) // it will print FIFA because it extracts the string from index 0 to 4

// // const newstring = gameName2.substring(-8,5) // it will print FIFA because it extracts the string from index 0 to 4
// const newString1 = gameName2.slice(-6, 4) // it will print FIFA because it extracts the string from index 0 to 4
// console.log(newString)
// console.log(newString1)



const newStriing2 = "    Hello World"

const value = newString2.trim() // it will print Hello World because it removes the whitespace from the string  
console.log(value)

const url = "https://www.google.com/search?q=javascript+string+methods&rlz=1C1GCEU_enPK832PK832&oq=javascript+string+methods&aqs=chrome..69i57j0i22i30l9.10748j0j7&sourceid=chrome&ie=UTF-8"
console.log(url.replace("https://www.google.com/search?q=", "")) // it will print javascript+string+methods&rlz=1C1GCEU_enPK832PK832&oq=javascript+string+methods&aqs=chrome..69i57j0i22i30l9.10748j0j7&sourceid=chrome&ie=UTF-8 because it removes the https://www.google.com/search?q= from the string