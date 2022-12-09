# Chrome Extension

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