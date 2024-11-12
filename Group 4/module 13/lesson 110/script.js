function ApiRequest() {
    return new Promise((resolve, reject) => {
        const isSuccessful = Math.random() > 0.3;
        setTimeout(() => {
            if (isSuccessful) {
                resolve();
            } else {
                reject('Failed to fetch tasks.');
            }
        }, 2000);
    });
}

document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (task) {
        document.getElementById('loadingMessage').classList.remove('hidden');
        document.getElementById('errorMessage').classList.add('hidden');

        ApiRequest()
            .then(() => {
                const taskList = document.getElementById('taskList');
                const listItem = document.createElement('li');
                listItem.textContent = task;
                taskList.appendChild(listItem);
                taskInput.value = '';
            })
            .catch((error) => {
                document.getElementById('errorMessage').textContent = error;
                document.getElementById('errorMessage').classList.remove('hidden');
            })
            .finally(() => {
                document.getElementById('loadingMessage').classList.add('hidden');
            });
    }
});
