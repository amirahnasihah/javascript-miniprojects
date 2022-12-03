# Logic Blackjack: <21: happy | 21: partying | >21: sad

**ternary operator**

```javascript
sum <= 20
  ? console.log("Do you want to draw a new card? 🙂")
  : sum === 21
  ? console.log("Wohoo! You've got Blackjack! 🥳")
  : console.log("You're out of the game! 😭");
```

> CASH OUT!

- **logic**: want to cash out but, js does not knowing/remember which console log out. so -- need create new var that keeps track of this state of the game; how player won/lost.

- var that reflect whether or not a player has a blackjack. whether or not || yes or no -> boolean `console.log(hasBlackJack);`

## getRandomCard Logic

In Blackjack, the Jack, Queen, King are worth 10. The Ace is worth 11.

We have 13 cards starting from the Ace [1]

Ace = 11 || 1; Jack = 11; Queen = 12; King = 13
Other card number considered random.

## innerText vs. innerHTML vs. textContent

`textContent` is all text contained by an element and all its children that are for formatting purposes only. `innerText` returns all text contained by an element and all its child elements. `innerHtml` returns all text, including html tags, that is contained by an element.

# How can we avoid to hard-code card values?

- use a function/method call `getRandom()`

**Math object**
the use of built-in function -- `Math.random()`

What does Math.random() do?

answer: it generates a random number between 0 and 1 (not inclusive of 1)

# DEMO




