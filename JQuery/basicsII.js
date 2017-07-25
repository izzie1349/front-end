$('h1').click(function() {
  console.log('there was a click!')
})

$('li').click(function(){
  console.log('any li was clicked!');
})

// suppose you want to change the heading H2
// everytime you click on it
$('h2').click(function(){
  $(this).text('i was changed!')
})

// Key Press
$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue')
})

// suppose you want certain actions
$('input').eq(0).keypress(function(event){
  if (event.which === 13) { //13  enter
    $('h3').toggleClass('turnBlue')
  }
})

// on() acts like addEventListener
$('h1').on('mouseenter', function(){
  $(this).toggleClass('turnBlue') // this keyword refers to element
})

// effects and animations
$('input').eq(1).on('click', function(){
  $('.container').fadeOut(3000)
})

$('input').eq(1).on('click', function(){
  $('.container').slideUp(3000)
})
