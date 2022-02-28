let doc = document;

let input = doc.querySelector('#input'),
    btn = doc.querySelector('#btn'),
    result = doc.querySelector('#result');

btn.addEventListener('click', addFunction);
 
function addFunction() {
if (input.value === '') return
createElements(input.value);
input.value = '';
}
 
function createElements (value) {
    let li = doc.createElement('li');
    li.className = 'li';
    li.textContent = value;

    result.appendChild(li);

    let btn = doc.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'delete';

    li.appendChild(btn);

    btn.addEventListener('click', (element) => {
        result.removeChild(li);
    })
    li.addEventListener('click', (element) => {
        li.classList.toggle('active');
    })
}
cl = doc.querySelector('.clear');
cl.addEventListener('click', clear);

function clear() {
    result.removeChild('li');
}

