let input = document.getElementById('input');
let addBtn = document.getElementById('addbtn');
let list = document.getElementById('listUl'); 

let inptValue = '';

input.addEventListener('input', function(e) {
    inptValue = e.target.value;
})

function createTask (id, title, completed) {
    let newdiv = document.createElement('div');
    let savedLi = document.createElement('li');
    let savedLiStatus = document.createElement('span');

    list.appendChild(newdiv);
    newdiv.appendChild(savedLi);
    newdiv.appendChild(savedLiStatus);

    let savedLiName = document.createTextNode(title);
    savedLi.appendChild(savedLiName);
    savedLi.id = id;

    let savedLiStatusText = document.createTextNode(completed);
    savedLiStatus.appendChild(savedLiStatusText);

    if(completed === false){
        savedLiStatus.style.color = 'red';
    } else {
        savedLiStatus.style.color = 'green';
    }
}

function getData() {
    let request = new XMLHttpRequest();

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();

    request.onreadystatechange = function() {
        if(this.readyState === 4) {
            if (this.status === 200) {
                let response = JSON.parse(this.responseText);
                response.map((item) => {
                    createTask(item.id, item.title, item.completed);
                });
            }
        }
    }
}

getData();

function createData() {
    let request = new XMLHttpRequest();

    request.open('POST', 'https://jsonplaceholder.typicode.com/todos');

    let obj = {
        "userId": 1,
        "id": 201,
        "title": inptValue,
        "completed": true
    }

    request.send(JSON.stringify(obj));

    request.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 201) {
                createTask(obj.id, obj.title, obj.completed);
            }
        }
    }

    input.value = '';
}

addBtn.addEventListener('click', createData);