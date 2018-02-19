//GeneralViewController Object constructor
//hide and show pages
var GeneralStateController = function(model,sidebarView, welcomeView, searchView, detailsView) {

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

    detailsView.backButton.click(function(){
  	ShowSearchSidebarView();
  	});


//index3
  var ShowDetailsSidebarView = function() {
    $('#sidebarView').show();
    $('#detailsView').show();

    $('#welcomeView').hide();
    $('#searchView').hide();

    };

    searchView.openImg.on("click", ".pictureview", function(event){
      //console.log(this.id); // will always be the element with .pictureview that was clicked
      model.setChosenId(this.id)
      ShowDetailsSidebarView();


    });

}


//byt state funktion
// current view
