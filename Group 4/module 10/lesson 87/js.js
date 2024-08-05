let stringify = finalFib => {
    let str = ""
    finalFib.forEach(element => {
        str += String(element)
    });

    return str
}

let fib = numbers => {
    let fibNums = [0, 1]

    for (let i=2; i < numbers+1; i++) {
        fibNums.push(fibNums[i-1] + fibNums[i-2])
    }

    return stringify(fibNums)
}

console.log([fib(10)])