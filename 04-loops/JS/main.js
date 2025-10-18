// LOOPS

// for loops

const cats = ['Leopard', 'Lion', 'Cheetah', 'Jaguar', 'Cats', 'Tiger'];
for (const cat of cats){
   // console.log(cat);
}

// map() and filter()

const toUpper = (string) => {
    return string.toUpperCase()
}
const cats2 = ['Leopard', 'Lion', 'Cheetah', 'Jaguar', 'Cats', 'Tiger'];
const upperCats = cats2.map(toUpper);
// console.log(upperCats);

// filter()

const lCats = (cat) => {
    return cat.startsWith('L');
}

const cats3 = ['Leopard', 'Lion', 'Cheetah', 'Jaguar', 'Cats', 'Tiger'];
const filtered = cats3.filter(lCats);
// console.log(filtered);

// more compact
const cats4 = ['Leopard', 'Lion', 'Cheetah', 'Jaguar', 'Cats', 'Tiger'];
const filteredCats = cats4.filter((cat) => cat.startsWith('L'));
//console.log(filteredCats);

// Looping through the above code instead of using -> for of loop.

const cats5 = ['Leopard', 'Lion', 'Cheetah', 'Jaguar', 'Cats', 'Tiger'];

for (let i = 0; i < cats.length; i++){
    console.log(cats5[i]);
}

// Exiting loops using the break statement


