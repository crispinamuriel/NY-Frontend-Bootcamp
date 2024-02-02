// DOM Manipulation!
// Accessing Elements
// By ID (Unique, will only select one element)
const h1heading = document.getElementById('heading');
console.log(h1heading);

// By Class (Possible lots of elements, will return an array / collection of HTML elements)
const heading = document.getElementsByClassName('headingOne');
console.log(heading);

// By Tag name
const heading1 = document.getElementsByTagName('h1');
console.log(heading1);

// By Query Selector All
const listItems = document.querySelectorAll('#list li'); // decentant selector, and then children as arguments eg. #list li
console.log(listItems);
// Scripts add more interactivity to our web pages, once you click you can calcluate, modify, open up new divs ect.

// Innerhtml === everything inside
// Innertext is just text inside element

// Let's use these to modify my elements!
// Mod the content using innerHTML
const myHeading = (heading1.innerHTML = 'Doing DOM Manipulation!');
const myModifiedEl = (listItems[1].innerHTML = 'HELLO WORLD!');

heading1[0].innerHTML = '<em>DOM DOM DOM!</em>'; // innerHTML can use html tags inside of the string you set as the value

// Heading1[0].textContent = '<em>hi</em>';

// Modify elementt attributes using setAttribute!
listItems[0].setAttribute('class', 'highlight');

// Modify Styles using 'style' property
const button = document.getElementById('button');
console.log(button.style);
button.style = 'background-color: red;';
button.style.backgroundColor = 'blue';
button.style.color = 'white';
// Creating new elememnts Dynamically

// select container div
const containerDiv = document.getElementsByClassName('container')[0];
console.log('container', containerDiv);

// Create new p element
const myParagraph = document.createElement('p');
myParagraph.innerHTML = 'hi';
myParagraph.textContent = 'this is a new paragraph';

containerDiv.appendChild(myParagraph);

// Remove elements dynamically
containerDiv.remove();
// button.remove();

// Handling Events in the browser
button.addEventListener('click', () => {
  const myColor = Math.round(Math.random() * 1000000);
  console.log(myColor);
  button.style.backgroundColor = `#${myColor}`;
  const newListItem = document.createElement('li');
  newListItem.innerHTML = 'New list item';
  document.getElementById('list').appendChild(newListItem);
});

// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.
