
//arrays for password
var lowerCase= [ "a", "b", "c", "d,","e", "f", "g", "h","i", "j", "k","l" ,
          "m", "n","o","p","q","r", "s","t","u","v","w", "x", "y", "z"];

var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", 
           "M", "N", "O", "P", "Q","R","S","T", "U", "V", "W", "X", "Y", "Z"];

var numeric=["0","1","2","3","4","5","6","7","8","9"];

var symbols= ["?","!","@","#","$","%","^","&","*"]

//Retrieve a reference to the button with the id of generate
var generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function writePassword(){
var password = generatePassword();
var passwordText = document.querySelector("#password");
//console.log (password)
//removing the commas  the password out of the array, after to the comma
password = password.join("");
//putting the password on the page
passwordText.value = password; 

//write password to the #password input

var isPasswordLength = "";
//defining the length for the "if" statement.
}

function generatePassword(){
//prompt user for password length
//make sure the password length between 8-128 characters(inclusive)
var length= prompt ("How can characters do you want between 8-128, do you want?");
//adding a return
if (length< 8 || length > 128){
  alert ("invalid length");
  return;
}
  
// Using a confirm prompt the user for symbols characters
// Using a confirm prompt the user for numeric characters
// Using a confirm prompt the user for uppercase characters
// Using a confirm prompt the user for lowercase characters

var getSymbols = confirm("Do you want symbols?");
var getNumeric = confirm("Do you want numeric?");;
var getLowerCase = confirm("Do you want lowerCase?");;
var getUpperCase = confirm("Do you want uppercase?");; 

//var result = confirm ("This is your new password.");
//if (result == true) {
 //alert ("This is your new password");
//}
//else {
//  ("invalid length");
//}

// creating the strings for the query
var password= [];
// for loop
for (let i = 0; i < length ; i++) {
  if (getSymbols) {
     password.push(getRandomItem(symbols));
  }
  if (getNumeric) {
    password.push(getRandomItem(numeric));
  }
  if (getLowerCase) {
     password.push(getRandomItem(lowerCase));
     }
  if (getUpperCase) {
    password.push(getRandomItem(upperCase));
  }
 }
  console.log (password)
 //return the built password
  return password.slice(0, length);
}

// Retrieve a random item from the provided array
function getRandomItem(arr) {
              // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
                    // round down our random index
  randomIndex = Math.floor(randomIndex);
                            // return the random item based off of our random index
  return arr[randomIndex];}
