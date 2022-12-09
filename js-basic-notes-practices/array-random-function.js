let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array : string[]
// 1. need to generate random index that going to use in order to fetch the rock,paper,scissor.
// 2. multiply 3 because the array length is 3.

const getHand = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  // return randomIndex => for debugging purposes
  return hands[randomIndex];
};

console.log(getHand()); // get random hands array

// const randomIndex = Math.floor(Math.random() * hands.length);
