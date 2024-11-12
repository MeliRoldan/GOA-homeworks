const saveBtn = document.getElementById('saveBtn');
const displayName = document.getElementById('displayName');
const displayPassword = document.getElementById('displayPassword');

saveBtn.addEventListener('click', function() {
    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('username', name);
    localStorage.setItem('password', password);

    const savedName = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');
    
displayName.textContent = `Username: ${savedName}`;
displayPassword.textContent = `Password: ${savedPassword}`;
});

const savedName = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');
    
displayName.textContent = `Username: ${savedName}`;
displayPassword.textContent = `Password: ${savedPassword}`;