function play() {
    let secretNumber = "5";
    let attempts = 1;
    let tries = []
    let name;
    
    // Below is a function checking to ensure a name has been inputted.
    function nameCheck() {
    name = prompt("What is your name?");
    }
    
    // Below is a function asking the user if he'd like to play again.
    function playAgain() {
        let answer = prompt("want to play again? Y / N")
        if (answer == "Y" || answer == "y") {
            play()
        }
        if (answer == "N" || answer == "n") {
            alert("Goodbye!")
        }
    }

    // Start of the loop
    while(true) {
        while (name == undefined || name == null | name == "") {
            nameCheck()
        }
        const guess = prompt(`${name}, guess a number?`);
        debugger;
        if (guess === null || guess === "") {
            alert("Goodbye!")
            break;
        }
        if (guess == secretNumber && attempts == 1) {
            alert(`Congrats ${name}, you won!`);
            alert(`${name}, It took you 1 attempt! Your answer was ${secretNumber}.`)
            playAgain()
            break;
        }
        if (guess == secretNumber) {
            alert(`Congrats ${name}, you won!`)
            alert(`${name}, It took you ${attempts} attempts! Your previous answers were ${tries}. The correct answer was ${secretNumber}.`)
            playAgain()
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