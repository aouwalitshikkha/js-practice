// Skeleton
/*
while(condition){
    code block
}
*/
i = 0
while (i < 10) {
    console.log((i + 1) + " Abdul Aouwal")
    i++
}

/**
 * random number generate, 
 * if number is 9 then pause
 */

var isRunning = true

while (isRunning) {
    var rad = Math.floor(Math.random() * 10 + 1)
    if (rad == 9) {
        console.log("You are winner")
        isRunning = false
    } else {
        console.log("it is not 9 but " + rad)
    }
}