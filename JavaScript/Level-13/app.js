async function greet() {
    return 'hello';
}
greet()
.then((res)=>{
    console.log('promise was resolved');
})
.catch((err)=>{
    console.log('promise was rejected');
})

let h1=document.querySelector('h1');

 function changecolor(color,delay){
 return new Promise((resolve, reject) => {
    setTimeout(()=>{
        h1.style.color=color;
        resolve(`color changed${color}`)
    } ,delay)
})
 }

 async function demo() {
    try{
        await  changecolor('red',1000);
        await  changecolor('green',1000);
        await  changecolor('orange',1000);
        await  changecolor('yellow',1000);
    }
 catch(e){
    console.log('error',e);
 }
 }
demo();

let jsonres=`{
    "fact": "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).",
    "length": 83
}`

console.log(jsonres);


//convert json to js object
let validres=JSON.parse(jsonres);
console.log(validres.fact);

let student={
    name:'Jeelan',
    marks:98
}

//convert js object to json
let json2=JSON.stringify(student);
console.log(json2);
