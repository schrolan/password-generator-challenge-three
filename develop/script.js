// Assignment code here
//Variables that are being picked from for the password
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//choose which chars you want
var lowerCaseChoice = true
var upperCaseChoice = true
var numbersChoice = true
var specialCharsChoice = true
//choose length

//put them together


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