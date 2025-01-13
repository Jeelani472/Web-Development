//document
console.log(document);

//getElementById()
let img = document.getElementById("mainImg");
console.log(img);
// img.src="assets/creation_2.jpeg";
console.log(img);

//getElementByclassName()

let smallImages = document.getElementsByClassName("oldImg");
console.log(smallImages);

for (let i = 0; i < smallImages.length; i++) {
    console.log(smallImages[i].src);
}

//getElementByTagName()

let para = document.getElementsByTagName('p');
console.log(para);

//QuerySelector()

console.dir(document.querySelector("#description"));

console.dir(document.querySelector("div a"));

//QuerySelectorAll()

console.dir(document.querySelectorAll("p"));


// Setting Content by Object

let content = document.querySelector("p");
console.log(content.innerHTML);
console.log(content.innerText);
console.log(content.textContent);

// content.innerHTML='<b>This is a bold tag </b>';
// console.log(content.innerHTML);

// getter and setter
let images = document.querySelector("img");
console.log(images.getAttribute("id"));
images.setAttribute('id', 'spidermanImg');
console.log(images.getAttribute('id'));

//Manipulating Style

img.style.width = "50%";

let heading = document.querySelector('h1');
heading.style.backgroundColor = "yellow";

//styling property

heading.classList.add(".heading");

console.log(heading.getAttribute('class'));

heading.classList.remove(".heading");

console.log(heading.classList.contains(".heading"));

console.log(heading.classList.toggle(".heading"));

//Navigations

let h4 = document.querySelector('h4');
console.log(h4.parentElement);

let box = document.querySelector('.box');
console.log(box.children);

let ul = document.querySelector('ul');
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

//Adding element on document

let newpara = document.createElement('p');

let body = document.querySelector('body');
body.appendChild(newpara);
newpara.innerText = "He first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.";
console.log(newpara);

newpara.append("This is a new text");

newpara.append(btn);

body.prepend(newpara);

// removing element

body.remove(newpara);

let p=document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn);
