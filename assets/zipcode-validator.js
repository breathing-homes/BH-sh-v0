// zipcode-validator.js

// Replace this array with the ZIP codes you deliver to
const validZipCodes = ["12345", "67890", "54321"];

// Function to validate ZIP code
function validateZipCode(zipCode) {
  return validZipCodes.includes(zipCode);
}

// Function to handle the ZIP code validation
function handleZipCodeValidation(e) {
  e.preventDefault();
  
  const inputElement = document.getElementById("zipcode-input"); // Replace with your input element's ID
  const resultElement = document.getElementById("zipcode-validation-result"); // Replace with the element where you want to display validation result

  const zipCode = inputElement.value.trim();
  
  if (validateZipCode(zipCode)) {
    resultElement.innerHTML = '<span style="color: green;">We deliver to your area! ^_^</span>';
  } else {
    resultElement.innerHTML = '<span style="color: red;">Sorry, we don't deliver to your area.</span>';
  }
}

// Attach event listener to trigger validation
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("zipcode-submit-button"); // Replace with your submit button's ID
  submitButton.addEventListener("click", handleZipCodeValidation);
});
