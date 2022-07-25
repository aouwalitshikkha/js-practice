var a = "Abdul Aouwal"

console.log(a.charAt(0));  // return a 
console.log(a.charAt(30));  // return a 

var len = 0

while (true) {
    if (a.charAt(len) == '') {
        break
    } else {
        len++
    }
}

console.log(len)


// default way

console.log(a.length);