let inputName = document.getElementById('inputName')
let inputPass = document.getElementById('inputPass')
let inputPhone = document.getElementById('inputPhone')

let nameP = document.getElementById('nameP')
let passP = document.getElementById('passP')
let phoneP = document.getElementById('phoneP')

let submit = document.getElementById('submit')

let changeName = document.getElementById('changeName')
let changePass = document.getElementById('changePass')
let changePhone = document.getElementById('changePhone')

let regUser = {
    userName: '',
    userPass: '',
    phone: '',
    changeThisName: function (newName) {
        this.userName = newName
        nameP.innerHTML = this.userName
    },
    changeThisPass: function (newPass) {
        this.userPass = newPass
        passP.innerHTML = this.userPass
    },
    changeThisPhone: function (newPhone) {
        this.phone = newPhone
        phoneP.innerHTML = this.phone
    }
}

submit.addEventListener('click', () => {
    regUser.changeThisName(inputName.value)
    regUser.changeThisPass(inputPass.value) 
    regUser.changeThisPhone(inputPhone.value) 

    console.log(regUser)
})

changeName.addEventListener('click', () => {
    let newName = prompt("Enter new name:")
    regUser.changeThisName(newName) 
})

changePass.addEventListener('click', () => {
    let newPass = prompt("Enter new pass:")
    regUser.changeThisPass(newPass)
})

changePhone.addEventListener('click', () => {
    let newPhone = prompt("Enter new phone:")
    regUser.changeThisPhone(newPhone) 
})