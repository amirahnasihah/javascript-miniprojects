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



```javascript
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
  console.log("button clicked from addEventListener");
});
```

can remove `onclick="saveInput()"` on html file.