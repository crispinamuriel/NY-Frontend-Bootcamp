//Looping Statements - Execute repetitive task / way to automate task
let myVal = 6;
for (let i = 0; i < myVal; i++) {
  console.log('count', i);
}

while (myVal > 0) {
  myVal -= 1;
  console.log(myVal);
}

let count = 0;

do {
  count++;
  console.log('mycount', count);
} while (count <= 5);
