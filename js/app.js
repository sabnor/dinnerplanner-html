$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	$("#header").load("views/headerView.html");


	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"),model);
	var dishThumbnailView = new DishThumbnailView($("#dishThumbnailView"),model);
	var dishFinderView = new DishFinderView($("#dishFinderView"),model);
	var sidebarView = new SidebarView($("#sidebarView"),model);
	var dishView = new DishView($("#dishView"),model);
<<<<<<< HEAD
	var printSummaryView = new PrintSummaryView($("#printSummaryView"),model);
=======
	var summaryView = new SummaryView($("#summaryView"),model);

>>>>>>> 197376e0d7316b949488b0c2679d264450a05bd3

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
