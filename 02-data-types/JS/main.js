const string = "The revolution will not be televised";
console.log(string);

// strings are sorrounded by quotes, failure to which will result in a error
// example:
// badString = This is a test;
// badString2 = 'This is a test;
// badString3 = This is a test';

// the following will work

const badString = string;
console.log(badString)

// Single quotes, double quotes and backticks
// all can be used in javascript

const single = 'Single quotes';
const double = 'Double quotes';
const backticks = `Backtics`;

console.log(single, double, backticks);

// Embedding Javascript

const name = 'Chris';
const greeting = `Hello ${name}`;
console.log(greeting);

// You can use the same technique to join together two variables:
// also called concantenation

const one = 'Hello, ';
const two = 'how are you';
const joined = `${one}${two}`;
console.log(joined);

const button = document.querySelector('button');

function greet(){
    const name = prompt('What is your name?');
    const greeting = document.querySelector('#greeting');
    greeting.textContent = `Hello ${name}, nice to meet you!`;
}
button.addEventListener('click', greet);

// Concatenation using "+"Concatenation using "+"

const greetin2 = 'Hello';
const name2 = 'Achaba';

console.log(greetin2 + ', ' + name2);

// However, template literals usually give you more readable code:

const greetin3 = 'Hello';
const name3 = 'Otieno';

console.log(`${greetin3}, ${name3}`)

// You can include JavaScript expressions in template literals, as well as just variables, and the results will be included in the result:
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%`;

console.log(output);

// Muliline strings

// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:

const newLine =`One day you finally knew
what you had to do, and began,`;

console.log(newLine);

// To have the equivalent output using a normal string you'd have to include line break characters (\n) in the string:

const newLine2 = `One day you finally knew\nwhat you had to do, and began,`;
console.log(newLine2);

// Including quotes in strings

// const badQuote = "She said "I think so"";
const goodQuote1 = 'She said "I think so!"';
const goodQuote2 = "She said 'I think so!'";
console.log(`${goodQuote1}, ${goodQuote2}`);

// or:

const bigMouth = 'I\'ve got no right to take my place...';
console.log(bigMouth);

// Numbers vs. strings
// No error coz the browser automatically converts number to string

const coolBandName = 'Front ';
const number = 242;

console.log(coolBandName + number);

// changing strings to number

const myString = '123';
const myNum = Number(myString);
console.log(typeof(myNum));

// conversely

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof(myString2))

// JavaScript String Methods:
// 0-JavaScript String Length
let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(text.length);

// 1-JavaScript String charAt(): Returns the character index position
let text2 = 'Hello, World!';
console.log(text2.length) //13
console.log(text2.charAt(7));

// 2-JavaScript String charCodeAt():
//returns the code of the character at a specified index in a string.
// The method returns a UTF-16 code (an integer between 0 and 65535).

const text3 = 'Hello, World!';
console.log(text3.codePointAt(0));

// 3-JavaScript String at():
 const name4 = 'OtienoAchaba';
 console.log(name4.at(2));

 //or: console.log(name4[2]);

// 4-Property Access
let text4 = 'Hello, World';
console.log(text4[7]);

// JavaScript String concat()
// concat() joins two or more strings:

let text5 = 'Hello';
let text6 = 'World';
let text7 = text5.concat(' ', text6);
console.log(text7);

// JavaScript String slice():
// slice() extracts a part of a string and returns the extracted part in a new string.
 let fruits = 'Apple, Banana, Kiwi';
 let slicedFruits = fruits.slice(7, 13);
 // console.log(fruits.length) // 19
 console.log(slicedFruits)

 // JavaScript String substring()
 // substring() is similar to slice().
 // The difference is that start and end values less than 0 are treated as 0 in substring().

 let currentString = 'Apple, Banana, Kiwi';
 let partString = currentString.substring(7, 13);
 console.log(partString);

 // Converting to Upper and Lower Case
 // A string is converted to upper case with toUpperCase():
 upperCaseString = 'Hello, World';
 console.log(upperCaseString.toUpperCase());

 // JavaScript String toLowerCase()
 // A string is converted to lower case with toLowerCase():
 lowerCaseString = 'HELLO, WORLD!';
 console.log(lowerCaseString.toLowerCase());

 // JavaScript String isWellFormed()
 // The isWellFormed() method returns true if a string is well formed. otherwise returns false
wellFormedText = 'Hello, World';
console.log(wellFormedText.isWellFormed());

notWellFormed = 'Hello, World\uD800';
result2 = notWellFormed.isWellFormed(); // returns false
console.log(result2);

// JavaScript String toWellFormed()
// The String method toWellFormed() returns a new string where all "lone surrogates" 
// are replaced with the Unicode replacement character (U+FFFD).

console.log(notWellFormed.toWellFormed());

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:
removeWhiteSpace = '          Hello, World!        ';
console.log(removeWhiteSpace.trim());

// JavaScript String trimStart()
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

let removeWhiteSpace2 = '      Hello, World!     ';
let removedWhitespace = removeWhiteSpace2.trimStart();
console.log(removeWhiteSpace);

// JavaScript String trimEnd()
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let trimEndOne = '       Hello, World!       ';
let trimEndTwo = trimEndOne.trimEnd();
console.log(trimEndTwo);

// JavaScript String Padding
// padStart() and padEnd() support padding at the beginning and at the end of a string.
let UnpaddedText ='5';
let paddedText = UnpaddedText.padStart(10, 'x');
console.log(paddedText);

// Pad method is a string method. To pad a number you must first convert it to a string

// JavaScript String padEnd()
// It pads a string with another string (multiple times) until it reaches a given length.

let UnpaddedText2 = '+254';
let paddedText2 = UnpaddedText2.padEnd(10,'x');
console.log(paddedText2);

//JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method does not change the original string.
let repeatText = 'Hello Otieno\n';
let reapeatedText = repeatText.repeat(4);
console.log(reapeatedText);

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

function myFunction(){
    let text = document.getElementById('replaceText').innerHTML;
    document.getElementById('replaceText').innerHTML = text.replace('I love Javascript', 'I love building things with it!');
}

// JavaScript String ReplaceAll()
let replaceText = 'Cats, Dogs';
let replaceWith = replaceText.replaceAll('Cats, Dogs', 'cats, dogs');
console.log(replaceWith);

// Converting a String to an Array
// JavaScript String split(); A string can be converted to an array with the split() method:

let alphabet = 'a, b, c, d, e, f';
let splittedAlphabet = alphabet.split(', ');
console.log(splittedAlphabet);
console.log(splittedAlphabet[0])


 // For more string methods, refer to W3Schools.com.

/* ****************************
    The Switch Statement in JS
*/

/* let a = 2 + 2;

switch (a){
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert('I dont know such values');
}
console.log(a); */

// Grouped and Type

/*let arg = prompt('Enter a value');

switch (arg) {
    case '0':
    case '1':
        alert( 'One or Zero' );
        break;
    case '2':
        alert( 'Two' );
        break;
    case 3:
        alert( 'Never execute' ); // The result of of the prompt is a string '3', which is not strictly === to the number 3. 
                                // So we've got a dead code in no. 3 therefore the default variant will be executed.
        break;
    default:
        alert('An unknown value');
}
console.log(arg);*/

// Using if statement in the above code

/*let browser = prompt('Enter a browser');

if (browser === 'Edge'){
    alert ('You\'ve got the Edge!');
} else if (browser === 'Chrome' 
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera'){
    alert('Okay we support these browser too');
} else {
    alert('We hope that this page looks okay!');
}
console.log(browser);*/

/* let b = +prompt('a?', '');

switch (b){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
} */
