$(document).ready(function() {
  $("h1").animate({
        'font-size' : '40px',
        'opacity': '1'
    }, 1500);

  $("h2").hide();
  
  $("img").click(function() {
    $("h2").show(1000);
  });
});