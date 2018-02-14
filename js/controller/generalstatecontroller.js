//GeneralViewController Object constructor
//hide and show pages
var GeneralStateController = function(sidebarView, welcomeView, searchView, itemView) {

//start
$('#welcomeView').show();
$('#sidebarView').hide();
$('#searchView').hide();
$('#itemView').hide();

    var ShowSearchSidebarView = function() {
      $('#welcomeView').hide();
      $('#sidebarView').show();
      $('#searchView').show();
      $('#itemView').show();

    	// $('#welcomeView').hide();
    	// $('#sidebarView').show();
    	};
      //
    	welcomeView.welcomeButton.click(function(){
    	ShowSearchSidebarView();
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
