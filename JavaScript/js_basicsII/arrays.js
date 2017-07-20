var studentRoster = []
var response = prompt("would you like to start the roster app? (y/n)")

function addName() {
  var newName = prompt("what name would yo like to add?")
  studentRoster.push(newName)
}

function removeName() {
  var searchName = prompt("what name would you like to remove?")
  for (var i=0; i<studentRoster.length-1; i++) {
    if (studentRoster[i] === searchName) {
      studentRoster.splice(i, 1)
    }
  }
}

function display() {
  console.log(studentRoster);
}

while (response=="y") {
  var action = prompt('Please select an action: add, remove, display, or quit')

  if (action=="add") {
    addName()
  }
  else if (action=="remove") {
    removeName()
  }
  else if (action=="display") {
    display()
  }
  else if (action=="quit") {
    break
  }
}
alert("Thanks fo visiting--refresh the page to start over!")
