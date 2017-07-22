$(document).ready(function(){
    /* NAVBAR CAMBIO DE COLOR */
     $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar-fixed").css("background" , "white");
	    $(".navbar-fixed").css("box-shadow" , "1px 5px 10px #888888");
	    $(".logo-hestia").css("color" , "#494949");
	    $(".menu-txt").css("color", "#494949");
	  }

	  else{
		$(".navbar-fixed").css("background" , "transparent");
		$(".navbar-fixed").css("box-shadow" , "none");
		$(".logo-hestia").css("color" , "white");
	    $(".menu-txt").css("color", "white");
	  }
  })


    /* DROPDOWN */
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
    /* CARRUSEL */
    $('.slider').slider();
	// Pause slider
	$('.slider').slider('pause');
	// Start slider
	$('.slider').slider('start');
	// Next slide
	$('.slider').slider('next');
	// Previous slide
	$('.slider').slider('prev');
      
})