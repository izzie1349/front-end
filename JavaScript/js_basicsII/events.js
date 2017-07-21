var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

// console.log('connected');

headOne.addEventListener('mouseover', function() {
  headOne.textContent = "Mouse crrently over";
  headOne.style.color = 'red';
})

headOne.addEventListener("mouseout", function() {
  headOne.textContent = "Hover over me";
  headOne.style.color = 'black';
})




headTwo.addEventListener('click', function() {
  headTwo.textContent = "clicked on"
  headTwo.style.color = "blue"
})

headTwo.addEventListener("mouseout", function() {
  headTwo.textContent = "Click me";
  headTwo.style.color = 'black';
})




headThree.addEventListener('dblclick', function() {
  headThree.textContent = "I was double clicked"
  headThree.style.color = "red"
})
