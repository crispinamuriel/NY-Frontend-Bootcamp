let myPerson = {
  name: 'Jenn',
  age: 40,
  location: 'New York City',
  hobbies: ['coding', 'reading', 'jewelrymaking'],
  greet: function () {
    console.log('Hello my name is ' + this.name);
  },
};
console.log(myPerson);
myPerson.greet();

// modify object property

myPerson['lastName'] = 'Fevrier';

console.log(myPerson);

// add new methods

myPerson.introduce = function () {
  // template literal
  console.log(
    `My I am ${this.name} ${this.lastName}. I am ${this.age} years old, from ${this.location}.`
  );
};

myPerson.introduce();

const address = {
  street: '123 main',
  state: 'New York',
  country: 'USA',
};

myPerson.location = address;

console.log(myPerson);

// object destructuring
const { hobbies, lastName, location } = myPerson;

console.log(hobbies);

console.log(myPerson.hobbies[1]);
