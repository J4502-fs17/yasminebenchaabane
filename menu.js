$(document).ready(function() {
  $("#nav").click(function(){
    $("nav ul").slideToggle(500);
  });

  $(window).resize(function() {
    if ( $(window).width() > 500 ) {
      $("nav ul").removeAttr("style");
    }
  });
});
