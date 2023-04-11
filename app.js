// Ask the user to enter his/her name as input
const name = prompt("Please enter your name");

// Ask the user to enter his/her gender as input
const gender = prompt("Please enter your gender (male or female)");

// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero
let age = prompt("Please enter your age");
if (age <= 0) {
  alert("Invalid age. Please enter a valid age.");
}

// Ask the user to confirm if he wants to skip the welcoming message
const skipMessage = confirm("Do you want to skip the welcoming message?");

// Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title, according to the confirmation
let welcomeMessage;
if (gender === "male") {
  welcomeMessage = "Welcome, Mr " + name + "!";
} else if (gender === "female") {
  welcomeMessage = "Welcome, Ms " + name + "!";
} else {
  welcomeMessage = "Welcome, " + name + "!";
}

if (!skipMessage) {
  alert(welcomeMessage);
}
