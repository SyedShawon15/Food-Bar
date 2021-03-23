$(document).ready(function() {
	window.onscroll = function(){
		mynavFunction();
	};
	var navbar	= document.getElementById('navover');
	var sticky	= navbar.offsetTop;
	
	function mynavFunction(){
		if(window.pageYOffset >= 50){
			navbar.classList.add('sticky_over');
		}else{
			navbar.classList.remove('sticky_over');
		}
	}	
})