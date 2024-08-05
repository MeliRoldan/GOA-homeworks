let persons = {
    firstName: 'meli',
    lastName: 'roldan',
    age: 33
}

let func = (obj) => {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
}

func(persons)

let nums = [1, 3, 5, 7]

let odds = (numArr) => {
    for (let num of numArr) {
        if (num % 2 === 0) {
            return false
        }
    }
    return true
}

console.log(odds(nums))

let nameList = ['meli', 'nino', 'gio', 'nika', 'ana', 'ika', 'tamo', 'ako']

let check = (nameArr) => {
    let newArr = []

    for (let name of nameArr) {
        if (name[0] == 'a') {
           newArr.push(name)
        }
    }

    return newArr
}

console.log(check(nameList))