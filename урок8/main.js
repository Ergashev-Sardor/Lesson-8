// document.querySelector('') - делает подключение к указаному классу или тегу
// innerHTML - возвращает содержимое внутри указаного элемента
// addEventListener('событие') - добавляет событие указаному элементу
// style - добавляет указанное css свойство элементу
// classList.add('') - добавляет указанный класс элементу 
// classList.remove('') - удаляет указанный класс у  элемента 

// let title = document.querySelector('h1')

// title.addEventListener('click',() => {
//     if(title.innerHTML == 'html') {
//         title.innerHTML = 'css'
//         title.style.background = 'red'
//         title.classList.add('active')
//     }else {
//         title.innerHTML = 'html'
//         title.style.background = 'purple'
//         title.classList.remove('active')
//     }
// })


// let items = document.querySelectorAll('.item')

// items.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.style.background = `rgb(${color(0,255)}, ${color(0,255)}, ${color(0,255)})`
//     })
// })

// function color(min,max) {
//     return Math.floor( Math.random() * ( max + 1 - min ) + min)
// }

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
        square.style.backgroundColor = 'black'; // Изменяет фон каждого .square на красный
    });
});

red.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'red'; // Изменяет фон каждого .square на красный
    });
});

yellow.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'yellow'; // Изменяет фон каждого .square на красный
    });
});

green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';  // Меняем фон всего сайта 
    container.style.backgroundColor = 'green'
    squares.forEach(square => {
        square.style.backgroundColor = 'green';  // И фон всех квадратов
    });
});

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';  // Меняем фон всего сайта 
    container.style.backgroundColor = 'blue'
    squares.forEach(square => {
        square.style.backgroundColor = 'blue';  // И фон всех квадратов
    });
});

purple.addEventListener('click', () => {
    document.body.style.backgroundColor = 'purple';  // Меняем фон всего сайта 
    container.style.backgroundColor = 'purple'
    squares.forEach(square => {
        square.style.backgroundColor = 'purple';  // И фон всех квадратов
    });
});

reset.addEventListener('click', () => {
    document.body.style.backgroundColor = '';  // Сброс фона сайта
    container.style.backgroundColor = '';  // Сброс фона контейнера
    squares.forEach(square => {
        square.style.backgroundColor = '';  // Сброс фона квадратов
    });
});

reset2.addEventListener('click', () => {
    document.body.style.backgroundColor = '';  // Сброс фона сайта
    container.style.backgroundColor = '';  // Сброс фона контейнера
    squares.forEach(square => {
        square.style.backgroundColor = '';  // Сброс фона квадратов
    });
});
