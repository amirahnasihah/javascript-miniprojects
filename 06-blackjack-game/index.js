// Logic Blackjack: <21: happy | 21: partying | >21: sad

let cards = []; // array - ordered list of items
let sum = 0;
let hasBlackJack = false; // initially, player dont have BlackJack
let isAlive = false; // initially, player not yet starting
let message = " ";
let messageEl = document.getElementById("message-element");
let sumEl = document.getElementById("sum-element");
let cardEl = document.getElementById("card-element");

let player = {
	playerName: "Jane",
	playerChips: 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = playerName + ': £' + playerChips

console.log(cards); // to check if the card given earlier

// Make this function return a random number between 1 and 13
// if 1 (ace)     -> return 11 (worth 11)
// if 11-13 -> return 10
function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;

	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

const startGame = () => {
	isAlive = true; // starting the game
	// Generate two random numbers
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	// Re-assign the cards and sum variables so that the game can start

	cards = [firstCard,
		secondCard];
	sum = firstCard + secondCard;
	renderGame();
};

const renderGame = () => {
	// render out firstCard and secondCard
	sumEl.textContent = "Sum: " + sum;
	// render out ALL the cards we have
	cardEl.textContent = "Cards: ";
	// a for loop to render all cards
	for (let i = 0; i < cards.length; i++) {
		cardEl.textContent += cards[i] + " ";
	}

	if (sum <= 20) {
		message = "Do you want to draw a new card? 🙂";
	} else if (sum === 21) {
		message = "Wohoo! You've got Blackjack! 🥳";
		hasBlackJack = true;
	} else {
		message = "You're out of the game! 😭";
		isAlive = false;
	}

	// console.log(message);
	messageEl.textContent = message;
};

const newCard = () => {
	// Only allow the player to get a new card if she IS alive and does NOT have Blackjack
	if (isAlive === true && hasBlackJack === false) {
		console.log("Drawing a new card from the deck!");
		let card = getRandomCard();
		sum += card; // Add the new card to the sum variable
		cards.push(card); // Push the card to the cards array
		renderGame();
	}
};