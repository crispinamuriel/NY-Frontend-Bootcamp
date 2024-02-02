const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
console.log(form, nameInput, emailInput, nameError, emailError);

form.addEventListener('submit', (e) => {
  // handle submit event
  e.preventDefault(); // don't refresh on submit
  const isVaid = validateForm();

  if (isVaid) {
    // perform submission
    console.log('form submitted successfully');
    // reset form
    form.reset(); // clear
    nameError.textContent = '';
    emailError.textContent = '';
  }
});

// form input validation fn
function validateForm() {
  const nameValue = nameInput.value.trim();

  const emailValue = emailInput.value.trim();
  let isValid = true;

  if (nameValue === '') {
    console.log('error');
    nameError.textContent = 'Name is required';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  if (emailValue === '') {
    console.log('error');
    emailError.textContent = 'Email is required';
    isValid = false;
  } else {
    emailError.textContent = '';
  }
  return isValid;
}
