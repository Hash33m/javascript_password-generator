// Assignment code here
var generateBtn = document.querySelector("#generate");

var passwordDetails = writePassword();

function generatePassword() {
  console.log("Great job! You clicked the button!");

  // 1. Prompt user for password criteria.
  //  - Password lenght 8 < 128.
  //  - Lowercase, uppercase, numbers, and special characters.
  // 2. Validate the input.
  // 3. Generate password based on criteria.
  // 4. Display the password to the page.

  return "Password will go here!";

}

// Write password to the #password input
function writePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Numbers = "0123456789";
  var selectedChar = '';
  var specialChar = "!@#$%^&*()";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordRequirements = {

    allowLowerCase: window.confirm("Do you need lower case letters be used?"),

    allowUpperCase: window.confirm("Do you need upper case letters be used?"),

    allowNumbers: window.confirm("Can numbers be used?"),

    allowSymbols: window.confirm("Do you need special characters and symbols be used?"),

  }
  /* Prompt user for password criteria.
    - Password lenght 8 < 128. */
  while (passwordRequirements.passwordLenght < 8 || passwordRequirements.passwordLenght > 128 || isNaN(passwordRequirements.passwordLenght)) {
    passwordRequirements.passwordLenght = window.alert("Password requirements not met, please try again!")
    return;
  }

  console.log(passwordRequirements);

  /* If statements to build strings of acceptable character and add value to passwords based on character types */
  console.log(passwordRequirements.allowLowerCase);
  var tempPassword = '';
  console.log(tempPassword);
  if (passwordRequirements.allowLowerCase === true) {
    console.log("allowlowercaseworking=" + passwordRequirements.allowLowerCase + " Added Char:" + lowerCase);
    selectedChar += lowerCase;
    tempPassword += lowerCase.charAt(Math.floor(math.random() * lowerCase.length));
    console.log("------" + tempPassword)

  }

  if (passwordRequirements.allowUpperCase === true) {
    console.log("allowUpperCase=" + passwordRequirements.allowUpperCase + " Added Char:" + UpperCase);
    selectedChar += UpperCase;
    tempPassword += UpperCase.charAt(Math.floor(Math.random() * UpperCase.length));
    console.log("------" + tempPassword)
  }

  if (passwordRequirements.allowNumbers === true) {
    console.log("allowNumbers=" + passwordRequirements.allowNumbers + " Added Char:" + Numbers);
    selectedChar += Numbers;
    tempPassword += Numbers.charAt(Math.floor(Math.random() * Numbers.length));
    console.log("------" + tempPassword)
  }

  if (passwordRequirements.allowSymbols === true) {
    console.log("allowSymbols=" + passwordRequirements.allowSymbols + " Added Char:" + specialChar);
    selectedChar += specialChar;
    tempPassword += specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    console.log("------" + tempPassword)
  }

  /* Validation that the user has selected at least 1 character set*/
  if (selectedChar.length < 1) {
    window.confirm("Did not select any password requirements. Please try again!")
    return;
  }
  console.log("Final Char Set:'" + selectedChar + "'")

  /* Password generation*/

  var tempPasswordLength = tempPassword.length
  console.log("tempPasswordLength: " + tempPasswordLength)
  for (var index = 0; index < (passwordRequirements.passwordLength - tempPasswordLength); index++) {
    var tempRandomNumber = Math.floor(Math.random() * selectedChars.length);
    var tempRandomChar = selectedChar.charAt(tempRandomNumber);
    tempPassword += tempRandomChar;
    console.log("tempRandomNumber: " + tempRandomNumber + ", Added Char: " + tempRandomChar + ", tempPassword is now: " + tempPassword);
  }

  console.log(tempPassword.length);

  /* This puts the generated password into HTML to be displayed on the page.*/
  var passwordText = document.querySelector("#password");
  passwordText.value = tempPassword;
  return;
}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* Psuedo coding is done
When it prompts user for passwordLength 
Add logic to verify password length is between 8 and 128 characters 
User is prompted to have:
lowerCase
lowercase= "abcdefghijklmnopqrstuvwxyz"

UpperCase 
upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

Numbers
numbers= "012345678910"

Special Characters and Symbols
specialChar= "!@#$%&*()"

Generate password 
Use logic to make sure requirements are met and if not they should reloop
*/







