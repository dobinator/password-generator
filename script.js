
//arrays for password
var lowerCase= [ "a", "b", "c", "d,","e", "f", "g", "h","i", "j", "k","l" ,
          "m", "n","o","p","q","r", "s","t","u","v","w", "x", "y", "z"];

var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", 
           "M", "N", "O", "P", "Q","R","S","T", "U", "V", "W", "X", "y", "Z"];

var numeric=["0","1","2","3","4","5","6","7","8","9"];

var symbols= ["?","!","@","#","$","%","^","&","*"]

//Retrieve a reference to the button with the id of generate
var generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.value=password; 
//write password to the #password input
function writePassword(){
  var password= generatePassword();
  var passwordText= document.querySelector("#password");
}

function generatePassword(){
//prompt user for password length
//make sure the password length between 8-128 characters(inclusive)
if (length< 8 || length > 128){
  alert ("invalid length");
  return "hello I am the new password:)"; 
}
var length = 10;

// Using a confirm prompt the user for symbols characters
// Using a confirm prompt the user for numeric characters
// Using a confirm prompt the user for uppercase characters
// Using a confirm prompt the user for lowercase characters
var symbols = true;
var numeric = true;
var lowerCase = true;
var upperCase = true; 

// creating the strings for the query
var password= "";

for (let i = 0; i < length ; i++) {
  if (symbols) {
     password+= getRandomItem(symbols);
  }
  if (numeric) {
    password += getRandomItem(numeric);
  }
  if (lowerCase) {
     password += getRandomItem(lowerCase);
     }
  if (upperCase) {
    password += getRandomItem(upperCase);
  }
 }
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
  return arr[randomIndex];
// One liner of the above code
//return arr [Math.floor(Math.random() * arr.length)];

}
