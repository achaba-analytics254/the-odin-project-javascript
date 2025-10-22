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

/* const contacts = [
    'Ali: 254700000011',
    'Alice: 254700000022',
    'Achaba: 254700000033',
    'Sam: 254700000044',
    'David: 254700000055',
    'Alex: 254700000066',
    'John: 254700000077',
    'Hannah: 254700000088',
    'Judy: 254700000099'
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
}); */

// Skipping iteration with continue statement

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    para.textContent = 'Output: ';
    const num = input.value;
    input.value = '';
    input.focus();
    for (let i = 1; i <= num; i++){
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot){
            continue;
        }
        para.textContent += `${i}`;
    }
});

// while and do....while loops

const cats6 = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called: ';

let i = 0;

while (i < cats6.length){
    if (i ===  cats6.length - 1){
        myFavoriteCats  += `${cats6[i]}, `;
    }

    i++;
}
console.log(myFavoriteCats);