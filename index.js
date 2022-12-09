let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Push the value "www.awesomelead.com" to myLeads when the input button is clicked
inputBtn.addEventListener("click", () => {
  myLeads.push("www.awesomelead.com");
  console.log(myLeads);
});
