// // A2 - Make a function that will convert an object into a 2D array, expected result ->  [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// const functionSum = (obj) => { 
//     return Object.entries(obj)
// }
// console.log(functionSum({a: 1, b: 2, c: 3}))


// // A3 - Make a function that returns the amount of numbers and letters - NumbersAndLetters("Hello World 2023") -> {"Letters": 10, "numbers": 4}
// const NumbersAndLetters = (something) => {
//     numbersOf = something.length
//     // leterNum = 10 
//     result = Number.isNaN(something)

//     for ()

//     if (result !==  ) {
//         resultOne = 
//     } else {
//         resultOne = 
//     }
//     for (let a = 0; a <= numbersOf; a++) {

//     }
// }
// console.log(NumbersAndLetters("Hello World 2023"))

// // A3 - Answer by Ali
function NumbersAndLetters(str) { // declaring a function called NUmbersAndLetters(str) with 
    let letters = [] // declared variable array cause you want the count 
    let numbers = []

    const filterStr = str.split('').filter(item => item != ' ') // this line filters through the string and gets rid of the spaces (so it doesn't count the spaces)

    for (let i = 0; i < filterStr.length; i++) {
        // if, else
        if (isNaN(i)) { // checks if i is NaN 
            letters.push(filterStr[i]) // if 'i' is NaN, push the result to letters 
        } else {
            numbers.push(filterStr[i]) // else if 'i' is not NaN push the result to numbers
        }
    }

    let finalCount = { // declaring a variable that contains an object 
        "letters": letters.length, 
        "numbers": numbers.length
    }
    return finalCount // returning the above variable 
}
console.log(NumbersAndLetters('Hello World 2023'))