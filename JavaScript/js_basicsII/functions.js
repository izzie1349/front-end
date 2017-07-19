function hello() {
  console.log("Hello World!");
  }

function helloYou(name) {
  console.log("Hello " + name);
}

function addNum(num1, num2) {
  console.log(num1+num2);
}

// DEFAULT PARAM
function helloSomeone(name="frankie") {
  console.log("hello " + name);
}

function formal(name="sam", title="sir") {
  // console.log(title + " " + name);
  return title + " " + name
}

function timesFive(numInput) {
  // local scope
  var result = numInput*5
  return result
}

// global scope
var v = "global var"
var stuff = "global stuff"

function fun(stuff) {
  console.log(v);
  stuff = "reassign stuff inside func"
  console.log(stuff);
}

fun();
console.log(stuff);
