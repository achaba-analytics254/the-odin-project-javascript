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

//Array Methods

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
