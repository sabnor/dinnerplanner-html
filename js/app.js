$(function() {

	//We instantiate our model
	var model = new DinnerModel();


	var apiModel = new ApiModel();
	var testView= new TestView($("#testView"),apiModel);

	//GeneralStateControllers
	var generalStateController = new GeneralStateController();

	//WelcomeView
	var welcomeView= new WelcomeView($("#welcomeView"),model);
	generalStateController.addView(welcomeView);

	//SidebarView
	var sidebarView = new SidebarView($("#sidebarView"),model);
	generalStateController.addView(sidebarView);
	var sidebarzViewController = new SidebarzViewController(sidebarView, model, generalStateController);

	//SearchView
	var searchView = new SearchView($("#searchView"),model);
	generalStateController.addView(searchView);
	var searchViewController = new SearchViewController(searchView, model, generalStateController);

	//DetailsView
	var detailsView = new DetailsView($("#detailsView"),model);
	generalStateController.addView(detailsView);
	var addDishController = new AddDishController(detailsView, model, generalStateController);

	//SummaryView
	var summaryView = new SummaryView($("#summaryView"),model);
	generalStateController.addView(summaryView);

	//PrintSummaryView
	var printSummaryView = new PrintSummaryView($("#printSummaryView"),model);
	generalStateController.addView(printSummaryView);


	//GeneralStateControllers screen
	generalStateController.addScreen('WELCOME', [welcomeView]);
	generalStateController.addScreen('SEARCHSIDEBAR', [sidebarView, searchView]);
	generalStateController.addScreen('DETAILSSIDEBAR', [sidebarView, detailsView]);
	generalStateController.addScreen('SUMMARY', [summaryView]);
	generalStateController.addScreen('PRINTSUMMARY', [printSummaryView]);

	generalStateController.showScreen('WELCOME');

		//forwardButton to searchsidebar
		welcomeView.welcomeButton.click(function(){
		generalStateController.showScreen('SEARCHSIDEBAR');
		});

	//backButton to searchsidebar
		detailsView.backButton.click(function(){
		generalStateController.showScreen('SEARCHSIDEBAR');
		});

		//editButton to searchsidebar
		summaryView.editButton.click(function(){
		generalStateController.showScreen('SEARCHSIDEBAR');
		 });

		//forwardButton to PrintSummary
		summaryView.printButton.click(function(){
		generalStateController.showScreen('PRINTSUMMARY');
		 });

		//editButton to searchsidebar
		printSummaryView.editButton.click(function(){
		generalStateController.showScreen('SEARCHSIDEBAR');
			});




});
