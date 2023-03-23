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
  var specialChar = "!@#$%^&*()";
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordRequirements = {
    
    allowLowerCase: window.confirm("Do you need lower case letters be used?"),
    
    allowUpperCase: window.confirm("Do you need upper case letters be used?"),
    
    allowNumbers: window.confirm("Can numbers be used?"),
    
    allowSymbols: window.confirm("Do you need special characters and symbols be used?"),
    
    passwordLenght: window.prompt("How many characters does your password need to contain."("Must be between 8 and 128 characters"))
    
    console.log("Written as part of writePassword logic");
    
    console.log(passwordRequirements);
    return;

  }


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







