
$(document).ready(function(){
	$('.wrap').find('> .sect:eq(0)').nextAll('.sect').css({'opacity':'0','display':'none'});//hide all but first

	var currentslide = $('.sect:eq(0)');
	var currentposition = $('.wrap .sect').index(currentslide);

	// On click of a controller link...
	$('.slider_item').click(function(e){
		e.preventDefault();
		$('.slider_line').css("opacity",0.5);
	    $('.slider_line .slider_line-mod').css("opacity",0);
	    var abc = $(this).attr('data-href');
		
		
		
		
		// Fade the current slide out...
		$('.wrap .sect:eq('+currentposition+')').animate({opacity: 0}, 250, function() {
			
			// ... and hide it.
			$('.wrap .sect:eq('+currentposition+')').css('display','none');

			// Show the next slide...
			$('.wrap .sect:eq('+ abc+')').css('display','block');

			// ... and fade it in.
			$('.wrap .sect:eq('+ abc+')').animate({opacity: 1}, 800);
			
		  }
		);
	  currentposition =  abc;
	  
	  $(this).children('.slider_line').css("opacity",1);
	  $(this).find('.slider_line-mod').css("opacity",1);
	});
	$( ".slider_item" ).hover(function() {
	  $(this).children('.slider_line').css("opacity",1);
	  $(this).find('.slider_line-mod').css("opacity",1);
	});
	$('#hamburger').click(function(){
		$('body').toggleClass("active");
	})
});
