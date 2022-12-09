# Chrome Extension

- [Chrome Extension](#chrome-extension)
  - [make input button work w/ onclick()](#make-input-button-work-w-onclick)
  - [refactor to addEventListener()](#refactor-to-addeventlistener)
  - [let and const](#let-and-const)
  - [push the value from input field](#push-the-value-from-input-field)
  - [use for loop to log out leads](#use-for-loop-to-log-out-leads)
  - [render the leads in ul list](#render-the-leads-in-ul-list)

## make input button work w/ onclick()

this way of writing event listeners, where we define a function and trigger it via the onClick attribute in the HTML.

```javascript
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
const saveInput = () => {
  console.log("Button clicked!");
};
```

##  refactor to addEventListener()

a different technique, by first grabbing a ID of the element, we want to hook an event listener onto.

first parameter is = specify what kind of event I want to listen for.
second parameter = to define what are we going to do when someone clicks on this input in order to invoke that function, where we write it to the function. this function executed when the user clicks on this input button.

```javascript
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
  console.log("button clicked from addEventListener");
});
```

can remove `onclick="saveInput()"` on html file.

## let and const

`const` cannot be reassigned => constant

**when to use let and const**

If possible, use const. If not, use let.

## push the value from input field

Push the value "www.awesomelead.com" to myLeads when the input button is clicked.
Google -> "get value from input field javascript"

```javascript
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
  // myLeads.push("www.awesomelead.com");
  myLeads.push(inputEl.value);
  console.log(myLeads);
});
```
## use for loop to log out leads

Log out ALL the items in the myLeads array using a for loop

```javascript
for (let i = 0; i < myLeads.length; i++) {
  const element = myLeads[i];
  console.log(element);
}
```

## render the leads in ul list

Render the leads in the unordered list using ulEl.textContent

```javascript
for (let i = 0; i < myLeads.length; i++) {
  const element = myLeads[i];
  ulEl.textContent += element + " "; // with `+=` we render all items
}
```