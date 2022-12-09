// HINT BY SCRIMBA

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
let passwordOneEl = document.getElementsById("password-one");
let generateButtonEl = document.getElementsById("btn");

// generate random one char only.
const getRandomChar = () => {
  const randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};
// console.log(getRandomChar()); // only one random char

// to get 15 diff characters in concat format or all char -- need to loop them in an array
let passwordLength = 15;

const generatePassword = () => {
  let randomPassword = " ";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomChar();
  }
  return randomPassword;
};

const generatedPasswordOne = generatePassword();
console.log("Here is a random password: ", generatedPasswordOne);
