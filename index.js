// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// Refactor to addEventListener

let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
  console.log("button clicked from addEventListener");
});
