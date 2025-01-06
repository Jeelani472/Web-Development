let favorite="avator";
let guess=prompt("Guess my favorite movie");
while(favorite!=guess){
    if(guess=="quit"){
        console.log("You Quit");
        break;
    }
    guess=prompt("wrong guess plz try again");
}
if(guess==favorite){
    console.log("Congratuations You Guess the right movie");
}

