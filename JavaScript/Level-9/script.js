//onclick
let btn=document.querySelector('button');
// btn.onclick=sayHello;
function sayHello(){
    console.log("button was clicked");
}

// btn.onmouseenter=sayName;
function sayName(){
    console.log("Apna College");
}

//Event Listeners


btn.addEventListener("click",sayHello);
btn.addEventListener("click",sayName);


//Event listeners for elements
let para=document.querySelector('p');
// para.addEventListener('click',function(){
//     para.style.color="blue";
// })


//'this' in Event Listeners

// btn.addEventListener('click',function(){
//     console.log(this);
//     this.style.backgroundColor="purple";
// })

let h1=document.querySelector('h1');
function changeColor(){
    this.style.backgroundColor="Yellow";
}

btn.addEventListener('click',changeColor);
para.addEventListener('click',changeColor);
h1.addEventListener('click',changeColor);


//keyboard Events

let input=document.querySelector('input');
// input.addEventListener('keydown',function(e){
//     console.log(e);
//     console.log("key was pressed");
// })

input.addEventListener('keyup',function(e){
    console.log(e);
    console.log("key was pressed");
    console.log(e.code);
    console.log(e.key);
})


//form events

let form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(form);
let user=this.elements[0];
let pass=this.elements[1];
console.log(user.value);
console.log(pass.value);
})

// change event

let user=document.querySelector('#user');
// user.addEventListener('change',function(){
//     console.log('input changed');
//     console.log('final value=',this.value);
// })

user.addEventListener('input',function(){
    console.log('input changed');
    console.log('final value=',this.value);
})







