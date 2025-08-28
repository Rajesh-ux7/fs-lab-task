// public/js/validate.js
document.getElementById('studentForm').addEventListener('submit', function (e) {
  const email = document.getElementById('email').value;
  const age = parseInt(document.getElementById('age').value);
  const agree = document.querySelector('[name="agree"]').checked;

  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    e.preventDefault();
  }

  if (isNaN(age) || age < 1 || age > 100) {
    alert('Age must be between 1 and 100.');
    e.preventDefault();
  }

  if (!agree) {
    alert('You must agree to the terms.');
    e.preventDefault();
  }
});
