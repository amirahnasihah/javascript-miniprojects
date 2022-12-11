let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  // console.log(myLeads);
  // 2. Call the renderLeads() function
  renderLeads();
});

// 1. Wrap the code below in a renderLeads() function
const renderLeads = () => {
  let listItems = " ";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
    // console.log(listItems);
  }
  ulEl.innerHTML = listItems;
};
