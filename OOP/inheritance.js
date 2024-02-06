console.log('hi');

// Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating food!`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof woof!');
  }
}

const myDog = new Dog('Buddy');
myDog.eat();
myDog.bark();

class Bird extends Animal {
  chirp() {
    console.log('chirp chirp');
  }
}

const myBird = new Bird('Pauly');
myBird.chirp();
