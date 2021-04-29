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
// Begin My Code
// ------------------------------------------------------------

//Main funtion will fetch input for prompt1, then fetch input for prompt2, then use inputs to make the password
function generatePassword() {
    let prompt1 = getPrompt1() ;
    let prompt2 = getPrompt2() ;
    let passWord = makePassword(prompt1, prompt2) ;
    return passWord
}


//Function to Get Prompt11
function getPrompt1() {
    let charLen = parseInt(prompt("Please choose password length between 8 and 128" + "\n" + "Enter as digit")) ;

    console.log(typeof(charLen)) ;

    //Validating character length and that entry isn't a word
   if (charLen >= 8 && charLen <= 128) {
       console.log(charLen + " is acceptable length") ;
   } else {
       alert("Please choose an appropriate length") ;
       return getPrompt1()
   }

   console.log("prompt1 has returned " + charLen)
   return charLen
}


// Function to get prompt2
function getPrompt2() {
    
    //Array to hold user choices
    let chosenCategories = [] ;

    let upperCase = confirm("Would you like to use uppercase?" + "\n" + "Select 'okay' for yes and 'cancel' for no") ;

    //If user selects 'okay', add character cattegory to the chosenCategories array
    if (upperCase === true) {
        upperCase = "upperCase"
        chosenCategories.push(upperCase) ;
        console.log(chosenCategories) ;
    }    

    let lowerCase = confirm("Would you like to use lowercase?" + "\n" + "Select 'okay' for yes and 'cancel' for no" ) ;

    if (lowerCase === true) {
        lowerCase = "lowerCase"
        chosenCategories.push(lowerCase) ;
        console.log(chosenCategories) ;
    }  

    let special = confirm("Would you like to use special characters?"  + "\n" + "Select 'okay' for yes and 'cancel' for no") ;

    if (special === true) {
        special = "special"
        chosenCategories.push(special) ;
        console.log(chosenCategories) ;
    }  

    let numbers = confirm("Would you like to use numbers?"  + "\n" + "Select 'okay' for yes and 'cancel' for no") ;

    if (numbers === true) {
        numbers = "numbers"
        chosenCategories.push(numbers) ;
        console.log(chosenCategories) ;
    }  

    //verify chosenCategories.length is at least one
    if (chosenCategories.length === 0) {
        alert("Please select at least one character type") ;
        getPrompt2() ;
    }

    console.log("prompt2 is returning: " + chosenCategories) ;
    return chosenCategories
    
}

//Character arrays available for making password
let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;

let numericalArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] ;

let specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?"] ;



//Function to use prompts to make password
function makePassword(prompt1, prompt2) {
    //The arrays that will be used in makeing this password
    let charArraysToInclude = [] ;
    //Arrays to be used will be joined into one array, finalPasswordArray
    let finalPasswordArray = [] ;
    //After the random selection, finalPassword will hold the characters for the final password
    let finalPassword = [] ;
    
    //If statements to gather desired arrays
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

    //To ensure that at least one character from each desired character category is included, we pick these first
    for (var i=0; i < charArraysToInclude.length; i++) {
        let randomNumber = Math.floor(Math.random() * charArraysToInclude[i].length) ;
        finalPassword.push(charArraysToInclude[i][randomNumber]) ;
    }

    console.log("Final Password thus far: " + finalPassword)

    //After adding one character for each cattegory, we need to calculate the remaining characters to be added
    let charToBeAdded = prompt1 - charArraysToInclude.length ;

    //For loop to combine the included haracter arrays into one big array
    for (var i = 0; i < charArraysToInclude.length; i++) {
        finalPasswordArray = finalPasswordArray.concat(charArraysToInclude[i]) ;
    }
    
    console.log("finalPasswordArray is: " + finalPasswordArray)

    //Randomly adding the remaining characters to the finalPassword
    for (var i=0; i < charToBeAdded; i++){
        let randomNumber = Math.floor(Math.random() * finalPasswordArray.length) ;
        finalPassword.push(finalPasswordArray[randomNumber])
    }

    console.log("finalPassword is: " + finalPassword)

    //Shuffle password for total randomness
    shufflePassword(finalPassword) ;

    console.log("shuffled password: " + finalPassword) ;

    //Convert final password from an array to one long string without commas
    finalPassword = finalPassword.join('') ;

    console.log("joined final password is: " + finalPassword) ;

    return finalPassword

}

//Durstenfeld Shuffle, a form of the Fisher-Yates shuffle

//Works by looping backwards through the array and randomly
//replacing last index with a lower index until all indexes have been replaced
function shufflePassword(array) {
    for (var i = array.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i+1)) ;
        var temp = array[i] ;
        array[i] = array[j] ;
        array[j] = temp ;
    }
}