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

// Present Prompts
function generatePassword() {
  //prompt for character length
  console.log("sending to charLen") ;
  let prompt1 = charLen() ;
  console.log(prompt1 + " is the password") ;
 
  //prompt for special characters
  // let prompt2 = specialChar() ;
  //funtion to generate password

  console.log("printing password: " + prompt1) ;
  passWord = prompt1 ;
  return passWord
}
// ------------------------------------------------------------
// Function to choose character length
// ------------------------------------------------------------
function charLen() {
  // console.log("charLen triggered") ;
  let chosenLen = parseInt(prompt("Choose character length of password", "Enter a number between 8 and 128")) ;

  console.log("Entered: " + chosenLen) ;
  console.log("sending " + chosenLen + " to checkValidNum") ;
  // validate legitamite number
  let legitNum = checkValidNum(chosenLen) ;
  console.log(legitNum + " is a number") ;
  // validate length
  console.log("sending " + legitNum + " to isLongEnough") ;
  let longEnough = isLongEnough(legitNum) ;
  console.log(longEnough + " is appropriate length") ;
  console.log("returning " + longEnough + " to generatePassword") ;

  return longEnough
}
// ------------------------------------------------------------
// Function to validate if chosen character length is a number and not letters
// ------------------------------------------------------------
function checkValidNum(entry) {
  console.log(entry + " is NaN?: " + isNaN(entry)) ;
  if (isNaN(entry) === false ) {
    
    console.log(entry + " is acceptable") ;
    console.log("returning " + entry + " to charLen") ;
    return entry
    // console.log("sending entry to isLongEnough") ;
    // validEntry = isLongEnough(entry) ;
    // return validEntry 

  } else {
    console.log(entry + " not acceptable") ;
    console.log("discarding " + entry) ;
    console.log("sending to returnToCharLen") ;
    returnTocharLen() ;
  }
}
  // ------------------------------------------------------------
  // Function to validate if chosen character length is between 8 and 128 characters
  // ------------------------------------------------------------
function isLongEnough(charLen) {
  console.log("is long enough triggered") ;
  if (charLen >= 8 && charLen <= 128) {
    console.log(charLen + " is acceptable") ;
    console.log("returning " + charLen + " to charLen")
    // console.log("returning " + charLen + " to checkValidNum") ;
    return charLen
  } else {
    console.log("not acceptable: " + charLen + " is either to short or too long") ;
    console.log("send to returnTocharLen") ;
    returnTocharLen()
  }
}

// ------------------------------------------------------------
// Function to give alert to re-enter value as a number between 8 and 128 (no letters)
// ------------------------------------------------------------
function returnTocharLen() {
  alert("Error: Entry needs to be a numeric value between 8 and 128. Try again.") ;
  console.log("returning to charLen") ;
  charLen()
}
// ------------------------------------------------------------








// ------------------------------------------------------------
// ------------------------------------------------------------
// My Code End
// ------------------------------------------------------------