// passing functions as function input

let greet = function(greetMethod, name){
  greetMethod(name); // call the parameter then passing parameter as argument
}

let hello = function(name){
  console.log("Hello, " + name);
}

let morning = function(name){
  console.log("Morning, " + name);
}


var user1 = "Cesc";
var time = 9;

if (time < 12) {
  // calling function
  greet(morning, user1 + "\n"); // call greet function, then passing the morning function as argument and user1 variable as argument
}
else {
  greet(hello, user1 + "\n"); // call greet function and passing the hello function as argument into the function greet body
}

// morning Cesc



/////////////////////////////////

const greeting = (name, greetingFunction) => greetingFunction(name);

const sayHello = name => console.log("Hello, " + name)

const sayGoodMorning = name => console.log("Good Morning, " + name);

// caller function ↓

greeting("Lucio", sayHello);
// call function then pass 2 arguments name "Lucio", function sayHello into greeting function.
// parameter: name | value: "Lucio"
// parameter: greetingFunction | value: sayGoodMorning function

greeting("Lucio", sayGoodMorning);
// parameter: name | value: ""