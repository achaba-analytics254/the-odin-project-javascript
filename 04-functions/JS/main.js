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
// Some functions require parameters to be specified when 
// you are invoking them other like browser built-in Math.random(); functions doesnt require any parameters.
const myNumber = Math.random();
console.log(myNumber); // returns between 0 and 1.

// browser's built-in string replace() requires parameters

const myString = 'I love coding in javascript';
const replacedString = myString.replace('javascript', 'python');
console.log(replacedString);

// operational parameters
// sometimes parameters are optional: example the array join() functions parameter.

const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);

const madeAnotherString = myArray.join();
console.log(madeAnotherString); // If no parameter is included to 
// specify a joining/delimiting character, a comma is used by default.


// Anonymous functions and arrow functions:
(function (){ // function that doesn't have a name is called anonymous function
    alert('Hi');
});


// logkey() function can pass an anonymous function into addEventListener.
/* textBox.addEventListener('keydown', function (event) {
    console.log(`You pressed '${event.key}'.`);
}); */

// Arrow function
// There is an alternative form you can use called arrow functions which omits the
// parentheses around the parameter:
/* textBox.addEventListener('keyword', event => {
    console.log(`You pressed '${event.key}'.`);
 }); */


// The map() method of Array instances creates a new array 
// populated with the results of calling a 
// provided function on every element in the calling array.

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled);

// the above example is similar to:
/*
    function doubleItem(item) {
        return 1tem * 2;
    }
*/

// Playing with scope: see function-scope.html

// Return Values: see function-library.html

// functions-basics

/*function greetMessage(){
    alert('Hello you!');
}*/

// Local variables

/*function showMessage(){
    let message = 'I love Javascript';
    alert(message);
}
showMessage() */
// alert(message) // Error, the variable is local to the function

// Outer variables

/*const userName = 'Alice';
function messageShow(){
    let message = 'Hello ' + userName;
    alert(message);
}

messageShow();*/

// the outer one is ignored
let userName = 'Ochieng'
function greetMessage(){
    let userName = 'Achaba';
    let message = 'Hello ' + userName;
    alert(message);
}
// greetMessage(); 

/* *******Variables declared outside of any function, 
such as the outer userName in the code above, are called global.********* */

// Parameters part II
// We can pass arbitrary data to functions using parameters.

/*function param(from, text){
    alert(from + ': ' + text);
}
param('Ann', 'Hello');
param('Ann', 'Welcome');

*/

function mul(num1, num2){
    return num1 * num2;
}
console.log(mul(20, 50));


function showMessage2 (from, text){
    from = '*' + from + '*';

    alert (from + ': ' + text);
}

//let from = 'Ann';

//showMessage2(from, ' Hello');

//alert(from);

// Default values
// If a function is called, but an argument is not provided, 
// then the corresponding value becomes undefined
// example -> showMessage2('Ann'); this will output undefined.


// We can specify the so-called “default” (to use if omitted)
// value for a parameter in the function declaration, using =:
 function showMessage3(from, text = 'no text given'){
    alert(from + ': ' + text);
 }
 //showMessage3('Ann', undefined);

 // Returning a value

 function sub(a, b){
    return a - b;
 }
 let result = sub(4, 1);
 //alert(result);

 // There may be many occurrences of return in a single function. For instance:

function checkAge(age){
    if (age >= 18){
        return true;
    } else {
        return confirm('Do you have permission from your parents?')
    }
}

/*let age = prompt('How old are you?', 18);

if (checkAge(age)){
    alert('Access granted');
} else {
    alert('Access denied!')
} */

// It is possible to use return without a value. 
// That causes the function to exit immediately.

function showMovie(age){
    if (!checkAge(age)) {
        return;
    }
    alert('Showing you the movie');
}
// An empty return is also the same as return undefined

// using a question mark operator

function checkAge2(age){
    // return (age > 18) ? true : confirm('Did your parents allow you?');
}

// Using || (OR) operator

function checkAge3(age){
   // return (age > 18) || confirm('Did your parents allow you?');
}

// Exercise: a function that returns min(a,b);

function min(a, b){
    return a < b ? a : b;
}


function sayHiToMe(){  // This is function declaration
    alert('Hello');
}

// Function expressions: allows us to create a new function in 
// the middle of any expression

let sayHi = function(){
    alert('Hello');
};

// Function is a value: No matter how the function is created, a function is a value.

function sayHiToMeToo(){
    alert('Heloo too');
}
alert(sayHiToMeToo);

// We can copy a function to another variable

function sayHiToThem(){
    alert('Hello guys');
}
let func = sayHiToThem;

//func();
//sayHiToThem();

// using a Function Expression to declare the above code

function sayHiExpression(){
    alert('Hello expression');
};
//let func2 = sayHiExpression; // everything would work the same.

// Callback functions: passing functions as values and using 
// function expressions.
// The arguments showOk and showCancel of ask are called 
// callback functions or just callbacks.

function ask(question, yes, no){
    if (confirm(question)) yes()
        else no();
}
function showOk(){
    alert('You agreed');
}
function showCancel(){
    alert('You canceled the execution');
}

//ask('Do you agree?', showOk, showCancel);

// We could use functions expressions to write shorter equivalent functions

function ask2(question, yes, no){
    if (confirm(question)) yes()
        else no();
}
ask2(
    'Do you agree?',
    function() {alert('You agreed.');},
    function() {alert('You canceled the execution.');}
);

// Difference between function declaration and function expressions
// Function declaration: declared as a separate statement, 
// in the main code flow:

function sum(a, b){
    return a + b;
}

// Function Expression:
let sum2 = function(a, b){
    return a + b;
};
// sum2(2, 3);

// function declarations support global variables while function 
// expressions throws an error!

// sayHiJohn('John'); // error!

let sayHiJohn = function(name){
    alert(`Hello, ${name}`);
};

// In strict mode, when a Function Declaration is within a code block, it’s visible 
// everywhere inside that block. But not outside of it.

// let myAge = prompt('What is your age?', 30);

// conditionally declare a function

/*if (age < 18){
    function Welcome(){
        alert('Hello');
    }
} else {
    function Welcome(){
        alert('Greetings');
    }
}

Welcome(); 
*/

// using it later results to error!
// That’s because a Function Declaration is only visible 
// inside the code block in which it resides.


// So what do we do to make welcome visible outside of if?
// That is where function expressions comes in.

let secondAge = prompt('What is your age?', 30);

let welcome;

if (secondAge < 18){
    welcome = function(){
        alert('Hello')
    }
} else {
    welcome = function(){
        alert('Greetings');
    };
}
// welcome(); // very much okay.

/********* OR********************************/

/********* Simplyfy using ? operator***********/

let ageAchaba = prompt('What is your age?');

let welcome2 = (ageAchaba < 18) ? 

function() {alert('Hello');} :
function() {alert('Greetings');};

// welcome2();

// If the function is declared as a separate statement in the main code flow, 
// that’s called a “Function Declaration”.

// If the function is created as a part of an expression, 
// it’s called a “Function Expression”.


/*------------ Arrow functions -----------------*/

let sum3 = (a, b) => a + b;

// the above code is similar to

/*
    let sum = function(a, b){
        return a + b;
    };
*/
// alert(sum3(1, 2));

// If we have only one argument, then parentheses around parameters can 
// be omitted, making that even shorter.

let double = n => n * 2; // same as let double = function(n){ return n * 2}
// alert(double(3));

// Arrow functions can be used in the same way as Function Expressions

let yourAge = prompt('What is your age?');

let comeIn = (yourAge < 18) ?
() => alert('Hi') :
() => alert('Whats up!');

// comeIn();

// Multiline arrow functions

let sum4 = (a, b) => { // the curly brace opens a multiline function
    let result2 = a + b;
    return result2; // if we use curly braces, then we need an explicit "return"
};
// alert(sum4(5, 6));

// Javascript call stack
// A call stack is a way for the JavaScript engine to keep track of 
// its place in code that calls multiple functions.

function add(a, b){
    return a + b;
}

function average(a, b){
    return add(a, b) / 2;
}

let x = average(10, 20);

// Stack Overflow

// If the number of execution contexts exceeds the size of the stack, 
// a stack overflow error will occur.

function fn(){
    fn();
}
fn(); // stack overflow will occur


/*************** Asynchronous JavaScript ****************/

// JavaScript is a single-threaded programming language. 
// This means that the JavaScript engine has only one call stack. 
// Therefore, it only can do one thing at a time.

// When executing a script, the JavaScript engine executes code from top to bottom, 
// line by line. In other words, it is synchronous.