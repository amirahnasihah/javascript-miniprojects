let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Log out ALL the items in the myLeads array using a for loop
for (let i = 0; i < myLeads.length; i++) {
  const element = myLeads[i];
  console.log(element);
}
