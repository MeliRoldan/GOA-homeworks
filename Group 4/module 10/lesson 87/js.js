let stringify = numArr => {
    let str = ""
    numArr.forEach(element => {
        str += String(element)
    });

    return str
}

let fib = repeat => {
    let nums = [0, 1]

    for (let i=2; i < repeat+1; i++) {
        nums.push(nums[i-1] + nums[i-2])
    }

    return stringify(nums)
}

console.log([fib(10)])