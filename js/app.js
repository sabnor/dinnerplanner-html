$(function() {

	// var welcome = $("#welcomeView");
	// var side = $("#sidebarView");

	//We instantiate our model
	var model = new DinnerModel();

	// $("#header").load("views/headerView.html");


	// And create the instance of ExampleView
	var welcomeView= new WelcomeView($("#welcomeView"),model);
	var searchView = new SidebarView($("#searchView"),model);

	// var exampleView = new ExampleView($("#exampleView"),model);
	//var numberView = new NumberView($("#numberView"),model);

	var allDishThumbnailView = new AllDishThumbnailView($("#alldishThumbnailView"),model);
	//var dishThumbnailView = new DishThumbnailView($("#dishThumbnailView"),model);
	var sidebarView = new SidebarView($("#sidebarView"),model);
	//var dishView = new DishView($("#dishView"),model);
	//var printSummaryView = new PrintSummaryView($("#printSummaryView"),model);
	//var summaryView = new SummaryView($("#summaryView"),model);


	//Controllers
	var generalStateController = new GeneralStateController(sidebarView, welcomeView);
	var sidebarViewController = new SidebarViewController(sidebarView,model);



//	var exampleViewController = new ExampleViewController(exampleView,model);



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */


});
