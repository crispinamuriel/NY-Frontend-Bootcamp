// Control Flow
// our app will go on different paths based of different conditions inside of our scripts!
// Conditional Statements
// if statement
let age1 = 10;
if (age1 >= 18) {
  console.log('old enough!');
} else {
  console.log('not old enough!');
}

// if // else if // else

let temp = 0;

if (temp >= 32) {
  console.log('its nice outside');
} else if (temp > 0 && temp < 32) {
  console.log('it is very cold');
} else {
  console.log('it is crazy out there!');
}

let today = 'Monday';

switch (today) {
  case 'Sunday':
    console.log('Going to church!');
    break;
  case 'Monday':
    console.log('Going to work!');
    break;
  default:
    console.log('its a regular day');
}

//Control Flow Structures
//Conditional Statements

//Conditionals if

//if statement
let age = 15;
if (age >= 18) {
  console.log('You are eligible to vote!');
} else {
  console.log('You are not eligible to vote!');
}

//if else if-else
let temperature = 20;
if (temperature < 0) {
  console.log("It's freezng!");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's cool outside!");
} else {
  console.log("It's a warm day!");
}

//Conditionals: Switch statement
let day = 'Tuesday';

switch (day) {
  case 'Monday':
    console.log("It's the start of the week.");
    break;
  case 'Friday':
    console.log("It's the end of the week");
    break;
  default:
    console.log("It's a regular day.");
    break;
}
