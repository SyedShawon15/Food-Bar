var $grid = $(".item_wrapper").isotope({
	itemSelector: '.filter_item',
	layoutMode: 'fitRows'
});
$(".cli").click(function(){
	var filter_data_value = $(this).attr("data-filter");
	console.log(filter_data_value);
	$(".cli").removeClass("active");
	$(this).addClass("active");
	
	//add filter
	$grid.isotope({
		filter:filter_data_value
	});
})