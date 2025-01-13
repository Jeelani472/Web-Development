let div = document.querySelector('div');
div.addEventListener('scroll', function () {
    console.log("mouse is out");
})

// let input = document.querySelector('input');
// input.addEventListener('keypress', function () {
//     console.log("key is pressed");
// })

//Qs2. Create a button on the page using JavaScript. 
// Add an event listener to the button that changes the button’s color to green when it is clicked. 

let btn = document.createElement('button');
document.querySelector('body').append(btn);
btn.innerText = "Button";
btn.addEventListener('click', function () {
    btn.style.color = 'green';
})


// Qs3. Create an input element on the page with a placeholder "enter your name"
// and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user’s name so
// it should only input letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside the heading.
//  [Please note that no other character apart from the allowed characters should be visible in the heading]


let h2=document.createElement('h2');
document.querySelector('body').append(h2);

let inp=document.createElement('input');
document.querySelector("body").append(inp);

inp.setAttribute('placeholder','enter your name');

inp.addEventListener('input',function(){
let text=this.value;
    h2.innerText=text.replace(/[^a-zA-Z\s]/g, '');;
})
