let userName = document.getElementById('inputName')
let surname = document.getElementById('inputSurname')
let password = document.getElementById('inputPass')

let profileName = document.getElementById('userName')
let profileSurName = document.getElementById('surname')
let profilePass = document.getElementById('pass')

let btn = document.getElementById('btn')

let account = {
  name: "",
  surname: "",
  password: "",
}

isSubmit = false;

function reg() {
  if (isSubmit = !isSubmit) {
    if (userName.value === "" || surname.value === "" || password.value === "") {
      alert("All fields are required.");
      return;
    }

    account.name = userName.value;
    account.surname = surname.value;
    account.password = password.value;
    
    profileName.innerHTML = account.name
    profileSurName.innerHTML = account.surname
    profilePass.innerHTML = account.password

    userName.value = ""
    surname.value = ""
    password.value = ""

    btn.innerHTML = "Reset"
    isSubmit = true;
  } else {
    profileName.innerHTML = '';
    profileSurName.innerHTML = '';
    profilePass.innerHTML = '';

    btn.innerHTML = 'Submit';
    isSubmitted = false;
  }
}

function changePass() {
  let changePass = confirm("Do you want to change password:")
  if (changePass) {
    let oldPass = prompt("Enter old password:")
    if (oldPass == account.password) {
      let newPass = prompt("Enter new password:")
      account.password = newPass;
      profilePass.innerHTML = account.password;
    } else {
      alert("You entered wrong password!")
    }
  }
}