$(document).ready(function() {
  $('#get_color').on('click', function(event) {
    event.preventDefault();
      $.post('/color', function(response) {
      $("ul li:nth-child(" + Math.floor( (Math.random()* 9 )+ 1)  + ")").css("background-color", response);
    })
  });
})