let section = document.getElementById('section');
let counter = document.getElementById('counter');

let num = 0;

function plus () {
  num++
  counter.innerHTML = num
  changeStyle()
}

function reset () {
  num = 0
  counter.innerHTML = num
  changeStyle()
}

function minus () {
  num--
  counter.innerHTML = num
  changeStyle()
}

function changeStyle () {
  if (num > 0) {
    counter.style.color = "green"
    section.style.borderColor = "green"
  } else if (num < 0) {
    counter.style.color = "red"
    section.style.borderColor = "red"
  } else {
    counter.style.color = "darkblue"
    section.style.borderColor = "darkblue"
  }
}

