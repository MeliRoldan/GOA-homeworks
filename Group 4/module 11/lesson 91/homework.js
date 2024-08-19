let inputNum = document.getElementById('inputNum')
let result = document.getElementById('result')
let submit = document.getElementById('submit')

submit.addEventListener('click', test = () => {
    inputNum.value % 2 == 0 ? result.innerHTML = "This num is Even" : result.innerHTML = "This num is Odd"

    inputNum.value > 0 ? result.innerHTML += " and Positive" : result.innerHTML += " and Negative"
})