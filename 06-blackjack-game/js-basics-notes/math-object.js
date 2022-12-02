let randomNumber = Math.random() * 6;

console.log(randomNumber);

/* 

1. What does Math.random() do?

answer: it generates a random number between 0 and 1 (not inclusive of 1)
from: 0.000 -> 0.999

2. In which range will our randomNumber be now?

Math.random() * 6:
From: 0.0000
To: 5.9999

*/

//----------------------

// let randomNumber = Math.random() * 6

let flooredNumber = Math.floor(3.45632);

console.log(flooredNumber);

/* 

What does Math.floor() do to positive numbers?

answer: it removes the decimals

*/

// ----------------------------

let randomNumber1 = Math.floor(Math.random() * 6);

console.log(randomNumber);

/* 

1. Write down all the possible values randomNumber can hold now!

answer: got number from 0 to 5.
0,1,2,3,4,5


2. how we get a range from 1 to 6?

answer: let randomNumber = Math.floor( Math.random() * 6 ) + 1;


*/
