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
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ------------------------------------------------------------
// End Starter Code
// ------------------------------------------------------------
// My Code
// ------------------------------------------------------------

function generatePassword() {
    let prompt1 = getPrompt1() ;
    let prompt2 = getPrompt2() ;
    let passWord = makePassword(prompt1, prompt2) ;
    return passWord
}


//Function to Get Prompt 1
let charLen ;

function getPrompt1() {
    charLen = parseInt(prompt("Please choose password length between 8 and 128")) ;

    console.log(typeof(charLen)) ;

   if (charLen >= 8 && charLen <= 128) {
       console.log(charLen + " is acceptable length") ;
   } else {
       alert("Please choose an appropriate length") ;
       return getPrompt1()
   }

//Validate the enty isn't a word
   console.log("prompt1 has returned " + charLen)
   return charLen
}


let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;

let numericalArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] ;

let specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?"] ;


// Function to get prompt 2

let chosenCategories = [] ;
let upperCase ;
let lowerCase ;
let special ;
let numbers ;
function getPrompt2() {
    //validate that at least one of prompts is "yes"
    
    chosenCategories = []

    upperCase = confirm("Would you like to use uppercase?" + "\n" + "Select 'okay' for yes and 'cancel' for no") ;

    if (upperCase === true) {
        upperCase = "upperCase"
        chosenCategories.push(upperCase) ;
        console.log(chosenCategories) ;
    }    

    lowerCase = confirm("Would you like to use lowercase?" + "\n" + "Select 'okay' for yes and 'cancel' for no" ) ;

    if (lowerCase === true) {
        lowerCase = "lowerCase"
        chosenCategories.push(lowerCase) ;
        console.log(chosenCategories) ;
    }  

    special = confirm("Would you like to use special characters?"  + "\n" + "Select 'okay' for yes and 'cancel' for no") ;

    if (special === true) {
        special = "special"
        chosenCategories.push(special) ;
        console.log(chosenCategories) ;
    }  

    numbers = confirm("Would you like to use numbers?"  + "\n" + "Select 'okay' for yes and 'cancel' for no") ;

    if (numbers === true) {
        numbers = "numbers"
        chosenCategories.push(numbers) ;
        console.log(chosenCategories) ;
    }  

    //verify chosenCategories.length is at least one
    console.log("prompt2 is returning " + chosenCategories) ;
    return chosenCategories
}


//Funtiont to use prompts to make password
function makePassword(prompt1, prompt2) {
    let  charArraysToInclude = [] ;
    let finalPasswordArray = [] ;
    let  finalPassword = [] ;
    

    if (prompt2.includes("upperCase")) {
        charArraysToInclude.push(upperCaseArray) ;
    } 
    
    if (prompt2.includes("lowerCase")) {
        charArraysToInclude.push(lowerCaseArray) ;
    } 
    
    if (prompt2.includes("special")) {
        charArraysToInclude.push(specialArray) ;
    }
    
    if (prompt2.includes("numbers")){
        charArraysToInclude.push(numericalArray) ;
    }

    console.log("the charArraysToInclude are: " + charArraysToInclude)
    console.log("length of charArrays to include: " + charArraysToInclude.length) ;
    
    for (var i=0; i < charArraysToInclude.length; i++) {
        let randomNumber = Math.floor(Math.random() * charArraysToInclude[i].length) ;
        finalPassword.push(charArraysToInclude[i][randomNumber]) ;
    }

    console.log("Final Password thus far: " + finalPassword)

    let charToBeAdded = prompt1 - charArraysToInclude.length ;

    for (var i = 0; i < charArraysToInclude.length; i++) {
        finalPasswordArray = finalPasswordArray.concat(charArraysToInclude[i]) ;
    }
    
    console.log("finalPasswordArray is: " + finalPasswordArray)

    for (var i=0; i < charToBeAdded; i++){
        let randomNumber = Math.floor(Math.random() * finalPasswordArray.length) ;
        finalPassword.push(finalPasswordArray[randomNumber])
    }

    console.log("finalPassword is: " + finalPassword)

    finalPassword = finalPassword.join('') ;

    return finalPassword

}
