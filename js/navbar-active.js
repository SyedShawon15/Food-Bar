$(document).ready(function(){
	var path = window.location.href; 
		$('.navbar ul li a').each(function(e){
		if(this.href == path){
			$('.navbar ul li a').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		}		
	});
})