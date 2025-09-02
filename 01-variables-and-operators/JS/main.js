console.log('Hello, World');

let my_name = 'Achaba'; // let keyword can be reassigned
let surname = 'Otieno';

console.log(my_name, surname);

let my_age = 30;
console.log(my_age);

my_age = 40;

console.log(my_age) // prints 40 instead of 30.

const pi = 3.14; // const keyword cannot be reassigned
console.log(pi);

// pi = 10;

// console.log(pi); // This will result to an error.

// ********** Numbers **************

console.log(30 + 40);

console.log(4 + 6 + 9) / 77;

let a = 10;

console.log(a)

a = 30;

let b = a * 7;

console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

const default_time = 60;
const study_time = 25;
const rest_time = 15;
let my_time = study_time + rest_time;
console.log(my_time)

console.log(default_time - my_time);

//num = 5;
//alert(num)

//greet = 'Hello, Achaba';
//alert(greet);

//const COLOR_RED = '#FOO';
//alert(COLOR_RED);


//let admin = 'Achaba';
//let name = 'John'

//admin =  name;
//alert(admin);

// This is the best way of naming variables in JS
let ourPlanetName = 'Earth';
let currentUserName = 'Achaba'; 

// increment
let x = 5;
x++;
console.log(x);

let counter = 1;
//alert(2 * counter);
counter++;

// Decrement
let z = 5;
z--;
console.log(z)

// Exponentiation
let i = 6;
i = i ** 2;
console.log(i)

let j = 5;
j = Math.pow(j,2);
console.log(j); // same as above.

// Precedence

let k = (20 + 30) * 3; // parentheses is done first then multiplication
console.log(k);

// Numbers

let decimalNumber = 3.14;
let nonDecimalNumber = 3;

// extra small numbers can be written with scientific (exponent) notation:

let exponentNumberOne = 123e5;
console.log(exponentNumberOne);
let exponentNumberTwo = 123e-5;
console.log(exponentNumberTwo);

// Integer Precision (Refer to W3 Schools)
let integerPrecisionOne = 999999999999999;
console.log(integerPrecisionOne);
let integerPrecisionTwo = 9999999999999999;
console.log(integerPrecisionTwo)

// Floating precision

let floatingPrecision = 0.2 + 0.1; // Floating point arithmetic is not always 100% accurate
console.log(floatingPrecision);
// but it helps to multiply and divide
let multiplyDivide = (0.2 * 10 + 0.1 * 10) / 10;
console.log(multiplyDivide); // This is better!

// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.
additionOperator = 10 + 20;
console.log(additionOperator);

concantenateOperator = '10 ' + '30';
console.log(concantenateOperator)

motherFirstName = 'Jane ';
motherSecondName = 'Akinyi';
motherFullName = motherFirstName + motherSecondName;
console.log(motherFullName);

// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
notAnumber = 100 / 'apples';
console.log(notAnumber);

// Infinity
//let myNumber = 2;
//while(myNumber != Infinity);
//myNumber = myNumber * myNumber;

//console.log(myNumber);


// Roundng of to a fixed number of decimal places
const lotsOfDecimal = 1.7665849587;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

//converting to number data types
let myNumber = '74';
//myNumber += 3;
//console.log(myNumber);
typeof myNumber;

// fixing the above calculation
myNumber = Number(myNumber) + 3;
console.log(myNumber);

// Numeric conversion, unary +
let c = 1;
//alert (+c) // 1

let y = -2;
//alert(+y)

// string to number conversion
let apples = '2';
let oranges = '3';

// alert(apples + oranges);

//fixing the above code using the + operator

// alert( +apples + +oranges);

// Chaining assignments

let m, n, o;

a = b = c = 2 + 2;

//alert(m); // 4
//alert(n); // 4
//alert(o); // 4


// Sizing a canvas box

const canvas = document.getElementById('canvas');
const para = document.querySelector('p');
const ctx = canvas.getContext('2d');

let q = (75 + 225) / 2 - 50;
let r = q * 2;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, q, r);
para.textContent = `The rectangle is ${q}px wide and ${r}px high.`;


const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn(){
    if (btn.textContent === "Start machine"){
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine is stopped"
    }
}