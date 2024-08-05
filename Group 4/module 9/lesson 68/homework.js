let input_name = document.getElementById('name');
let input_age = document.getElementById('age');

let acc_name = document.getElementById('acc_name');
let acc_age = document.getElementById('acc_age');

let future_age = document.getElementById('future_age');

let user;

function person (name, age) { 
    this.name = name;
    this.age = age;

    this.future_age = function (years) {
        return this.age + years;
    };
}

function reg () {
    let name = input_name.value;
    let age = parseInt(input_age.value);

    user = new person (name, age);

    acc_name.innerHTML = user.name;
    acc_age.innerHTML = user.age;
}

function travel () {
    let years = parseInt(prompt("Enter travel years:"));
    let travel_years = user.future_age(years);
    console.log(travel_years)
    future_age.innerHTML = `You will be ${travel_years} in ${years} years`
}