$(document).ready(function() {
	$(window).scroll(function(){
		var scrl = $(window).scrollTop();
		if(scrl > 300){
			$("#scrl-top").fadeIn();
		}else{
			$("#scrl-top").fadeOut();
		}	
	});
	$("#scrl-top").click(function(){
		$("html, body").animate({
			scrollTop : 0
		}, 500);
	});
})