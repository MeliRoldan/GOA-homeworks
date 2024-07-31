const regName = document.getElementById('regName')
const regPass = document.getElementById('regPass')

const logName = document.getElementById('logName')
const logPass = document.getElementById('logPass')

const userName = document.getElementById('userName')
const userPass = document.getElementById('userPass')

let alert = document.getElementById('alert')
let logForm = document.getElementById('logForm')
let account = document.getElementById('account')

let users = []

function createUser(name, pass) {
    this.name = name
    this.pass = pass
}

function reg() {
    let name = regName.value
    let pass = regPass.value
    const user = new createUser(name, pass)
    users.push(user)
    console.log(users)

    regName.value = ""
    regPass.value = ""
}

function log() {
    let name = logName.value
    let pass = logPass.value

    if (name == "") {
        alert.innerHTML = "Enter name."
        alert.style.color = "red"
    } else if (pass == "") {
        alert.innerHTML = "Enter password."
        alert.style.color = "red"
    } else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name == name) {
                if(users[i].pass == pass) {
                    userName.innerHTML = users[i].name
                    userPass.innerHTML = users[i].pass
                    alert.innerHTML = "You are logged in."
                    alert.style.color = "green"
                    account.style.borderColor = "green"
                    account.style.boxShadow = "0px 0px 10px green"
                    logForm.style.boxShadow = ""
                } else {
                    alert.innerHTML = "The account name or password is incorrect."
                    alert.style.color = "red"
                    logForm.style.boxShadow = "0px 0px 10px red"
                }
    
            }
        }
        logName.value = ""
        logPass.value = ""
    }
}