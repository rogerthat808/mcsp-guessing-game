function play() {
    let secretNumber = "5";
    let attempts = 1;
    let tries = []

    while(true) {
        const guess = prompt("Guess a number!");
        if (guess === null) {
            alert("Goodbye!")
            break;
        }
        if (guess == secretNumber) {
            alert("You win!")
            prompt(`It took you ${attempts} attempts! Your previous answers were ${tries}. The correct answer was ${secretNumber}.`)
            break;
        }
        if (guess > secretNumber) {
            alert("Lower! Try again!");
        }
        if (guess < secretNumber) {
            alert("Higher! Try again!");
        }
        tries.push(attempts)
        attempts += 1
    }
}

play()