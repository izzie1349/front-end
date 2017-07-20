// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

var employee1 = {
  name : "John Smith",
  job : "Programmer",
  age : 31,
  nameLength : function() {
    console.log(this.name.length);
  }
}

///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee2 = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

function alertBrowser() {
  nameAlert = alert("Name is " + employee2['name'])
  jobAler = alert("Job is " + employee2['job'])
  ageAlert = alert("Age is " + employee2['age'])

}



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee3 = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName : function() {
    var arr = this.name.split(" ", this.name.length);
    console.log("Last name: " + arr[1]);
  }
}
