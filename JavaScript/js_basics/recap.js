var firstName = prompt("what is your first name?")
var lastName = prompt("what is your last name?")
var age = prompt("what is your age?")
var height = prompt("what is your height(cm)?")
var petName = prompt("what is your pets name?")

var petNameLength = petName.length

if ((firstName[0] === lastName[0]) &&
    (20 < age < 30) &&
    (height>=170) &&
    (petName[petNameLength-1] === "y")
    ) {
      console.log("secret message");

} else {
  console.log("nothing to see here")
}
