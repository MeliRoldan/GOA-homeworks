let buttons = document.getElementsByTagName('button')
let start = document.getElementById('start')
let operation = document.getElementById('operation')

let sam_span = document.getElementById('sam_span')

let arr = ''
let result

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        start.innerHTML = ""
        operation.innerHTML += buttons[i].innerHTML
        if (buttons[i].innerHTML == '=') {
            sum()
        } else if (buttons[i].innerHTML == 'C') {
            operation.innerHTML = ""
            sam_span.innerHTML=""
            arr = ""
        } else {
            arr += buttons[i].innerHTML
        }
    })
}

function sum () {
    for (let i = 0; i < arr.length; i++) {
        let num1
        let num2

        if (arr[i] == "+") {
            let nums = arr.split("+")
            num1 = Number(nums[0])
            num2 = Number(nums[1])
            plus(num1, num2)
        } else if (arr[i] == "-") {
            let nums = arr.split("-")
            num1 = Number(nums[0])
            num2 = Number(nums[1])
            minus(num1, num2)
        } else if (arr[i] == "*") {
            let nums = arr.split("*")
            num1 = Number(nums[0])
            num2 = Number(nums[1])
            multiply(num1, num2)
        } else if (arr[i] == "/") {
            let nums = arr.split("/")
            num1 = Number(nums[0])
            num2 = Number(nums[1])
            dived(num1, num2)
        }
    }
}

function plus (num1, num2) {
    result = num1 + num2
    console.log("This is result:", result)
    sam_span.innerHTML += result
    return result
}

function minus (num1, num2) {
    result = num1 - num2
    sam_span.innerHTML += result
    return result
}

function multiply (num1, num2) {
    result = num1 * num2
    sam_span.innerHTML += result
    return result
}

function dived (num1, num2) {
    result = num1 / num2
    sam_span.innerHTML += result
    return result
}