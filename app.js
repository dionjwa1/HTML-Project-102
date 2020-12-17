console.log ("Hi")

//Start Functions

function getUserPrompt(message) {
    var userInput = prompt(message);
    return userInput;
}

function entryValidation(){
    var storedPassword = "123";
    do {
    var passwd = getUserPrompt("Enter password");
    }while(passwd !== storedPassword)
}



function initialMessage(){
    var promptQuestion = "Do you like sunshine? Type 1 for yes or 2 for no";
    var response = prompt(promptQuestion);
    console.log (response);
    var reflected; 
    
    if (response === "1") {
        reflected = "Excellent Choice!";
    } else  {
       reflected = "Move to Seattle!";
    }

    setColorBasedOnInitialMessage(response);
    alert (reflected);
}

    // set color based on user reponse form initialMessage funcions
function setColorBasedOnInitialMessage(response){
    var color;
    if (response === "1"){
        color = "lightyellow";
    } else if (response === "2"){
        color = "lightblue";
    } else {
        color = "orange"
    }

    document.getElementById("body-color").style.backgroundColor = color;
}
    
function salutation(){
    var today = new Date;
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good Evening' +" " ;
    } else if (hourNow >12) {
        greeting = 'Good afternoon' +" ";
    } else if (hourNow > 0) {
        greeting = 'Good morning' +" ";
    } else {
        greeting = 'Welcome';
    } 

    document.getElementById("firstEntry").innerHTML = greeting;
}

function visitorName(){
   var customerName = prompt("Please enter your name", "");
   console.log (customerName);
    var name = customerName;
    var display;
    if (customerName!= null) {
        document.write("" + " "+ customerName);
}
}

function addSunShineToDocument(str){
    document.write("<section> \
                        <h2>" + str + "</h2> \
                        <img src=\"images/" + str + ".png\"> \
                        <p>" + str +  ".</p> \
                    </section>");
}

    
var addSunShine = prompt("How many suns do you want?");
for (var i= 0; i < addSunShine; i++){
    console.log(i);
    addSunShineToDocument("SmileySun");
}

function identry(){

    document.getElementById("firstEntry").innerHTML = visitorName;

}



// Start Calls

entryValidation();

initialMessage();

salutation();

visitorName();





// var promptQuestion = "Do you like sunshine? Type 1 for yes or 2 for no";
// var response = prompt(promptQuestion);
// console.log (response);
// var reflected;
// var alertMessage;
// var color;
//  if (response === "1") {
//      reflected = "That's right!";
//  } else  {
//     reflected = "Move to Seattle!"
// }
// alert (reflected)


// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//     greeting = 'Good Evening' +" " ;
// }
//     else if (hourNow >12) {
//         greeting = 'Good afternoon' +" ";}
//     else if (hourNow > 0) {
//         greeting = 'Good morning' +" ";}
//     else {
//         greeting = 'Welcome';
//  } document.write(greeting);

// var customerName = prompt("Please enter your name", "");
// var greeting = customerName;
// var display;
// if (customerName!= null) {
//     document.write("Welcome" + " "+ customerName); 
