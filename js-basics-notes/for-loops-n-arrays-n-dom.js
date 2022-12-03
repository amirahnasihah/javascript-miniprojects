let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
let sentence2 = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

// if no `+=` sign, just Per only rendered bcs first, `.textContent` render Hello, then clears up all the textContent, then render second word -- every single time in this loop it will clear out the content which end up having last iteration; Per.
// so -- need to keep previous content(`sentence`) intact inside the <paragraph> -- add `+=`

// sentence2 has no space in the array -- add `+ " "`
// concatenate given item in array (sentence2) with a space.

for (let i = 0; i < sentence.length; i++) {
  console.log(sentence[i]);
  greetingEl.textContent += sentence[i] + " ";
}
