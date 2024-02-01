let score;

score = parseInt(prompt('Please enter the score'));

if (score < 60) {
  console.log('The grade for the score ' + score + ' is: F');
} else if (score < 70 && score >= 60) {
  console.log('The grade for the score ' + score + ' is: D');
} else if (score < 80 && score >= 70) {
  console.log('The grade for the score ' + score + ' is: C');
} else if (score < 90 && score >= 80) {
  console.log('The grade for the score ' + score + ' is: B');
} else {
  console.log('The grade for the score ' + score + ' is: A');
}
