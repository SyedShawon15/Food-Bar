$(window).scroll(function(){
     var wintop = $(window).scrollTop(); 
     documentHeight = $(document).height(); 
     winHeight = $(window).height();
     var scrolled = (wintop / (documentHeight-winHeight))*100;
     $('.progress-bar').css('width', (scrolled +'%'));
 });