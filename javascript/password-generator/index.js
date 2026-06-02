const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwd1 = document.getElementById("pwd1");
let pwd2 = document.getElementById("pwd2");

pwd1.style.display = "none";
pwd2.style.display = "none";

function generatePassword(length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

function changePassword() {
  let pwdLength = document.getElementById("pwd-length").valueAsNumber;
  let displayError = document.getElementById("error-msg");

  if (pwdLength <= 0 || isNaN(pwdLength)) {
    displayError.textContent = "Password length should be greater than zero!";

    pwd1.style.display = "none";
    pwd2.style.display = "none";

    return;
  }

  displayError.textContent = "";

  pwd1.style.display = "inline-block";
  pwd2.style.display = "inline-block";

  pwd1.textContent = generatePassword(pwdLength);
  pwd2.textContent = generatePassword(pwdLength);
}
