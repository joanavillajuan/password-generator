// Assignment code here
var minLength = 8;
var maxLength = 128;
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

generatePassword = function () {
  var confirmedCharacters = [];

  // Ask user for password length

  var passwordlength = window.prompt(
    "How many characters would you like your password to contain?"
  );

  if (passwordlength < minLength) {
    window.prompt("Password length must be at least " + minLength);
  } else if (passwordlength > maxLength) {
    window.prompt("Password length must be less than " + maxLength);
  }

  // when user click 'OK' for uppercase characters
  var upperCaseConfirm = window.confirm(
    "Click OK to confirm including uppercase characters"
  );
  if (upperCaseConfirm === true) {
    confirmedCharacters = confirmedCharacters.concat(upperCasedCharacters);

    console.log(confirmedCharacters);
  }
  // when user click 'OK' for lowercase characters
  var lowerCaseConfirm = window.confirm(
    "Click OK to confirm including lowercase characters"
  );
  if (lowerCaseConfirm === true) {
    confirmedCharacters = confirmedCharacters.concat(lowerCasedCharacters);

    console.log(confirmedCharacters);
  }
  // when user click 'OK' for numeric characters
  var numberConfirm = window.confirm(
    "Click OK to confirm including numeric characters"
  );
  if (numberConfirm === true) {
    confirmedCharacters = confirmedCharacters.concat(numericCharacters);

    console.log(confirmedCharacters);
  }
  // when user click 'OK' for special characters
  var specialCharacterConfirm = window.confirm(
    "Click OK to confirm including special characters"
  );
  if (specialCharacterConfirm === true) {
    confirmedCharacters = confirmedCharacters.concat(specialCharacters);

    console.log(confirmedCharacters);
  }

  var password = "";

  for (var i = 0; i < passwordlength; i++) {
    password +=
      confirmedCharacters[
        Math.floor(Math.random() * confirmedCharacters.length)
      ];
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
