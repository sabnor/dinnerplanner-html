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

<<<<<<< HEAD
=======
	var printSummaryView = new PrintSummaryView($("#printSummaryView"),model);
	//var summaryView = new SummaryView($("#summaryView"),model);
>>>>>>> 85eae93e3820d79385e7954208ccc2c037ddd68a
	//var dishThumbnailView = new DishThumbnailView($("#dishThumbnailView"),model);

	//var dishView = new DishView($("#dishView"),model);
	//var printSummaryView = new PrintSummaryView($("#printSummaryView"),model);
	var summaryView = new SummaryView($("#summaryView"),model);


	//Controllers
<<<<<<< HEAD
	var generalStateController = new GeneralStateController(model,sidebarView, welcomeView, searchView, detailsView, summaryView);
=======
	var generalStateController = new GeneralStateController(model,sidebarView, welcomeView, searchView, detailsView, printSummaryView);
	//istället kalla på generalStateController i alla andra controllers där knapparna sitter
	//och ge den en parameter på vad som ska döljas



>>>>>>> 85eae93e3820d79385e7954208ccc2c037ddd68a
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
