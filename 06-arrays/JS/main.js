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




//-----------------------Array Methods--------------------------//

// spilce

let arr3 = ['I', 'go', 'home'];
delete arr3[1]; // removes go
console.log(arr[1]); // undefined
console.log(arr3.length); // 3 - the element was removed but the array still has 3 elements

// delete obj.key removes a value by the key.
// that is where arr3.splice comes in.

let arr4 = ['I', 'study', 'Javascript'];
arr4.splice(1, 1);
console.log(arr4);

// in this example we remove 3 eleements and replace with two
let arr5 = ['I', 'study', 'Javascript', 'right', 'now'];
arr5.splice(0, 3, 'Let\'s', 'dance');
console.log(arr5);
// Not that negative indexes are also allowed

//-----------------slice-----------------------//
// The method arr.slice is much simpler than the similar-looking arr.splice.

let arr6 = ['t', 'e', 's', 't'];
console.log(arr6.slice(1, 3));
console.log(arr6.slice(-2));

//-----------------concat-------------------//
//The method arr.concat creates a new array that includes values from other arrays 
// and additional items.

let arr7 = [1, 2];
console.log(arr7.concat([3, 4])); // create an array from: arr and [3,4] - result = 1234.
console.log(arr7.concat([3, 4], [5, 6])); // create an array from: arr and [3,4] and [5,6]
console.log(arr7.concat([3, 4], 5, 6)); // create an array from: arr and [3,4], then add values 5 and 6

//------------------------Iterate: forEach-------------------//
// The arr.forEach method allows to run a function for every element of the array.

['Achaba', 'John', 'Peter'].forEach(console.log);

['Achaba', 'John', 'Peter'].forEach((item, index, array) => {
   console.log(`${item} is at index ${index} in ${array}`);
});

//------------------Searching in array-----------------------//

// indexOf/lastIndexOf and includes
// The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their 
// string counterparts, but operate on items instead of characters:
// Usually, these methods are used with only one argument: the item to search. By default, 
// the search is from the beginning.

let arr8 = [1, 0, false];
console.log(arr8.indexOf(0));
console.log(arr8.indexOf(false));
console.log(arr8.indexOf(null));

console.log(arr8.includes(1));

// The method arr.lastIndexOf is the same as indexOf, but looks for 
// from right to left.

let ourFruits = ['Apples', 'Mangoes', 'Apples']

//alert(ourFruits.indexOf('Apples'));
//alert(ourFruits.lastIndexOf('Apples'));



//-------------------find and findIndex/findLastIndex---------------------//

// Imagine we have an array of objects. How do we find an object with a 
// specific condition?
// Here the arr.find(fn) method comes in handy.

let users = [
    {id: 1, name: 'Achaba'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Peter'},
    {id: 4, name: 'Simon'},
    {id: 4, name: 'John'},
];

let user = users.find(item => item.id == 1);
console.log(user.name);

// The arr.findLastIndex method is like findIndex, but searches from 
// right to left, similar to lastIndexOf.

console.log(users.findIndex(user => user.name == 'John')); // first John index
console.log(users.findLastIndex(user => user.name == 'John')); // last john index


//---------------filter------------------------------//
// The syntax is similar to find, but filter returns an array of all matching 
// elements:

let users2 = [
    {id: 1, name: 'Mike'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'John'},
];

// returns array of the first two users

let someUsers = users2.filter(item => item.id < 3);
console.log(someUsers.length);

//----------------Transform an array----------------------//
// Methods that transform and reorder an array.

//----------------map-------------------------//
// It calls the function for each element of the array and returns the 
// array of results.

// transforming each element into its length:

let lengths = ['Achaba', 'John', 'Salim'].map(item => item.length);
console.log(lengths);

//---------------sort(fn)-------------------------//
// sorts the array in place, changing its element order.

let arr9 = [1, 2, 15];
arr9.sort()
console.log(arr9); // The items are sorted as strings by default.

// using our own sorting order, we need to supply a function as the argument 
// of arr.sort().

// to sort as numbers:

let compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return 1;
}
let arr11 = [1, 2, 15];
arr11.sort(compareNumeric);
console.log(arr11);

// if we ever want to know which elements are compared – nothing prevents 
// us from alerting them:

/*[1, -2, 15, 2, 0, 8].sort(function(a, b){
    console.log(a + ' <> ' + b);
    return a - b;
}); // see Javascript.info/array-methods*/

// Arrow functions for neater sorting

arr11.sort((a, b) => a - b);

//----------------Use localeCompare for strings-------------------//
// For many alphabets, it’s better to use str.localeCompare method to correctly 
// sort letters, such as Ö.

let countries = ['Österreich', 'Andora', 'Vietnam'];

