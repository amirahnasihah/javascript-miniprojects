# Chrome Extension

- [Chrome Extension](#chrome-extension)
  - [make input button work w/ onclick()](#make-input-button-work-w-onclick)
  - [refactor to addEventListener()](#refactor-to-addeventlistener)
  - [let and const](#let-and-const)
  - [push the value from input field](#push-the-value-from-input-field)
  - [use for loop to log out leads](#use-for-loop-to-log-out-leads)
  - [render the leads in ul list](#render-the-leads-in-ul-list)
  - [render `<li>` elements with `innerHTML`](#render-li-elements-with-innerhtml)
  - [innerHTML](#innerhtml)
  - [render `<li>` elements with innerHTML 2](#render-li-elements-with-innerhtml-2)
  - [use createElement() and append() instead of innerHTML](#use-createelement-and-append-instead-of-innerhtml)
  - [improve performance](#improve-performance)
  - [create the render function, renderLeads()](#create-the-render-function-renderleads)
  - [clear the iinput field](#clear-the-iinput-field)
  - [add `<a>` tag](#add-a-tag)
  - [template string](#template-string)
  - [template strings more](#template-strings-more)
  - [template strings on multiple lines](#template-strings-on-multiple-lines)

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

## render `<li>` elements with `innerHTML`

The innerHTML property sets or returns the HTML content (inner HTML) of an element.

```javascript
for (let i = 0; i < myLeads.length; i++) {
  // render the list
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

  // concat the list as a string
  ulEl.textContent += "<li>" + myLeads[i] + "</li>";
}
```

## innerHTML

When clicked, render a paragraph under the button (in the container) that says "Thank you for buying!"

- if only `=` symbol we just clear out the innerHTML bcs we want it to equal to that value only.
- to attach, add `+=` symbol

```javascript
const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"

const buy = () => {    
    container.innerHTML += "<p>Thank you for buying!</p>"
}
```

## render `<li>` elements with innerHTML 2

```javascript
for (let i = 0; i < myLeads.length; i++) {
  const element = myLeads[i];
  ulEl.innerHTML += "<li>" + element + "</li>";
}
```

## use createElement() and append() instead of innerHTML

different method!

1. create element
2. set text content
3. append to ul

```javascript
for (let i = 0; i < myLeads.length; i++) {
  // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
}
```

## improve performance

1. Create a variable, listItems, to hold all the HTML for the list items
2. Assign it to an empty string to begin with
3. Add the item to the listItems variable instead of the ulEl.innerHTML => will running 3 times as in the myLeads array.
4. Render the listItems inside the unordered list using ulEl.innerHTML

```javascript
let listItems = " ";

for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li>";
  console.log(listItems);
}

ulEl.innerHTML = listItems;
```

- use `let` because we want to reassign the empty string to the new list

If struggling to remember as to whether or not the performance way was to do `.innerHTML` inside of the loop or outside of the loop, you can remember this sentence DOM manipulation comes with a cost.

> DOM manipulation comes with a cost
>
> if it comes with a cost is it best to manipulate the DOM, namely, using innerHTML three times inside of the for loop? Or is it best to just do it one time outside of the for loop? Well, if it has a cost, you'd prefer to do it one time than three times. So just remember that DOM manipulation has a cost and look at your code.

## create the render function, renderLeads()

1. Wrap the code below in a renderLeads() function
2. Call the renderLeads() function

```javascript
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
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
```

## clear the iinput field

Google how? -> clear input value with javascript

sauce: [stackoverflow](https://stackoverflow.com/questions/17237772/html-how-to-clear-input-using-javascript) | [w3schools](https://www.w3schools.com/howto/howto_html_clear_input.asp)

> the use of `target.value`

EXAMPLE:

```html
<button onclick="document.getElementById('myInput').value = ''">Clear input field</button>
<input type="text" value="Blabla" id="myInput">
```

Clear out the input field when clicked Save Input button

```javascript
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  // Clear out the input field when clicked save input button
  inputEl.value = "";
  renderLeads();
});
```

## add `<a>` tag

since we try build chrome extension that save the website link.

the arrayleads need to be in URL format. {complicated}

`<a href=""></a>`

```javascript
const renderLeads = () => {
  let listItems = " ";
  for (let i = 0; i < myLeads.length; i++) {
    listItems +=
      "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
    // console.log(listItems);
  }
  ulEl.innerHTML = listItems;
};
```

## template string

to simplify it and avoid using these mix of single and double quotes and all of this plus signs above. template string will solve this.

> template strings, or template literals

the way you turn a normal string into template strings by replacing the quotes that wrap the string with backticks (`) instead

> template string: use back quote/ back tick ( ` )

```javascript
listItems += `"<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"`
```

this is no longer a JavaScript expression. It's just a string.

benefits:
- can break it into multiple lines

the `$` sign = JavaScript expression. This is how you kinda escape out of the string, and put a JavaScript expression into the string. can replace single quotes with double quotes.

```javascript
listItems += `<li><a target="_blank" href="${myLeads[i]}"> + myLeads[i] + </a></li>`;
```

## template strings more

Refactor the email string to use template strings.

```javascript
const recipient = "James";
const sender = "John";

const email = `Hey ${recipient}! How is it going? Cheers ${sender}`;

console.log(email); // Hey James! How is it going? Cheers John
```

## template strings on multiple lines

Break the email string into multiple lines

```javascript
const recipient = "James";
const sender = "John Doe Mozart";

const email = `Hey ${recipient}!
How is it going? Cheers
${sender}`;

console.log(email);

// Hey James!
// How is it going? Cheers
// John Doe Mozart
```

console:

```bash
Hey James!
How is it going? Cheers
John Doe Mozart
```