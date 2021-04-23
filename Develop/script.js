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
// My Code Start
// ------------------------------------------------------------

// TODO: Present series of prompts
function generatePassword() {
  //prompt for character length
  let prompt1 = charLen() ;
  console.log(prompt1)
  //prompt for special characters
  // let prompt2 = specialChar() ;
  passWord = prompt1 ;
  return passWord

}

// Function to choose character length
function charLen() {
  let chooseLen = parseInt(prompt("Choose character length of password", "Enter a number between 8 and 128")) ;

  console.log(chooseLen) ;
  
  // validate legitamite number
  chosenLength = checkValidtNum(chooseLen) ;
  console.log(chosenLength) ;
  // validate length
  // characterLength = checkCharLength() ;

  return chosenLength

}


function checkValidNum(chosenLength) {
  if (isNaN(chosenLength) === true ) {
      
    console.log(chooseLen + " not acceptable") ;

    returnTocharLen() ;

  } else {
    console.log("else") ;
    return chosenLength
  }
}



// Function to give aleart and bounce back to charLen()
function returnTocharLen() {
  alert("Please enter a numeric value") ;
  charLen() ;
}

  





// ------------------------------------------------------------
// My Code End
// ------------------------------------------------------------

