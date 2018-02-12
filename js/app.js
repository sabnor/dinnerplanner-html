$(function() {

	// var welcome = $("#welcomeView");
	// var side = $("#sidebarView");

	//We instantiate our model
	var model = new DinnerModel();

	// $("#header").load("views/headerView.html");


	// And create the instance of ExampleView
	var welcomeView= new WelcomeView($("#welcomeView"),model);
	// var exampleView = new ExampleView($("#exampleView"),model);
	var view = new View($("#view"),model);

	var allDishThumbnailView = new AllDishThumbnailView($("#alldishThumbnailView"),model);
	//var dishThumbnailView = new DishThumbnailView($("#dishThumbnailView"),model);
	//var sidebarView = new SidebarView($("#sidebarView"),model);
	//var dishView = new DishView($("#dishView"),model);
	//var printSummaryView = new PrintSummaryView($("#printSummaryView"),model);
	//var summaryView = new SummaryView($("#summaryView"),model);


	//Controllers
	var generalStateController = new GeneralStateController(view, welcomeView);
	var viewController = new ViewController(view,model,generalStateController);



//	var exampleViewController = new ExampleViewController(exampleView,model);



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */


//Homepage
	// welcome.show();
	// side.hide();
});
