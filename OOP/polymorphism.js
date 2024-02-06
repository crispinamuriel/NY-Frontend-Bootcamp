console.log('hello OOP');
// Polymorphism
// create a class
class Animal {
  makeSound() {
    return `The animal makes a noise.`;
  }
}

const myAnimal = new Animal();
console.log(myAnimal.makeSound());

class Dog extends Animal {
  makeSound() {
    return super.makeSound() + ' The dog barks.';
  }
}

class Cat extends Animal {
  makeSound() {
    return super.makeSound() + ' the cat meows.';
  }
}

const myDog = new Dog();
console.log(myDog.makeSound());
const myCat = new Cat();
console.log(myCat.makeSound());
