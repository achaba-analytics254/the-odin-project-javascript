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
arr[3]();

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