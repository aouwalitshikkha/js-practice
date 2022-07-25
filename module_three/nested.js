// print below pattern
/**
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 * 1 2 3 4 5 6
 */
n = 5
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result)
}

// Again 

/**
 * * *
 * * *
 * * *
 */

n = 5
for (var i = 1; i <= n; i++) {
    result = ''
    for (var j = 1; j <= n; j++) {
        result += '* '
    }
    console.log(result)
}