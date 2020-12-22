

var specialCarater = ["!", "#", "$", "%", "'", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^",]; 
var capitalCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


      function getRandomSpecial (array) {
        var specialCarater = Math.floor(Math.random() * array.length);
        var randomCharacter = array[specialCarater]
        return randomCharacter;
      }
    function passwordOptions()
    {   var length = parseInt (prompt("How many characters would you like your password to contain?") 

    )    
        if (length < 8) {
          alert("password should be longer than 8 characters!  ");
        return; 
        }
        if (length > 128) {
          alert("password should be shorter than 128 characters!  ");
        return; 
        }
        var hasSpecialCharacters = confirm("Click OK to confirm including special characters");
   
        var hasNumericCharacters = confirm("Click OK to confirm including numeric characters");
   
        var hasLowercaseCharacters = confirm("Click OK to confirm including lowercase characters");
   
        var hasUppercaseCharacters = confirm("Click OK to confirm including uppercase characters");
        
        var passwordImput = {
          length: length,
          hasSpecialCharacters: hasSpecialCharacters,
          hasLowercaseCharacters: hasLowercaseCharacters,
          hasUppercaseCharacters: hasUppercaseCharacters,
          hasNumericCharacters: hasNumericCharacters, 
        }
          return passwordImput;
      }

          function generatePassword (){
          var options = passwordOptions() 
          var possible = []        
          var guaranteed = []
          var randompassword = []
          if (options.hasLowercaseCharacters){
            possible = possible.concat(lowerCharacters)
            guaranteed.push(getRandomSpecial(lowerCharacters))
          }
            if (options.hasSpecialCharacters){
              possible = possible.concat(specialCarater)
              guaranteed.push(getRandomSpecial(specialCarater))
            }
              if (options.hasUppercaseCharacters){
                possible = possible.concat(capitalCharacters)
                guaranteed.push(getRandomSpecial(capitalCharacters))
              }
                if (options.hasNumericCharacters){
                  possible = possible.concat(numberCharacters)
                  guaranteed.push(getRandomSpecial(numberCharacters))
                }
               

          for(var i = 0; i < guaranteed.length; i++){
            randompassword[i] = guaranteed[i]
          }

          for(var i = 0; i < options.length; i++){
            possibleCharacter = getRandomSpecial(possible) 
            randompassword.push(possibleCharacter)
          }
          return randompassword.join("");
          }
  
var generateBtn = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
}
generateBtn.addEventListener("click", writePassword)