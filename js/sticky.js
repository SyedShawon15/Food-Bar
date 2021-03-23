$(document).ready(function() {
	window.onscroll = function(){
		mynavFunction();
	};
	var navbar	= document.getElementById('mynav');
	var sticky	= navbar.offsetTop;
	
	function mynavFunction(){
		if(window.pageYOffset >= 50){
			navbar.classList.add('sticky');
		}else{
			navbar.classList.remove('sticky');
		}
	}	
})