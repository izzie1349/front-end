// FOR LOOPS


for (var i = 0; i < 5; i++) {
  console.log("number is " + i);
}

var word = "ABCDEFGHIJK"
for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}

var word = "ABABABABABABABAB"
for (var i = 0; i < word.length; i=i+2) {
  console.log(word[i]);
}

// print "hello" 5 times
var w = "hello"
for (var i = 0; i < 5; i++) {
  console.log(w);
}

var i = 1;
while (i<6) {
  console.log(w);
  i++
}

// PRINT ODD NUMBS 1-25

for (var i = 1; i < 26; i++) {
  if (i%2 != 0){
    console.log("im odd: " + i)
    }
  }

var i = 1;
while (i<26) {
  if (i%2 != 0) {
    console.log("im odd: " + i);
  }
  i++
}
