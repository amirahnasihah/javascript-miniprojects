// OR -> ||

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = false;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie(); // no need return, as no values to be returned to
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}
