let count = 0;
let countEl = document.getElementById("count-el");
// saveEl also can be store in global variable here
// saveEl = document.getElementById("save-el")
// <p id="save-el"> 

// arrow function for INCREMENT
let increment = () => {
    count += 1; // add by 1 once the increment button clicked
    countEl.textContent = count;
}

// traditional function for SAVE the previous count
function save() {
    // a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - ";

    // Grab the save-el paragrah & render the variable in the saveEl using innerText, add += to include the text Previous entries: 
    document.getElementById("save-el").textContent += countStr;

    // when click save btn, the countEl start to 0
    countEl.textContent = 0;
    count = 0;
}

// innerText alternative mdn
// .innerText vs .textContent
/*
The textContent property of the Node interface represents the text content of the node and its descendants.

https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
*/