var studentRoster = []
var response = prompt("would you like to start the roster app? (y/n)")

while (response == "y") {
  var action = prompt('Please select an action: add, remove, display, or quit')

  if (action == "add") {
    var nameAdd = prompt("what name would yo like to add?")
    studentRoster.push(nameAdd)
  }
  else if (action == "remove") {
    var nameRemove = prompt("what name would yo like to remove?")

    for (var i=0; i < studentRoster.length-1; i++){
      if (studentRoster[i] === nameRemove) {
        studentRoster.splice(i,1);
      }
    }
  }
  else if (action == "display") {
    console.log(studentRoster);

  }
  else if (action == "quit") {
    break
  }
}

alert("Thanks fo visiting--refresh the page to start over!")
