let hexCode = document.getElementById('hexCode')
let main = document.getElementsByTagName('main')

function changeColor() {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    let code = '#'

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hex.length)
        code += hex[index]
    }

    hexCode.innerHTML = code
    hexCode.style.color = code

    main[0].style.backgroundColor = code
   
}

