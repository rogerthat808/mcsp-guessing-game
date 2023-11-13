function play() {
    let secretNumber = 5;

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
    }
}

play()