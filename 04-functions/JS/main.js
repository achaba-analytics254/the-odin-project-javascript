// Functions

function favoriteAnimal(animal) {
    return animal + ' is my favorite animal'
}
console.log(favoriteAnimal('Dog'));

function sum(param1, param2){
    return param1 + param2
}
console.log(sum(1, 2));

// MDN documentation learning Javascript source code
// https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html

const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number){
    return Math.floor(Math.random() * number);
}

function draw() {
    ctx.clearRect(0, 0, 'WIDTH', 'HEIGHT');
    for (let i = 0; i < 100; i++){
        ctx.beginPath();
        ctx.fillStyle = 'rgb(255 0 0 / 50%)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}
btn.addEventListener('click', draw);

// invoking a function

/* function myFunction() {
    alert('Hello Achaba');
}
myFunction();*/ // calls the function once

// Functions Parameters
// Some functions require parameters to be specified when you are invoking them other like browser built-in Math.random(); functions doesnt require any parameters.
const myNumber = Math.random();
console.log(myNumber); // returns between 0 and 1.

// browser's built-in string replace() requires parameters

const myString = 'I love coding in javascript';
const replacedString = myString.replace('javascript', 'python');
console.log(replacedString);



