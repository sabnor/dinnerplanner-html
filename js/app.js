$(function() {

	//We instantiate our model
	var model = new DinnerModel();


	// And create the instance of ExampleView
	var welcomeView= new WelcomeView($("#welcomeView"),model);
	// var exampleView = new ExampleView($("#exampleView"),model);
	//var numberView = new NumberView($("#numberView"),model);

	var sidebarView = new SidebarView($("#sidebarView"),model);
	var searchView = new SearchView($("#searchView"),model);
	var detailsView = new DetailsView($("#detailsView"),model);

	//var dishThumbnailView = new DishThumbnailView($("#dishThumbnailView"),model);

	//var dishView = new DishView($("#dishView"),model);
	//var printSummaryView = new PrintSummaryView($("#printSummaryView"),model);
	//var summaryView = new SummaryView($("#summaryView"),model);



	//Controllers
	var generalStateController = new GeneralStateController(model,sidebarView, welcomeView, searchView, detailsView);
	//var sidebarViewController = new SidebarViewController(sidebarView,model);

	var sidebarzViewController = new SidebarzViewController(sidebarView, model);
	var selectedDishController = new SelectedDishController(detailsView, model);
	var searchViewController = new SearchViewController(searchView, model);

//	var exampleViewController = new ExampleViewController(exampleView,model);



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */


});
