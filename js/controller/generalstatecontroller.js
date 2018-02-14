//GeneralViewController Object constructor
//hide and show pages
var GeneralStateController = function(sidebarView, welcomeView, searchView, itemView) {

//start
$('#welcomeView').show();

$('#sidebarView').hide();
$('#searchView').hide();
$('#detailsView').hide();

//index2
  var ShowSearchSidebarView = function() {
    $('#sidebarView').show();
    $('#searchView').show();

    $('#welcomeView').hide();
    $('#detailsView').hide();

  	};
  	welcomeView.welcomeButton.click(function(){
  	ShowSearchSidebarView();
  	});


//index3
  var ShowDetailsSidebarView = function() {
    $('#sidebarView').show();
    $('#detailsView').show();

    $('#welcomeView').hide();
    $('#searchView').hide();

    };
    //
    searchView.openImg.click(function(){
      ShowDetailsSidebarView();
    });

}


//byt state funktion
// current view
