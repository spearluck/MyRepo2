// Generate a random secret number between 1 and 20
var secret = Math.floor(Math.random() * 20) + 1;

// Ask for the first guess and convert it in ONE line
var guess = parseInt(prompt("Please guess the secret number (1-20):"));

while (guess !== secret) {

    if (guess < secret) {
        alert("Incorrect, too low");
    }
    else if (guess > secret) {
        alert("Incorrect, too high");
    }
    else {
        alert("Sorry, incorrect guess!");
    }

    // Ask again until correct
    guess = parseInt(prompt("Please guess the secret number (1-20):"));
}

// When correct
alert("Correct Guess!");