let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍎", "🍊", "🍎"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
// treat emojis as normal string.

const sortFruits = () => {
  for (let i = 0; i < fruit.length; i++) {
    // const element = fruit[i];
    if (fruit[i] === "🍎") {
      // display on browser
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊"; // render on browser
    }
  }
};

sortFruits();

// fruit[i] => display each fruit.
// `+=` => to attach the fruit to browser.
// `=` => just show one fruit only
// console.log for debug; not show on browser
