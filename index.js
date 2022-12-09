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

// render to browser
let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");

const generatePassword = () => {
  let password = ["", ""]; // generate two random password [0,1]
  let passwordLength = 15; // generate a 15 char password

  for (let i = 0; i < passwordLength; i++) {
    const randomIndexOne = Math.floor(Math.random() * characters.length); //get random only one char.
    const randomIndexTwo = Math.floor(Math.random() * characters.length);
    password[0] += characters[randomIndexOne];
    password[1] += characters[randomIndexTwo];
  }

  passwordOneEl.textContent = password[0];
  passwordTwoEl.textContent = password[1];
};

// DARK MODE
let isDarkMode = true;

function changeLightDarkTheme() {
  if (isDarkMode) {
    isDarkMode = false;
    document.body.style.background = "#1C1C1C";
    document.querySelector("h1").style.color = "#1C1C1C";
    document.querySelector(".supporting-text").style.color = "#1F2937";
    document.querySelector(".container").style.backgroundColor = "#ECFDF5";
  } else {
    isDarkMode = true;
    document.body.style.background = "#1C1C1C";
    document.querySelector("h1").style.color = "white";
    document.querySelector(".supporting-text").style.color = "#D5D4D8";
    document.querySelector(".container").style.backgroundColor = "#1F2937";
  }
}
