let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
btn.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = 'delete';
    delbtn.classList.add('delete');
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value = '';
})

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
    let delItem=event.target.parentElement;
    delItem.remove();
    console.log('deleted');
    }
});
