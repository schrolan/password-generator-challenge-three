// Assignment code here
//Variables that are being picked from for the password
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//choose which chars you want
var lowerCaseChoice = false
var upperCaseChoice = false
var numbersChoice = false
var specialCharsChoice = false
//choose length
function selectLength () {
  var length = 0
  while (length < 8 || length > 128) {
    length = prompt("Please select a length between 8 and 128 characters.")
  }
  if (length > 8 || length <128) {
    lowerCaseChoice = false
    upperCaseChoice = false
    numbersChoice = false
    specialCharsChoice = false
  }
  while (!lowerCaseChoice&&!upperCaseChoice&&!numbersChoice&&!specialCharsChoice) {
    lowerCaseChoice = confirm("Would you like to include lowercase characters?")
    upperCaseChoice = confirm("Would you like to include uppercase characters?")
    numbersChoice = confirm("Would you like to include numbers?")
    specialCharsChoice = confirm("Would you like to include special characters?")
    if (!lowerCaseChoice&&!upperCaseChoice&&!numbersChoice&&!specialCharsChoice) {
      alert("Please select at least one of the options presented to you.")
    }
  }
return length
}
//put them together
function generatePassword() {
  var charChoices = selectLength();
  var charCombo = "";
  var passwordChoice = "";
  console.log(charChoices)
  if (lowerCaseChoice) {
      charCombo += lowerCase;
      
  }
  if (upperCaseChoice) {
      charCombo += upperCase;
      
  }
  if (numbersChoice) {
      charCombo += numbers;
      
  }
  if (specialCharsChoice) {
      charCombo += specialChars;
      
  }
  console.log(charCombo)
  for (var i = 0; i < charChoices; i++) {
      passwordChoice += charCombo[Math.floor(Math.random()* charCombo.length)];
  }
  console.log(passwordChoice)
  return passwordChoice;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);