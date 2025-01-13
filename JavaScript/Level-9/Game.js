
//Charater Moves Game

let input=document.querySelector('input');
input.addEventListener("keydown",function(e){
    if(e.code=='ArrowUp'){
        console.log("Character moves Forward");
    }
    else if(e.code=="Arrowdown"){
        console.log("Character moves Backword");
    }
    else if(e.code=="ArrowLeft"){
        console.log("Character moves Left");
    }
    else if(e.code=="ArrowRight"){
        console.log("Character moves Right");
    }
})
