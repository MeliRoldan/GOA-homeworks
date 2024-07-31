const register = document.getElementById('register')
const login = document.getElementById('login')
const header = document.getElementById('header')

const regName = document.getElementById('regName')
const regSurname = document.getElementById('regSurname')
const regPass = document.getElementById('regPass')

const logName = document.getElementById('logName')
const logPass = document.getElementById('logPass')

const userName = document.getElementById('userName')
const userSurname = document.getElementById('userSurname')


let regAlert = document.getElementById('regAlert')
let logAlert = document.getElementById('logAlert')

let users = []

function createUser(name, surname, pass) {
    this.name = name
    this.surname = surname
    this.pass = pass
}

function reg() {
    let name = regName.value
    let surname = regSurname.value
    let pass = regPass.value

    if (name == "") {
        regAlert.innerHTML = "Enter name."
    } else if (surname == "") {
        regAlert.innerHTML = "Enter surname."
    } else if (pass == "") {
        regAlert.innerHTML = "Enter password."
    } else {
        const user = new createUser(name, surname, pass)
        users.push(user)
        console.log(users)

        regName.value = ""
        regSurname.value = ""
        regPass.value = ""

        register.style.display = "none"
        login.style.display = "flex"
    }
}

function log() {
    let name = logName.value
    let pass = logPass.value

    let isName
    let usersIndex

    if (name == "") {
        logAlert.innerHTML = "Enter name."
    } else if (pass == "") {
        logAlert.innerHTML = "Enter password."
    } else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name == name) {
                isName = true
                usersIndex = users.indexOf(users[i])
            }
        }

        if (isName == true) {
            if(users[usersIndex].pass == pass) {
                userName.innerHTML = users[usersIndex].name
                userSurname.innerHTML = users[usersIndex].surname
                logName.value = ""
                logPass.value = ""
                logAlert.innerHTML = ""
                login.style.display = "none"
                header.style.display = "flex"
                // console.log(userSurname)
            } 
        } else {
            logName.value = ""
            logPass.value = ""
            logAlert.innerHTML = "The account name or password is incorrect."
        }
    }
}

function logback() {
    register.style.display = "none"
    login.style.display = "flex"
}

function regback() {
    register.style.display = "flex"
    login.style.display = "none"
}

function exit() {
    header.style.display = "none"
    register.style.display = "flex"
}