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
  
  const inputElement = document.getElementById("zipcode-input");
  const resultElement = document.getElementById("zipcode-validation-result"); 
  const addToCartElement = document.getElementById("AddToCart");
  
  
  const zipCode = inputElement.value.trim();
  
  if (validateZipCode(zipCode)) {
    resultElement.innerHTML = "<span style='color: green;'>We deliver to your area! ^_^</span>";
    addToCartElement.classList.remove("disable-btn")
  } else {
    resultElement.innerHTML = "<span style='color: red;'>Sorry, we don't deliver to your area.</span>";
    addToCartElement.classList.add("disable-btn")
  }
}

// Attach event listener to trigger validation
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("zipcode-submit-button"); 
  submitButton.addEventListener("click", handleZipCodeValidation);
});
