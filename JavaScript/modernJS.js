// ES6 (ECMAScript 2015)

// when we write functions => we use with fn keyworkd but we want arrow functions!

function greet() {
  console.log('hi');
}

const greeting = () => {
  console.log('hi2');
};

const square = (a, b) => a * b;
console.log(square(2, 4));

const person = {
  name: 'TJ',
  age: 21,
  greeting() {
    console.log('hiyo');
  },
};

// spread and rest operator
//rest
const myFunction = (first, ...restOfArgs) => {
  console.log(first, restOfArgs);
};

myFunction(1, 2, 3, 4);

// spread's and array into args
const mysumArr = [1, 2, 3];
const myfunct = (x, y, z) => {
  return x + y + z;
};

console.log(myfunct(...mysumArr));

// common built in Array Method
// Filter, meets criteria that you pass
const myArrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myFilter = (arr) => {
  return arr.filter((curr) => curr % 2 != 0);
};
console.log(myFilter(myArrayNums));

// split => ['strings' 'strings]

const message = 'Hello World';

console.log(message.split(' '));

const words = 'The quick brown fox jumped over the lazy dog';

console.log(words.includes('a'));

console.log(words.includes('fox'));

const mywordstring = 'welcome!';

console.log(mywordstring.length);

// objects
// Methods on objects!

const personKeys = Object.keys(person);
console.log(personKeys);

const personValues = Object.values(person);
console.log(personValues);

const personEntries = Object.entries(person);
console.log(personEntries);

// Math

// Math.random
const myMax = [1, 23, 4, 5, 6];
// Math.max()
console.log(Math.max(...myMax));
// Math.min()
console.log(Math.min(10, 5, 20));
// round
console.log(Math.round(2.6));
// floor
console.log(Math.floor(2.9));
// ceil
console.log(Math.ceil(2.1));
// nested Math method

console.log(Math.round(Math.random() * 100));

// other methods
const pi = 3.141592;
console.log(pi.toFixed(2));
// date!
console.log(new Date(2024, 11, 25));

// tostring

const myNumber = 12345;
console.log(myNumber.toString());
console.log(typeof myNumber.toString());
