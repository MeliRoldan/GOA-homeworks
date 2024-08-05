let inputName = document.getElementById('inputName')
let testName = document.getElementById('testName')

let submit = document.getElementById('submit')
let check = document.getElementById('check')

let p = document.getElementById('p')

let list = []

submit.addEventListener ('click', function() {
    list.push(inputName.value)
    inputName.value = ""
})

check.addEventListener ('click', function() {
    let result = false

    for (let element of list) {
        if (element == testName.value) {
            p.innerHTML = "True"
            result = true
        }
    }

    if (result === false) {
        p.innerHTML = "False"
    }
})