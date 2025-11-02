const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passwordError');
const successMsg = document.getElementById('successMsg');

// Validation functions
function validateEmail(value) {
  return (
    value.length > 3 &&
    value.includes('@') &&
    value.includes('.')
  );
}

function validatePassword(value) {
  return value.length > 8;
}

// onChange handlers
emailInput.addEventListener('input', handleInputChange);
passInput.addEventListener('input', handleInputChange);

function handleInputChange() {
  let validEmail = validateEmail(emailInput.value.trim());
  let validPassword = validatePassword(passInput.value);

  // Email error logic
  if (!validEmail) {
    emailError.textContent = "Make sure email is more than 3 characters and has @ and .";
  } else {
    emailError.textContent = "";
  }

  // Password error logic
  if (!validPassword) {
    passError.textContent = "Make sure password is more than 8 characters.";
  } else {
    passError.textContent = "";
  }

  // Success message logic
  if (validEmail && validPassword) {
    successMsg.textContent = "All good to go!";
  } else {
    successMsg.textContent = "";
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let validEmail = validateEmail(emailInput.value.trim());
  let validPassword = validatePassword(passInput.value);

  if (validEmail && validPassword) {
    // Confirmation dialog
    let confirmed = confirm("Are you sure you want to sign up?");
    if (confirmed) {
      alert("successful signup!");
    } else {
      // Reload and clear fields
      emailInput.value = '';
      passInput.value = '';
      emailError.textContent = '';
      passError.textContent = '';
      successMsg.textContent = '';
    }
  } else {
    handleInputChange(); // shows the errors
  }
});
