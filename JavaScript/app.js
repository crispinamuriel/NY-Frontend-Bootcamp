console.log('hi');
// Jan 31, Activity

// Task 1: Use arrow fn to calc the square of num and log result to console
const square = (num) => Math.pow(num, 2);

console.log(square(2));
// Task 2: Use template literals to create a welcome message that includes the name and age of a person
const age = parseInt(prompt('Enter your age'));
const username = prompt('Enter your name');
console.log(`Hello ${username}, you are ${age} years old`);
const h1element = document.getElementsByTagName('h1');
h1element[0].innerHTML = `Hello ${username}, you are ${age} years old`;

// Task 3: Use destructuring to extract the first and last name from a person object and log themto console
const person = {
  first: 'Nancy',
  last: 'Daniels',
};

const { first, last } = person;

console.log(first, last);
// Task 4: Use spread operator to merge two arrays into single array objects
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10];

console.log([...arr1, ...arr2]);
// Task 5: Use default parameters to create a func that calculates the area of a rectangle

const areaOfReq = (x = 2, y = 5) => {
  return x * y;
};

console.log('The area is:', areaOfReq(1, 3));

// Task 6: Create a class called "Person" with props for name/age
// and a method to introduce the person. Instantiate an object of the class and call the method

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hello my name is ${this.name}, and I am ${this.age} years old.`
    );
  }
}
const myPerson = new Person('Melody', 37);
console.log(myPerson.introduce());
