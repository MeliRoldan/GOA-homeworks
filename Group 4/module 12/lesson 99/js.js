// 1) https://www.codewars.com/kata/5547929140907378f9000039 - done
// 2) https://www.codewars.com/kata/539ee3b6757843632d00026b - done
// 4) Given an array of numbers, return a new array where only the odd numbers are doubled. - done
// 5) https://www.codewars.com/kata/546e2562b03326a88e000020/train/python - done
// 6) https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118 - done
// 7) Given an array of numbers, return the largest number - done
// 8) https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c - done

// 4) Given an array of numbers, return a new array where only the odd numbers are doubled.
const numArr = [2, 5, 7, 8, 10, 34, 17, 3, 1]

const oddArr = numArr.filter(num => num % 2 !== 0)


// Given an array of numbers, return the largest number - done
const largest = numArr.reduce((acc, num) => {
    if (acc < num) {
        acc = num;
    }
    return acc;
}, 0)

console.log('Odd numbers arr:', oddArr)
console.log(largest)


const arr = ['meli', 'nino', 'nika', 'meli', 'nino'];

const newArr = [];

for (let i = 0; i < arr.length; i++) {
    if(!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    }
}

console.log(arr)

console.log(newArr)