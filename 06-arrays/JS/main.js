let alph = ['A', 'B', 'C', 'D'];
alph.push('E') // adds elements to an array

console.log(alph);

// nested arrayes

let nested = [
    [1, 2],['F', 'G'],
]
nested[0]
console.log(nested[0][1]);


let fruits = ['Bananas', 'Mangoes', 'Apples', 'Kiwi']
fruits[4] = 'Oranges'
console.log(fruits);
console.log(fruits.length); // array length

// An array can store elements of any type.
let arr = ['Apple', {name: 'Achaba'}, true, function(){alert('hello')}]
console.log(arr[1].name);
// arr[3]();

// Trailing comma (An array, just like an object, may end with a comma:)
// The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.

let myFruits = [
    'Pineapple',
    'Jackfruit',
    'Lemon',
];

console.log(myFruits[myFruits.length-1])

// A bit cumbersome, We need to write the variable name twice.
// There’s a shorter syntax: fruits.at(-1):

console.log(myFruits.at(-1));

//-------------Array Methods------------//

// pop/push and shift/unshift

let stackedFruits = ['Oranges', 'Mangoes', 'Bananas'];
//pop - Extracts the last element of the array and returns it:

console.log(stackedFruits.pop());
//push - Append the element to the end of the array:
stackedFruits.push('Pinneaple');
console.log(stackedFruits);

// Methods that work with the beginning of the array:
// shift - Extracts the first element of the array and returns it
let extractedFruit = ['Orange', 'Mango', 'Banana'];
console.log(extractedFruit.shift());
console.log(extractedFruit);


// unshift - Add the element to the beginning of the array:
let addedFruits = ['Apples'];
addedFruits.unshift('Orange', 'Banana');
console.log(addedFruits);

// Methods push and unshift can add multiple elements at once:

let allFruits = ['Pinneaple'];
allFruits.push('Mango', 'Orange');
allFruits.unshift('Lemon', 'Citrus')
console.log(allFruits);

// Technically, because arrays are objects, it is also possible to use for..in:
// Bad idea though -> see javascript.info/array
// 10 - 100 times slower - Generally, we shouldn’t use for..in for arrays.
let arrayFruits = ['Apples', 'Bananas', 'Mangoes', 'Pinneaple'];
for (let key in arrayFruits){
    console.log(arrayFruits[key]);
}

// A word about “length”
let fruits2 = [];
fruits2[123] = 'Apples';
console.log(fruits2.length); // returns 1234

let truncatedArray = [1, 2, 3, 4, 5];

truncatedArray.length = 2;
console.log(truncatedArray);

truncatedArray.length = 5;
console.log(truncatedArray[3]); // undefined - So, the simplest way to clear the array is: arr.length = 0;


// There is one more syntax to create an array
// new Array()

let newArr = new Array ('Apples', 'Mangoes', 'Pears', 'Kiwis');
console.log(newArr); 
// It’s rarely used, because square brackets [] are shorter. Also, there’s a tricky
// feature with it.

// shoot yourself in the foot 
let newArr2 = new Array(2); // will it create an array of [2] ?
console.log(newArr2[0]) // undefined
console.log(newArr2.length); // 2

//--------------- Multidimensional arrays ----------//

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]); // 2, the second value of the first inner array

//----- toString--------//

// Arrays have their own implementation of toString method that returns 
// a comma-separated list of elements.

let toStringArray = [1, 2, 3];
console.log(toStringArray);
console.log(String(toStringArray) === '1,2,3'); // returns true

// Also

console.log([] + 1);
console.log([1] + 1);
console.log([1,2] + 1);
