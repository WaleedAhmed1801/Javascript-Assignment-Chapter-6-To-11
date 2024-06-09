//  -------------------------- Chapter 6 To 11 Assignment Started ------------------- 

//  -------------------------------- Question # 1 -------------------------------------

var cities=["karachi", "punjab", "lahore", "islamabad", "multan",]
var user = prompt("Enter Your City Name")

if(user === cities[0]){
    alert('Welcome To City Of Light')
 }
 else if(user === cities[1]){
    alert('Welcome To City Of Gold')
 }
 else if(user === cities[2]){
    alert('Welcome To City Of Guardens')
 }
 else if(user === cities[3]){
    alert('Welcome To Cleanest City')
 }
 else if(user === cities[4]){
    alert('Welcome To City Of Saints')
 }
 else{
   alert ("city not found")
 }

// -------------------------------- This Task Completed Here ---------------------------


//  -------------------------------- Question # 2 -------------------------------------

var gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma’am.");
} else {
    console.log("Sorry, I didn't recognize your gender.");
}

// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 3 -------------------------------------

var color = prompt("Enter the color of the road traffic signal (red, yellow, green):");

if (color.toLowerCase() === "red") {
    console.log("Stop! The signal is red.");
} else if (color.toLowerCase() === "yellow") {
    console.log("Ready to move! The signal is yellow.");
} else if (color.toLowerCase() === "green") {
    console.log("Go! The signal is green.");
} else {
    console.log("Invalid color entered.");
}

// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 4 -------------------------------------

var remainingFuel = prompt("Enter the remaining fuel in your car in litres")
            
if (remainingFuel <= 0.25) {
        console.log("Please refill the fuel in your car.");
}
else{
    console.log("Enjoy! " + remainingFuel + " Liters fuel in your car.");
}

// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 5 --------------------------------------

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}
// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 6 --------------------------------------

var english = +prompt(" Enter Marks Obtained In English ")
var urdu = +prompt(" Enter Marks Obtained In Urdu ")
var islamiat = +prompt(" Enter Marks Obtained In Islamiat ")
var physics = +prompt(" Enter Marks Obtained In Physics ")
var biology = +prompt(" Enter Marks Obtained In Biology ")

var totalMarks = +prompt(" Enter Total Marks")

var totalObtainedMarks = english + urdu + islamiat + physics + biology

var percentage = (totalObtainedMarks / totalMarks) * 100;

var grade;
if (percentage >= 80) {
    grade = 'A+';
} else if (percentage >= 70) {
    grade = 'A';
} else if (percentage >= 60) {
    grade = 'B';
} else if (percentage >= 50) {
    grade = 'C';
} else if (percentage >= 40) {
    grade = 'D';
} else {
    grade = 'Fail';
}

document.write("<h2> Result </h2>");
document.write("<p> Total Marks: " + totalMarks + "</p>");
document.write("<p> Marks Obtained: " + totalObtainedMarks + "</p>");
document.write("<p> Percentage: " + percentage.toFixed(2) + "% </p>");
document.write("<p> Grade: " + grade + "</p>");

var remarks;
if (grade === 'Fail') {
    remarks = "Sorry, you have failed the exam.";
} else {
    remarks = "Congratulations!";
}
document.write("<p> Remarks: " + remarks + "</p>");

// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 7 --------------------------------------

var secretNumber = Math.floor(Math.random() * 10) + 1;
var guess = +prompt("Guess the secret number (between 1 and 10):");

if (guess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Sorry, incorrect guess");
}

// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 8 --------------------------------------

var number = +prompt("Enter a number:");

if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 3.");
}

// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 9 --------------------------------------

var number = +prompt("Enter a number:");

if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 10 --------------------------------------

var temperature = +prompt("Enter the temperature:");

if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("The temperature is extremely cold!");
}

// -------------------------------- This Task Completed Here ---------------------------


// -------------------------------- Question # 11 --------------------------------------

var firstNumber = +prompt("Enter the first number:");
var operater = prompt("Enter the operation (+, -, *, /, %):");
var secondNumber = +prompt("Enter the second number:");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;

} else if (operation === "-") {
    result = firstNumber - secondNumber;

} else if (operation === "*") {
    result = firstNumber * secondNumber;

} else if (operation === "%") {
    result = firstNumber % secondNumber;

} else if (operation === "/") {
    if (secondNumber === 0) {
        console.log("Error! Division by zero.");
    } else {
        result = firstNumber / secondNumber;
    }
} else {
    console.log("Invalid operation entered.");
}

if (result !== undefined) {
    console.log("Result: " + result);
}

// -------------------------------- This Task Completed Here ---------------------------

// --------------------- Chapter 6 To 11 Assignment Completed -------------------------------