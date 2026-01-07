// Relationship between length and numerical properties

const fruits = [];
fruits.push('banana', 'apple', 'peach');
console.log(fruits.length);

fruits[5] = 'Mango';
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length)

fruits.length = 10;
console.log(fruits)
console.log(fruits[8]); // undefined

fruits.length = 2; // deletes elements
console.log(fruits)
console.log(Object.keys(fruits));

//Array methods and empty slots

const colors = ['red', 'yellow', 'blue'];
colors[5] = 'purple';
colors.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

console.log(colors.reverse());

// Newer methods (e.g., keys) o not treat empty slots 
// specially and treat them as if they contain undefined.

const myColors = ['red', 'yellow', 'blue'];
myColors[5] = 'purple';
const iterator = myColors.keys();

for (const key of iterator){
    console.log(`${key}: ${myColors[key]}`);
};

const newColors = myColors.toReversed();
console.log(newColors);

// Copying methods and mutating methods

const person = {name: 'Alice', age: 31, city: 'Nairobi'};
person.location = 'Lavington';
console.log(person); // mutable

// Easy way to change mutable to non-mutable is using spread syntax or slice().

const arr = [1, 2, 3];
arr.copyWithin(0, 1, 2);
console.log(arr);

const arr2 = arr.slice().copyWithin(0, 1, 2, 3);
console.log(arr2) // does not mutate

// Iterative methods

// Check MDN arrays

// Examples

// Fruits created using array literal notation
const ourFruits = ['Apple', 'Banana'];
console.log(ourFruits.length);

// Fruits created using the Array constructor
const ourFruits2 = new Array('Apple', 'Banana');
console.log(ourFruits2.length);

// Fruits array created using String.prototype.split()
const ourFruits3 = 'Apple, Banana'.split(', ')
// console.log(ourFruits3)
console.log(ourFruits3.length);

// Creating a string from an array

const myFruits = ['Apple', 'Banana'];
const fruitString = myFruits.join(', ');
console.log(fruitString);

// Accessing an array item by its index

console.log(myFruits[0]);
console.log(myFruits[myFruits.length -1]);
// Using an index number larger than the array's length
// returns 'undefined'.
console.log(myFruits[99]);

// Finding the index of an item in an array

const myFruits2 = ['Apple', 'Banana'];
console.log(myFruits2.indexOf('Banana'));

// Checking if an array contains a certain item

myFruits2.includes('Banana'); // true
myFruits2.includes('Pinneaple'); // false

// If indexOf() doesn't return -1, the array contains 
// the given item.

myFruits2.indexOf('Banana') !== -1;
myFruits2.indexOf('Pinneaple') !== -1;

// Appending an item to an array using push() method

const myFruits3 = myFruits2.push('Orange');
console.log(myFruits2);

// Removing the last item from an array using pop() method

const removedItem = myFruits2.pop();
console.log(myFruits2);
console.log(removedItem);

// Removing multiple items from the end of an array using splice() method

const myFruits4 = ['Apple', 'Banana', 'Orange', 'Cherry', 'Mango'];
const start = -3;
const removedItems =  myFruits4.splice(start);
console.log(myFruits4);
console.log(removedItems);

// Truncating an array down to just its first N items using the splice() method

const myFruits5 = ['Apple', 'Banana', 'Orange', 'Cherry', 'Mango'];
const start1 = 2;
const removedItems1 = myFruits5.splice(start1);
console.log(myFruits5);
console.log(`Removed items = ${removedItems1}`);

// Removing the first item from an array using shift() method
// this method only removes the first item of an array
 
const myFruits6 = ['Mango', 'Cherry'];
const removedfruit = myFruits6.shift();
console.log(myFruits6);
console.log(`Removed fruit = ${removedfruit}`);

// Removing multiple items from the beginning of an array using splice() method

const myFruits7 = ['Apple', 'Banana', 'Orange', 'Cherry', 'Mango'];

const start2 = 0;
const deleteCount = 3;
const removedItems2 = myFruits7.splice(start2, deleteCount);
console.log(myFruits7);
console.log(`Removed fruits = ${removedItems2}`);

// Adding a new first item to an array using unshift() method making it the new
// first item in the array
 const myFruits8 = ['Mango', 'Dragon'];
 const newLength = myFruits8.unshift('Strawberry');
 console.log(myFruits8);

 // Removing a single item by index using splice() method

 const start3 = myFruits8.indexOf('Strawberry');
 const deleteCount1 = 1;
 const removedItems3 = myFruits8.splice(start3, deleteCount1);
 console.log(myFruits8);
 console.log(`Removed fruit = ${removedItems3}`);

 // Replacing multiple items in an array using splice() method

 const fruitShop = ['Apple', 'Banana', 'Strawberry'];
 const startAt = -2;
 const deleteCountof = 2;
 const replacedFruits = fruitShop.splice(startAt, deleteCountof, 'Mango', 'Cherry');
 console.log(fruitShop);
 console.log(replacedFruits);

 // Iterate over an array using for....of loop

 for (const iteratedFruits of fruitShop){
    console.log(iteratedFruits);
 };

 // Call a function on each element in an array usinf forEch method
// logging item with their respective index numbers

fruitShop.forEach((item, index, array) => {
    console.log(item, index);
});

// Merging multiple arrays together using concat() method

const combinedFruits = fruitShop.concat(myFruits8);
console.log(`These are combined fruits: ${combinedFruits}`);

// Copying an array using spread syntax, from() method, and by using slice method.

const originalFruits = ['Banana', 'Mango'];
const copiedFruits = [...originalFruits]; // spread syntax
console.log(`These are copied fruits: ${copiedFruits}`);