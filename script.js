const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3;

function checkGuess() {
    const guess = +document.getElementById('text').value;
    attempts++;

    const messageElement = document.getElementById('message');
    const remainingAttempts = maxAttempts - attempts;

    if (guess === secretNumber) {
        messageElement.textContent = 'Congrats! You guessed the number ' + secretNumber + ' in ' + attempts + ' attempts 😊 ';
        document.body.style.backgroundColor = 'green';
        playSound("correct")
        button.disabled = true;
        text.disabled = true;
    } else if (attempts >= maxAttempts) {
        messageElement.textContent = "Game over. The guessed number was " + secretNumber + '.😞';
        document.body.style.backgroundColor = '#a10000';
        playSound("wrong")
        button.disabled = true;
        text.disabled = true;
    } else if (guess < secretNumber) {
        messageElement.textContent = 'Try a bigger number. You have ' + remainingAttempts +' attempts left.';
        document.body.style.backgroundColor = '#a10000';
        playSound("wrong")
    } else {
        messageElement.textContent = 'Try a smaller number. You have ' + remainingAttempts +' attempts left.';
        document.body.style.backgroundColor = '#a10000';
        playSound("wrong")
    }
}

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.play();
}