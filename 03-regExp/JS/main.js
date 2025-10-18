// You construct a regular expression in one of two ways:
// Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

const re = /ab+c/;
console.log(re);

// calling the constructor function of the RegExp object:

const re2 = new RegExp('ab+c');
console.log(re2);

// Assertions

const text = 'A quick fox';

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));

const regexpLastWords = /\b\w+\b/g;
console.log(text.match(regexpLastWords));

let myName = 'Ali';
regex = /Ali/;
const isExisting = regex.test(myName);
console.log(isExisting);