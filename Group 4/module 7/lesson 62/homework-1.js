// მომხმარებელს შემოატანინეთ მონაცემები, კითხეთ სურს თუ არა პაროლის შეცვლა, კონფირმის საშუალებით შეამოწმეთ პასუხი, თუ სურს შეცვლა შეინახეთ ახალი პაროლი

let userName = prompt("Welcome! Enter your name:")
let surname = prompt("Enter your surname:")
let password = prompt("Enter your password:")

let account = {
  name: userName,
  surname: surname,
  password: password,
}

console.log(account)


let changePass = confirm("Do you want to change password:")

if (changePass) {
  let newPass = prompt("Enter new password:")
  account.password = newPass;
}

let profileName = document.getElementById('userName')
profileName.innerHTML = account.name
let profileSurName = document.getElementById('surname')
profileSurName.innerHTML = account.surname
let profilePass = document.getElementById('pass')
profilePass.innerHTML = account.password

console.log(account)