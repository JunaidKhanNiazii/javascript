const marvel_hero = ["Thor", "Ironman ", "Spiderman" ]
const dc_heros = ["superman", "Flash", "batman"]

// concept 1


// marvel_hero.push(dc_heros)
// console.log(marvel_hero)

// console.log(marvel_hero[3][1])


// concept 2


// const all_array = marvel_hero.concat(dc_heros)
// console.log(all_array)


// concept 3 : speard operator 

// const all_new_heros = [...marvel_hero , ... dc_heros]
// console.log(all_new_heros)


// concept 4: array in array in array

// const another_array = [1,2,3, [4,5,6], 7, [6,7, [4, 5]] ]

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array)


// concept 5: 

console.log(Array.isArray("Hitesh"))
console.log(Array.from("junaid")) // create from the one variable 

console.log(Array.from ({name: "junaid"}))// interesting ::: is main huma batana hota ha ka key ya value sa hum array bana cha raha hin 


// 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))