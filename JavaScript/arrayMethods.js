// Arrays

let myArray = ['Madam Web', 'Batgirl', 'Storm'];

console.log(myArray[myArray.length - 1]);

myArray.push('Captain Planet');

console.log('myArray', myArray);
myArray.pop();
console.log('myArray after pop', myArray);

// Array iteration

// looop through our array!
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// array method

console.log(myArray.indexOf('Batgirl'));

console.log(myArray.join('-'));
