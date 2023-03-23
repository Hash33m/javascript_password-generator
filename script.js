// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordDetails = writePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordRequirements = {
    allowLowerCase: window.confirm("Can lower case letters be used?"),
    allowUpperCase: window.confirm("Can upper case letters be used?"),
    allowNumbers: window.confirm("Can numbers be used?"),
    allowSymbols: window.confirm("Can special characters and symbols be used?"),
    passwordLenght: window.prompt("Please define password lenght."("Must be between 8 and 128 characters"))
    console.log("Written as part of writePassword logic");
    console.log(passwordRequirements);
    return;

  }

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
