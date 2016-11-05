function getIt(){
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt(){
  $(document).on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $(document).on('keydown', function(event){
    var key = parseInt(event.detail || event.which)
    if (key === 71)  {
      alert('Yay! You pressed the right letter.')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}





$(document).ready(function(){

getIt()
frameIt()
submitIt()
pressIt()

});
