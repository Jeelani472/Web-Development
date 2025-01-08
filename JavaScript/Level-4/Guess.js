//Guessing Game:User Enters a max number and then try to guess a random generated number blw 1 to max 

const max = prompt("Enter the maximum number");
let random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");

while (true) {
    if (guess == "quit") {
        console.log("User Quit");
        break;
    }
    else if (guess == random) {
        console.log("You are right! Congrats! random number is", random);
        break;
    }
    else if (guess > random) {
        guess = prompt("You guess was too large plz try again");
    }
    else {
        guess = prompt("You guess was too small plz try again");

    }
}
