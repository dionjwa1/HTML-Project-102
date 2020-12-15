console.log ("Hi")

// var weatherTest = "Sunshine is fine!";
// console.log(weatherTest);



var promptQuestion = "Do you like sunshine? Type 1 for yes or 2 for no";
var response = prompt(promptQuestion);
console.log (response);
var reflected;
 var alertMessage;

 if (response === "1") {
     reflected = "That's right!";
 } else  {
    reflected = "Move to Seattle!"

}
alert (reflected)

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening';
}
    else if (hourNow >12) {
        greeting = 'Good afternoon';}
    else if (hourNow > 0) {
        greeting = 'Good morning';}
    else {
        greeting = 'Welcome';
 } document.write(greeting);

var customerName = prompt("Please enter your name", "");
var greeting = customerName
var display 
if (customerName!= null) {
    document.write("welcome" + customerName)
}

Element.style.color = green;0.