let black = document.querySelector('.button-black')
let red = document.querySelector('.button-red')
let yellow = document.querySelector('.button-yellow')
let green = document.querySelector('.button-green')
let blue = document.querySelector('.button-blue')
let purple = document.querySelector('.button-purple')
let reset = document.querySelector('.button-reset')
let reset2 = document.querySelector('.button-reset2')
let squares = document.querySelectorAll('.square')
let body = document.querySelector('body')
let container = document.querySelector('.container')

black.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'black';
    });
});

red.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'red';
    });
});

yellow.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'yellow';
    });
});

green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    container.style.backgroundColor = 'green'
    squares.forEach(square => {
        square.style.backgroundColor = 'green';
    });
});

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
    container.style.backgroundColor = 'blue'
    squares.forEach(square => {
        square.style.backgroundColor = 'blue';
    });
});

purple.addEventListener('click', () => {
    document.body.style.backgroundColor = 'purple';
    container.style.backgroundColor = 'purple'
    squares.forEach(square => {
        square.style.backgroundColor = 'purple';
    });
});

reset.addEventListener('click', () => {
    document.body.style.backgroundColor = '';
    container.style.backgroundColor = '';
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
});

reset2.addEventListener('click', () => {
    document.body.style.backgroundColor = '';
    container.style.backgroundColor = '';
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
});
