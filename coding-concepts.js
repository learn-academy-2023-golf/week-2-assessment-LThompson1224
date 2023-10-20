// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "Golf 2023"
// console.log(cohort.split(" "))

// a) Your answer:["G","o""l","f" "2","0","2","3"]


// b) Verify and explain: the answer was ['Golf', '2023'] when i input the logic inside the terminal i though it would give me the answer above but instead what i thought it was going to give it split them into their own individual strings , however after researching the .split converts the string into an array and im guessing the empty string inside the parenthesis was supposed to specify what to split. 

// --------------------2) What will this log?

// const greeter = (name) => {
// `Hello, ${name}!`
// }
//  console.log(greeter("LEARN Student"))

// a) Your answer:undefined
// b) Verify and explain: when i ran the logic into my terminal i got defined and my guess is because in the console log the string LEARN Student was not identified as a constant or variable . which makes the code come out as undefined.

// --------------------3) What will this log?

//const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: the const onlyOdds along the .filter will filter out all values that arent odd 
//and the  => and the % help identify the function that makes it correct

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
//}
// console.log(myCodingSkills.languages[0])

// a) Your answer: ["Javascrpt,"Ruby"]
// b) Verify and explain: the console loge idetified the 0 index of the object
// so the correct anser was javascript

// --------------------5) What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Golf"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: "George"
// b) Verify and explain: i was confused by the answer which was Learn { student: 'George', cohort: 'Golf', year: 2023 } becasue the constant wasnt in the object.
// but when i ran the console i beleive that it called on the object by using learn so it didnt have to be in the brackets 
