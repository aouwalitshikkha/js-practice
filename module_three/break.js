
while (true) {
    var rad = Math.floor(Math.random() * 10 + 1)
    if (rad == 9) {
        console.log("You are winner")
        break
    } else {
        console.log("it is not 9 but " + rad)
    }
}