let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let highscore=0;
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log('game is started');
        started = true;
        levelUp();
    }
})

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random button flash
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);
}


function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        highscore=Math.max(level,highscore);
        h2.innerHTML = `Game Over!Your Score was <b>${level}</b> and your highest score was ${highscore}<br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250)
        resetgame();
    }
}

function resetgame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
function btnpress() {
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute('id');
    console.log(usercolor);
    userSeq.push(usercolor);
    checkAns(userSeq.length - 1);
}

let allbtn = document.querySelectorAll('.btnbox');

for (btn of allbtn) {
    btn.addEventListener('click', btnpress);
}
