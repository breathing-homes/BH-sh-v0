// zipcode-validator.js

// Replace this array with the ZIP codes you deliver to
const validZipCodes = [
    "201307",
    "201303",
    "201309",
    "201008",
    "122001",
    "122004",
    "122101",
    "122102",
    "122051",
    "122103",
    "122016",
    "122003",
    "122503",
    "122508",
    "122506",
    "122005",
    "122502",
    "122011",
    "121007",
    "121002",
    "121005",
    "121008",
    "121004",
    "121006",
    "110095",
    "110092",
    "110053",
    "110096",
    "110091",
    "110032",
    "110094",
    "110031",
    "110090",
    "110093",
    "110051",
    "110006",
    "110036",
    "110034",
    "110085",
    "110088",
    "110039",
    "110082",
    "110009",
    "110081",
    "110040",
    "110086",
    "110007",
    "110054",
    "110084",
    "110052",
    "110042",
    "110033",
    "110035",
    "110083",
    "110089",
    "110056",
    "110003",
    "110001",
    "110011",
    "110004",
    "110002",
    "110012",
    "110005",
    "110008",
    "110055",
    "110069",
    "110060",
    "110019",
    "110062",
    "110024",
    "110065",
    "110048",
    "110013",
    "110017",
    "110044",
    "110025",
    "110020",
    "110049",
    "110076",
    "110014",
    "110080",
    "110010",
    "110038",
    "110047",
    "110074",
    "110021",
    "110068",
    "110067",
    "110022",
    "110066",
    "110030",
    "110023",
    "110016",
    "110070",
    "110061",
    "110097",
    "110037",
    "110057",
    "110029",
    "110026",
    "110077",
    "110075",
    "110073",
    "110064",
    "110071",
    "110063",
    "110043",
    "110041",
    "110027",
    "110015",
    "110087",
    "110058",
    "110018",
    "110059",
    "110028",
    "110078",
    "110045",
    "110046",
    "110072",
    "201012",
    "201011",
    "201005",
    "201002",
    "201007",
    "201010",
    "201001",
    "122107",
    " 122001",
    " 122508",
    " 122101",
    " 122105",
    " 122006",
    " 122503",
    " 122104",
    " 122108",
    " 122505",
    " 122103",
    " 122102",
    " 122413",
    " 122017",
    " 122002",
    " 122502",
    " 122008",
    " 122010",
    " 122016",
    " 123106",
    " 122506",
    " 122107",
    " 122009",
    " 122003",
    " 122011",
    " 122018",
    " 122052",
    " 122414",
    " 122007",
    " 122504",
    " 123401",
    " 122051",
    " 122004",
    " 122015",
    " 203207",
    " 201310",
    " 203202",
    " 203203",
    " 203155",
    " 201304",
    " 203209",
    " 203141",
    " 203131",
    " 201008",
    " 201307",
    " 201305",
    " 203135",
    " 203201",
    " 201306",
    " 201309",
    " 201301",
    " 201303",
    " 110001",
    " 110002",
    " 110003",
    " 110004",
    " 110005",
    " 110006",
    " 110007",
    " 110008",
    " 110009",
    " 110010",
    " 110011",
    " 110012",
    " 110013",
    " 110014",
    " 110015",
    " 110016",
    " 110017",
    " 110018",
    " 110019",
    " 110020",
    " 110021",
    " 110022",
    " 110023",
    " 110024",
    " 110025",
    " 110026",
    " 110027",
    " 110028",
    " 110029",
    " 110030",
    " 110031",
    " 110032",
    " 110033",
    " 110034",
    " 110035",
    " 110036",
    " 110037",
    " 110038",
    " 110039",
    " 110040",
    " 110041",
    " 110042",
    " 110043",
    " 110044",
    " 110045",
    " 110046",
    " 110047",
    " 110048",
    " 110049",
    " 110050",
    " 110051",
    " 110052",
    " 110053",
    " 110054",
    " 110055",
    " 110056",
    " 110057",
    " 110058",
    " 110059",
    " 110060",
    " 110061",
    " 110062",
    " 110063",
    " 110064",
    " 110065",
    " 110066",
    " 110067",
    " 110068",
    " 110069",
    " 110070",
    " 110071",
    " 110072",
    " 110073",
    " 110074",
    " 110075",
    " 110076",
    " 110077",
    " 110078",
    " 110079",
    " 110080",
    " 110081",
    " 110082",
    " 110083",
    " 110084",
    " 110085",
    " 110086",
    " 110087",
    " 110088",
    " 110089",
    " 110090",
    " 110091",
    " 110092",
    " 110093",
    " 110094",
    " 110095",
    " 110096",
    " 110097",
    " 110098",
    " 110099",
    " 110100",
    " 110101",
    " 110102",
    " 110103",
    " 110104",
    " 110105",
    " 110106",
    " 110107",
    " 110108",
    " 110109",
    " 110110"
]

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
    // addToCartElement.classList.remove("disable-btn");
    // addToCartElement.disabled = false;
  } else {
    resultElement.innerHTML = "<span style='color: red;'>Sorry, we don't deliver to your area.</span>";
    // addToCartElement.classList.add("disable-btn");
    // addToCartElement.disabled = true;
  }
}

// Attach event listener to trigger validation
document.addEventListener("DOMContentLoaded", function () {
  // const addToCartElement = document.getElementById("AddToCart");
  // addToCartElement.classList.add("disable-btn");
  // addToCartElement.disabled = true;
  
  const zipcodeSubmitButton = document.getElementById("zipcode-submit-button"); 
  zipcodeSubmitButton.addEventListener("click", handleZipCodeValidation);

});
