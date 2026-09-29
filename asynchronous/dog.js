const frame = document.getElementById('frame');
const placeholder = document.getElementById('placeholder');
const dogImage = document.getElementById('dogImage');
const breed = document.getElementById('breed');
const message = document.getElementById('message');
const btn = document.getElementById('btn');

// "async" lets us use "await" inside this function
async function getDog() {
    btn.disabled = true;
    btn.innerText = 'Fetching...';
    frame.classList.add('animate-pulse');
    dogImage.classList.add('opacity-0');

    try {
        // Ask the API for a random dog and wait for the reply
        const response = await fetch('https://dog.ceo/api/breeds/image/random');

        // Turn the reply into a JavaScript object, and wait for that too
        const data = await response.json();

        // The link looks like .../breeds/husky/photo.jpg, so part 4 is the breed
        breed.innerText = data.message.split('/')[4].replace('-', ' ');
        message.innerText = 'Press the button for another one.';

        // Start loading the picture
        dogImage.src = data.message;
    } catch (error) {
        // Runs if something goes wrong, like no internet
        frame.classList.remove('animate-pulse');
        breed.innerText = 'No dog this time';
        message.innerText = 'Could not reach the server. Check your internet and try again.';
    }

    btn.disabled = false;
    btn.innerText = 'Get another dog';
}

// This is a callback too: it runs when the picture has finished downloading
dogImage.addEventListener('load', function () {
    placeholder.classList.add('hidden');
    frame.classList.remove('animate-pulse');
    dogImage.classList.remove('opacity-0');
});

btn.addEventListener('click', getDog);




//The .split('/') method cuts the string into pieces wherever it finds a forward slash 
// (/). It turns the string into an array of smaller pieces:
