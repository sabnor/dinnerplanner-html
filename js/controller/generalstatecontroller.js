//GeneralViewController Object constructor
//hide and show pages
var GeneralStateController = function(view, welcomeView) {

//start
$('#welcomeView').show();
$('#NumberView').hide();

    var hideWelcomeView = function() {
      $('#welcomeView').hide();
      $('#NumberView').show();

    	// $('#welcomeView').hide();
    	// $('#sidebarView').show();
    	};
      //
    	welcomeView.welcomeButton.click(function(){
    	hideWelcomeView();
    	});

}

//
//
// //Till startsidan-dishes
// var showDishpage = function() {
// 	welcomeView.hide()
// 	sidebarView.show()
//
// 	// $('#welcomeView').hide();
// 	// $('#sidebarView').show();
// 	};
//   //
// 	view.welcomeButton.click(function(){
// 	showDishpage();
// 	});

// 	// document.getElementById("welcomeButton").addEventListener("click", showDishpage, false);
// welcomeView.welcomeButton.onclick = showDishpage();



//byt state funktion
// current view
