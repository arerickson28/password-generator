// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```


// ------------------------------------------------------------
// Begin Starter Code
// ------------------------------------------------------------
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ------------------------------------------------------------
// End Starter Code
// ------------------------------------------------------------
// ------------------------------------------------------------
// My Code Start
// ------------------------------------------------------------
// Defining Variables
let prompt1 ;
let prompt2 ;
let passWord ;

let isUpper ;
let isLower ;
let isNumer ;
let isSpec ;

let charCategor = [] ;

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;

let numerical = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] ;

let special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"] ;


lowerListLength = lowerCase.length ;
upperListLength = upperCase.length ;
numberListLength = numerical.length ;
specialListLength = special.length ;

// ------------------------------------------------------------
// Functions 
// ------------------------------------------------------------

function generatePassword () {
  prompt1 = getPrompt1() ;
  // prompt2 = getPrompt2() ;
  // password = makePassword() ;
  // return passWord
  return prompt1
}
// Getting prompt 1
function getPrompt1() {
  // getEntry
  // validateNumber
  // isLongEnough

  // return submitPrompt ;
}
// Getting Prompt 2
function getPrompt2(){
  getCharCategor() ;
}

function getCharCategor() {
  
  charCategor = [] ;
  
  isLower = toLowerCase(prompt()) ;
  isUpper = toLowerCase(prompt()) ;
  isNumer = toLowerCase(prompt()) ;
  isSpec = toLowerCase(prompt()) ;

  charPromptResults = [isLower, isUpper, isNumber, isSpec] ;

  for(var i in charPromptResults) {
    if (i == "true") {
      i = true ;
    }
  }

  for (var i in charPromptResults) {
    if (i == true) {
      charCategor.push(i) ;
    }
  }

  // charCategor.push(isLower, isUpper, isNumer, isSpec) ;
  
  return charCategor

}

//Making Password
function makePassword(){
  lowerLength
  upperLength
  numberLength
  specialLength
}