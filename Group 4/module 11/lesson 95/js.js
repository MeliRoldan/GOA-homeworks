class Users {
    #password
    #email
    constructor(name, surname, email, password) {
        this.name = name;
        this.surname = surname;
        this.#email = email;
        this.#password = password;
    }

    get greeting() {
        return `Hello, ${this.name}`;
    }

    get userEmail() {
        return this.#email;
    }

    get userPass() {
        return this.#password;
    }

    set changePass(newPass) {
        return this.#password = newPass;
    }
}

const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const changepass = document.getElementById('changepass');

const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

const greet = document.getElementById('greet');
const notification = document.getElementById('notification');
const accDiv = document.getElementById('accDiv');

const userArr = [];

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('REG Button clicked');
    userReg();
    console.log('Registration function called');
});

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('LOG Button clicked');
    userLog();
    console.log('Login function called');
});

function userReg() {
    const nameValue = firstName.value;
    const surnameValue = surname.value;
    const emailValue = email.value;
    const passValue = pass.value;

    firstName.value = ''
    surname.value = ''
    email.value = ''
    pass.value = ''
    greet.innerHTML = '';
    notification.innerHTML = '';

    for (let acc of userArr) {
        if (acc.userEmail === emailValue) {
            alert('Account already exists.');
            return;
        }
    }

    const user = new Users(nameValue, surnameValue, emailValue, passValue);
    userArr.push(user);
    console.log(userArr);
}

function userLog() {
    const emailValue = email.value;
    const passValue = pass.value;

    firstName.value = ''
    surname.value = ''
    email.value = ''
    pass.value = ''
    greet.innerHTML = '';
    notification.innerHTML = '';

    for (let acc of userArr) {
        if (acc.userEmail === emailValue) {
            if (acc.userPass === passValue) {
                accDiv.style.display = "flex"
                greet.innerHTML = acc.greeting;
                notification.innerHTML = 'You are logged in!';
                notification.style.color = 'green';

                changepass.addEventListener('click', (event) => {
                    event.preventDefault();
                    let askPass = prompt("Enter new password:");
                    console.log('Change PASS Button clicked');
                    acc.changePass = askPass;
                    console.log('Change PASS function called');
                    console.log(userArr);
                });
                return;
            } else {
                alert('Incorrect password.');
                return;
            }
        }
    }
    alert('Account does not exist.');
}