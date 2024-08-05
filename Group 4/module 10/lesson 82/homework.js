let resultP = document.getElementById('resultP')

let left1 = document.getElementsByClassName('left1')
let right1 = document.getElementsByClassName('right1')
let center1 = document.getElementById('center1')
let first = document.getElementsByClassName('first')
let last = document.getElementsByClassName('last')
let circle = document.getElementsByClassName('circle')



let btn = document.getElementById('btn')


btn.addEventListener ('click', function () {
    let number1 = Math.floor(Math.random() * 6) + 1
    let number2 = Math.floor(Math.random() * 6) + 1

    console.log(number1)
    console.log(number2)

    if (number1 > number2) {
        resultP.innerHTML = "Player 1 Wins"
    } else if (number1 < number2) {
        resultP.innerHTML = "Player 2 Wins"
    } else {
        resultP.innerHTML = "It's a TIE"
    }

    switch (number1) {
        case 1:
            for (let i = 0; i < left1.length; i++) {
                circle[i].style.visibility = "visible"
                circle[i].style.visibility = "hidden"
                center1.style.visibility = "visible"
            }
            break;
        case 2:
            for (let i = 0; i < left1.length; i++) {
                circle[i].style.visibility = "visible"
                left1[1].style.visibility = "hidden"
                right1[2].style.visibility = "hidden"
            }
            break;
        
    }
})