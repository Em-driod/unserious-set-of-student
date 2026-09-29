const card = document.getElementById('card');
const photo = document.getElementById('photo');
const nameText = document.getElementById('name');
const message = document.getElementById('message');
const email = document.getElementById('email');
const address = document.getElementById('address');
const btn = document.getElementById('btn');

async function getPerson() {
    btn.disabled = true;
    btn.innerText = 'Fetching...';
    card.classList.add('animate-pulse');
    photo.classList.add('opacity-0');

    try {
        // Ask the API for one random person and wait for the reply
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        // The API sends a list called "results", and we only asked for one person
        const person = data.results[0];

        nameText.innerText = person.name.first + ' ' + person.name.last;
        message.innerText = person.location.country;
        email.innerText = person.email;

        const street = person.location.street.number + ' ' + person.location.street.name;
        address.innerText = street + ', ' + person.location.city + ', ' + person.location.state;

        photo.src = person.picture.large;
    } catch (error) {
        // Runs if something goes wrong, like no internet
        card.classList.remove('animate-pulse');
        nameText.innerText = 'No one this time';
        message.innerText = 'Could not reach the server. Check your internet and try again.';
    }

    btn.disabled = false;
    btn.innerText = 'Get another person';
}

// Callback: runs when the photo has finished downloading
photo.addEventListener('load', function () {
    card.classList.remove('animate-pulse');
    photo.classList.remove('opacity-0');
});

btn.addEventListener('click', getPerson);
