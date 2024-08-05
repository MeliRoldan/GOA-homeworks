let btn = document.getElementsByClassName('btn')
let operators = document.getElementsByClassName('operators')
let sum = document.getElementById('sum')
let reset = document.getElementById('reset')

let start = document.getElementById('start')
let operation = document.getElementById('operation')
let sum_span = document.getElementById('sum_span')

let string = ""
let arr = []
let end_result

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        start.innerHTML = ""
        operation.innerHTML += btn[i].innerHTML
        string += btn[i].innerHTML
        console.log("Saved String - ", string)
    })
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        start.innerHTML = ""
        operation.innerHTML += operators[i].innerHTML
        arr.push(string)
        arr.push(operators[i].innerHTML)
        string = ""
        console.log("Arr with num & operator - ", arr)
        console.log("Empted String - ", string)
    })
}

sum.addEventListener('click', function () {
    arr.push(string)
    console.log("Arr with final num", arr)
    string = ""
    console.log("Empted String - ", string)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "*") {
            console.log("**", arr[i])
            arr[i - 1] = Number(arr[i - 1]) * Number(arr[i + 1])
            console.log("Number ***", arr[i - 1])
            arr.splice(arr.indexOf(arr[i]), 2)
            console.log("Final Arr", arr)
            end_result = arr
            i--
            console.log("Es", i--)
        } else if (arr[i] == "/") {
            console.log("//", arr[i])
            arr[i - 1] = Number(arr[i - 1]) / Number(arr[i + 1])
            console.log("Number ///", arr[i - 1])
            arr.splice(arr.indexOf(arr[i]), 2)
            console.log("Final Arr", arr)
            end_result = arr
            i--
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+") {
            console.log("++", arr[i])
            arr[i - 1] = Number(arr[i - 1]) + Number(arr[i + 1])
            console.log("Number +++", arr[i - 1])
            arr.splice(arr.indexOf(arr[i]), 2)
            console.log("Final Arr", arr)
            end_result = arr
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "-") {
            console.log("--", arr[i])
            arr[i - 1] = Number(arr[i - 1]) - Number(arr[i + 1])
            console.log("Number ---", arr[i - 1])
            arr.splice(arr.indexOf(arr[i]), 2)
            console.log("Final Arr", arr)
            end_result = arr
        }
    }

    sum_span.innerHTML += end_result
    arr = []
})

reset.addEventListener('click', function () {
    string = ""
    arr = []
    end_result = 0
    operation.innerHTML = ''
    sum_span.innerHTML = ''
})