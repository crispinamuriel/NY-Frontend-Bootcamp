const myDiv = document.getElementById('check');
const myInput = document.getElementsByTagName('input')[0];
const myButton = document.getElementsByTagName('button')[0];

myButton.addEventListener('click', (e) => {
  e.preventDefault();
  const myValue = myInput.value.trim();

  if (myValue !== '' && !isNaN(parseInt(myValue))) {
    if (myValue % 2 == 0) {
      myDiv.innerText = 'Even';
    } else {
      myDiv.innerText = 'Odd';
    }
  } else {
    myDiv.innerText = 'Please enter a valid number';
  }
});
