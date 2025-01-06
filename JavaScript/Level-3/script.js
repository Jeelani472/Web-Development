console.log("Printing 1 to 5 Numbers");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("Printing all Odd Numbers from 1 to 15 ");
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}

console.log("Printing all Even Numbers from 2 to 10 ");
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

let n = prompt("Enter the number");
console.log(`Print Multiplication table for ${n}`);

for (let i = 1; i <= 10; i++) {
    console.log(n * i);
}

//Nested Loop

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < array.length; i++) {
    console.log(`row ${i}`)
    for (let j = 0; j < array[0].length; j++) {
        console.log(array[i][j]);
    }
}


//while loop

console.log("Printing 1 to 5 Numbers");

let i = 1;
while (i <= 5) {
    if (i == 3) {
        break;
    }
    console.log(i);
    i++;
}

// loop on Arrays
let fruits=["banana","orange","papaya","mango","grapes"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

//nested loop on Arrays

let heroes=[["ironman","spiderman","thor"],["superman","wander women","flash"]];
for(let i=0;i<heroes.length;i++){
    console.log(`List: ${i}`);
    for(let j=0;j<heroes[0].length;j++){
        console.log(heroes[i][j]);
    }
}
//for-of loop
console.log("for-of loop");
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}

