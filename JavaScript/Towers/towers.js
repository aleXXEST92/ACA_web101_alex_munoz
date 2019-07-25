console.log("hello")
$(function() {
  let $square = 0;
  
  $('.row').click(function() {
    if ($square) {
      $(this).append($square);
      $square = 0;
    } else {
      $square = $(this).children().last().detach();
    }
  })
})
