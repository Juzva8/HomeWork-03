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

      const randomFunc = 
      {
        lower: getRandomLower;
        upper: getRandomUpper;
        number: getRandomNumber;
        special: getRandompecial;    

      }

      
      // var specialCarater = ["!", "#", "$", "%", "'", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^",]; 
      // var capitalCharacters = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
      // var lowerCharacters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,]; 
      // var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

      var specialCarater = prompt("How many characters would you like your password to contain?");

      if specialCarater.prompt < 8 {
        alert(" password length must be at least 8 characters");
        reWriteStats();        
      }
      // not sure if this will work :
      confirm("Click OK to confirm including special characters");

      confirm("Click OK to confirm including numeric characters");

      confirm("Click OK to confirm including lowercase characters");

      confirm("Click OK to confirm including uppercase characters");

      function getRandomSpecial () {
        return specialCarater[Math.floor(Math.random( * specialCarater.length))];
      }
      
      