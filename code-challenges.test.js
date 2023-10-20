// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


// // b) Create the function that makes the test pass.

// // Pseudo code:

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
    
// // a) Create a test with expect statements for each of the variables provided.
// describe("divisibleByThree", () => {
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
//       expect(divisibleByThree(object1)).toEqual(true)
//       expect(divisibleByThree(object2)).toEqual(true)
//       expect(divisibleByThree(object3)).toEqual(false)
//     })
//   })
  //error: divisibleByThree is not defined 
//   // Test cases using Jest
//  
// b) Create the function that makes the test pass.
// const divisibleByThree = (obj) =>{
//     return obj.number % 3 === 0
// }

  

// Pseudo code: create a function that takes a object as an argument and decides if the number inside it is evenly divisble by 3 or not 
// i would do this but i just dont know how to set up a object as a argument. im watching the lecture but its not clicking to me ... 
// after getting some help from elyse i think i understood more while listening further in the lectures in the syllabus.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe("capitalize" , () =>{
//     it("Returns an array of capitalized words",() =>{
//         expect(capitalize(randomNouns1)).toEqual(["streetlamp", "potato", "teeth", "conclusion", "nephew"

//         ]);
//         expect(capitalize(randomNouns2)).toEqual(["temperature", "database", "chopsticks", "mango"])
//     })
// })


// // b) Create the function that makes the test pass.

// const capitalize = (array) => {
//     return array.map((value) => value.charAt(0).toUppercase() + value.slice(1));
// };

// Pseudo code: its not clicking with me on how to properyly set up a test . i know how to start the application in the terminal and i know how to run the jest test itself . but i dont understand the logic to create a code too run.it doesnt make sense to me . 

//hopefully this try is a bit better i dont necassarily know how to explain it but im follwing the codes from the syllabus and got a fail and wrote what i thought should pass.


  