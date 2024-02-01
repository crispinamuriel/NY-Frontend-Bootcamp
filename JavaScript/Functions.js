console.log('hi');

function greet() {
  console.log('hello world');
}

greet();
// fn declaration
decaration(); // function declarations are hoisted!
function decaration() {
  console.log('hello, i am a fn declaration');
}
decaration();

// function expression use this to avoid errors w/hoisting
// create a variable and assign it!

const myFunction = function () {
  console.log('hello');
};

// function parameters, placeholders variables that we can use inside our function body / block

const greetingz = function (name) {
  console.log(`What's up ${name}?`);
};

greetingz('doc');

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

// global scope

let globalVar = 'I am a global variable';

// local scope, inside a block of code

function localScope() {
  let myLocalVar = 'I am a local variable';
}

console.log(globalVar);
