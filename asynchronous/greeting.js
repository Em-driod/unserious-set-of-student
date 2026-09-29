// The callback: it only knows how to show a message on the page
function showMessage(text) {
    document.getElementById('message').innerText = text;
}

// Builds the greeting, then hands it to the callback
function greet(name, callback) {
    const text = 'Hello, ' + name + '! Welcome.';
    callback(text);
}

document.getElementById('btn').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value;

    greet(name, showMessage);
});
