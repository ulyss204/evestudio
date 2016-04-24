var images = ['../evestudio/images/eagle.jpg','../evestudio/images/photo.jpg','../evestudio/images/phone.jpg','../evestudio/images/comp.jpg'];
function showPage( iD ){
	  
      var pID = images[iD];

      $('.sect').css({"background":"url("+pID+") no-repeat","background-size":"cover","background-position":"center"});
      
      
    }
showPage(0);

$('.slider_item').click(function(){
  $('.slider_line').css("opacity",0.5);
  $('.slider_line .slider_line-mod').css("opacity",0);
  showPage( +$(this).attr('data-id') );
  $(this).children('.slider_line').css("opacity",1);
  $(this).find('.slider_line-mod').css("opacity",1);
});

