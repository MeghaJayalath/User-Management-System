function clearTextInputs() {
    // Get all text inputs by their tag name
    var numberInputs = document.querySelectorAll('input[type="number"]');
    var textInputs = document.querySelectorAll('input[type="text"]');

    // Loop through each number input and set its value to an empty string
    numberInputs.forEach(function (numberInput) {
        numberInput.value = '';
    });
    // Loop through each text input and set its value to an empty string
    textInputs.forEach(function (textInput) {
        textInput.value = '';
    });
}

function getUser() {
    const userId = document.getElementById('userId').value;
    fetch(`/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById('output');
            output.innerHTML = `ID: ${data.id} || Username: ${data.username}`;
        })
        .catch(error => console.error('Error:', error));
    clearTextInputs();
}

function addUser() {
    const username = document.getElementById('username').value;
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    })
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById('output');
            output.innerHTML = `ID: ${data.id} || Username: ${data.username}`;
        })
        .catch(error => console.error('Error:', error));
    clearTextInputs();
}

function editUser() {
    const userId = document.getElementById('userId').value;
    const username = document.getElementById('username').value;
    fetch(`/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    })
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById('output');
            output.innerHTML = `ID: ${data.id} || Username: ${data.username}`;
        })
        .catch(error => console.error('Error:', error));
    clearTextInputs();
}

function deleteUser() {
    const userId = document.getElementById('userId').value;
    fetch(`/users/${userId}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById('output');
            output.innerHTML = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));
    clearTextInputs();
}
