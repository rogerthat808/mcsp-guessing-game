function play() {
    let secretNumber = "5";
    let attempts = 1;
    let tries = []

    const name = prompt("What is your name?")

    while(true) {
        const guess = prompt(`${name}, guess a number?`);
        if (guess === null) {
            alert("Goodbye!")
            break;
        }
        if (guess == secretNumber) {
            alert(`Congrats ${name}, you won!`)
            alert(`${name}, It took you ${attempts} attempts! Your previous answers were ${tries}. The correct answer was ${secretNumber}.`)
            break;
        }
        if (guess > secretNumber) {
            alert(`${name}, guess lower! Try again.`);
        }
        if (guess < secretNumber) {
            alert(`${name}, guess higher! Try again.`);
        }
        tries.push(guess)
        attempts += 1
    }
}

play()