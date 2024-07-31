let square = document.getElementById('change')

function move() {
    let randm1 = Math.random() * 100;
    let randm2 = Math.random() * 500;
    square.style.top = randm1 + 'px';
    square.style.left = randm2 + 'px';
}

