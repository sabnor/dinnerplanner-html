//GeneralViewController Object constructor
//hide and show pages
var GeneralStateController = function() {

  var views = [];
  var screens = {};

  var hideAll = function(){
    for (var key in views){
      views[key].hide();
    }
  }

this.addView = function(view){
  views.push(view);
}

this.addScreen = function(name, views){
  screens[name] = views;
}

this.showScreen = function (name) {
  hideAll();
  for(var key in screens[name]){
    screens[name][key].show();
  }
}

  //initial start
  // this.showScreen('WELCOME');
  //
  //   //forwardButton to searchsidebar
  // 	$('#welcomeView').welcomeButton.click(function(){
  //   this.showScreen('SEARCHSIDEBAR');
  //   });
  //
  // //backButton to searchsidebar
  //   $('#detailsView').backButton.click(function(){
  // 	this.showScreen('SEARCHSIDEBAR');
  // 	});
  //
  //   //editButton to searchsidebar
  //   $('#summaryView').editButton.click(function(){
  // 	this.showScreen('SEARCHSIDEBAR');
  // 	 });
  //
  //   //forwardButton to PrintSummary
  //   $('#summaryView').printButton.click(function(){
  //   this.showScreen('PRINTSUMMARY');
  //  	 });
  //
  //   //editButton to searchsidebar
  //   $('#printSummaryView').editButton.click(function(){
  //   this.showScreen('SEARCHSIDEBAR');
  //     });
  //


}


//byt state funktion
// current view
