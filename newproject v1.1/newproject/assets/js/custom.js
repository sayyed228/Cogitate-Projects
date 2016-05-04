"use strict";



$(document).ready(function() {
	

	
$('#myCarouselTwo').carousel({
    interval: 7000
});


$('.carousel-indicators li').click(function(){
  $(this).removeClass('hvr-float-shadow');
}); 

	
  var winHeight = $(window).height();	
	$('.home').height(winHeight);
	
	var ballonsix = winHeight;
	$('.ballonSix').css("top",ballonsix+'px');
	$('.ballonSix').css("margin-top",'-430px');
	//alert(ballonsix);
  });
 
 



var display_backtotop = 200; // Scrolled pixels from top until the link appears

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > display_backtotop) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  
  $(document).on("click", ".scroll-top", function(e) {
    $("html, body").animate({scrollTop: 0}, 1500);
    
    e.preventDefault();
  });
});