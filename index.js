let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  // console.log(myLeads);
  // Clear out the input field when clicked save input button
  inputEl.value = "";
  renderLeads();
});

const renderLeads = () => {
  let listItems = " ";
  for (let i = 0; i < myLeads.length; i++) {
    listItems +=
      "<li><a target='_blank' href='" +
      myLeads[i] +
      "'>" +
      myLeads[i] +
      "</a></li>";
    // console.log(listItems);
  }
  ulEl.innerHTML = listItems;
};
