// logical Operators

/* List 

&& -- and Operators
|| -- Or Operators 
! - Not Operators 

===========================

A && B -- Both Must be True 
True && True = True 
True and False = False 


A|| B -- Minimum One Condion Must be True 

*/


var a = 30
var b = 20
var c = 40
var d = 30

if (a > b && c > d) {
    console.log("A is Greater than b and C is Greater than D")
} else {
    console.log('At least is False')
}


var check = !(a > b)  // Return Oposit  
console.log(check)