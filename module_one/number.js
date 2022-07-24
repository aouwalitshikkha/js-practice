var a = 25  // number literal 
var b = 10.30 // Number Literal , Floating Number 

var n = Number(45) // Number Constructor 
var m = Number('45') // Number Constructor 



// there is no different 
// between declaration of integer and float
console.log(n)
console.log(m)
console.log(Number.parseFloat(b))  // Converting to Float Number
console.log(Number.parseInt(b)) // Converting to integer number

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


// Nan Idea 

console.log(1 / 0) // Return Infinity
console.log(1 / 'abc') // Return Nan - Not a Number 
