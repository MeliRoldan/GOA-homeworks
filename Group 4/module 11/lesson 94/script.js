const restFunc = (...newNames) => {
    const nameArr = [...newNames]
    return nameArr
}

console.log(restFunc('meli', 'nika', 'nino'))

const persons = {
    name: 'meli',
    surname: 'roldan',
    age: 33,
}

const newProp = {...persons, job: 'developer'}

console.log(newProp)