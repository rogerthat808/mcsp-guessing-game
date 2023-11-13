function play() {
    let secretNumber = "5";
    // let secretNumber = 5;

    while(true) {
        const guess = prompt("Guess a number!");
        if (guess === null) {
            alert("Goodbye!")
            break;
        }
        if (guess == secretNumber) {
            alert("You win!")
            break;
        }
        if (guess > secretNumber) {
            alert("Guess lower!");
        }
        if (guess < secretNumber) {
            alert("Guess higher!");
        }
    }
}

play()