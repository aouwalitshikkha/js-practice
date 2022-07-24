var age = "25" // string 
var n = 10

console.log(age * n) // Auto implecit Conversion
console.log(age + n) // added as string 

// Converting to Number

console.log(Number(age)) //it is number
console.log(Number.parseFloat(age)) // Number 

// String Conversion

console.log(n.toString())



console.log(Number(Infinity)) // will not convert
console.log(Boolean(Infinity))  // Return True 


// Truly and Falsy Value

// false , 0, -0, "" , '', ``, null, undefined, NaN, doecument.all
//  details: https://developer.mozilla.org/en-US/docs/Glossary/Falsy


console.log(Boolean(NaN))  // Falsy Value
console.log(Boolean(0))  // Falsy Value








