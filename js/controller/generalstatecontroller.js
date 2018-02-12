//GeneralViewController Object constructor
//hide and show pages
var GeneralStateController = function(view, welcomeView) {

//start
$('#welcomeView').show();
$('#view').hide();

    var hideView = function() {
      $('#welcomeView').hide();
      $('#view').show();

    	// $('#welcomeView').hide();
    	// $('#sidebarView').show();
    	};
      //
    	welcomeView.welcomeButton.click(function(){
    	hideView();
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
