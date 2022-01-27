const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".button");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#reset");

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        document.getElementById('current').textContent += number.textContent;  
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('current').textContent += ' ' + button.textContent + ' ';  
    })
})

equal.addEventListener('click', () => {
    document.getElementById('history').textContent += ' ' + document.getElementById('current').textContent + ' ';
    document.getElementById('current').textContent = eval(document.getElementById('current').textContent);
})

clear.addEventListener('click', () => {
    document.getElementById('history').textContent = '';
    document.getElementById('current').textContent = '';
})