$(function() {

	//We instantiate our model
	var model = new DinnerModel();


	// And create the instance of ExampleView
	var welcomeView= new WelcomeView($("#welcomeView"),model);
	// var exampleView = new ExampleView($("#exampleView"),model);
	//var numberView = new NumberView($("#numberView"),model);

	var sidebarView = new SidebarView($("#sidebarView"),model);
	var searchView = new SearchView($("#searchView"),model);
<<<<<<< HEAD
=======
	var detailsView = new DetailsView($("#detailsView"),model);
	
>>>>>>> 11511ac6dab28a27c525f081d83c1ff75f704b49
	//var itemView = new ItemView($("#itemView"),model);

	//var dishThumbnailView = new DishThumbnailView($("#dishThumbnailView"),model);

	//var dishView = new DishView($("#dishView"),model);
	//var printSummaryView = new PrintSummaryView($("#printSummaryView"),model);
	//var summaryView = new SummaryView($("#summaryView"),model);


	//Controllers
	var generalStateController = new GeneralStateController(sidebarView, welcomeView, searchView);
	var sidebarViewController = new SidebarViewController(sidebarView,model);



//	var exampleViewController = new ExampleViewController(exampleView,model);



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */


});
