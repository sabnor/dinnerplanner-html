//GeneralViewController Object constructor
//hide and show pages
var GeneralStateController = function(model,sidebarView, welcomeView, searchView, detailsView,summaryView, printSummaryView) {

//start
$('#welcomeView').show();
$('#sidebarView').hide();
$('#searchView').hide();
$('#detailsView').hide();
$('#summaryView').hide();
$('#printSummaryView').hide();



//index2
  var ShowSearchSidebarView = function() {
    $('#sidebarView').show();
    $('#searchView').show();

    $('#welcomeView').hide();
    $('#detailsView').hide();
    $('#summaryView').hide();
    $('#printSummaryView').hide();



  	};
  	welcomeView.welcomeButton.click(function(){
  	ShowSearchSidebarView();
  	});

    detailsView.backButton.click(function(){
  	ShowSearchSidebarView();
  	});

    // summaryView.editButton.click(function(){
  	// ShowSearchSidebarView();
  	// });


    sidebarView.confirmButton.click(function(){
    ShowSummaryView();
    });


//index3
  var ShowDetailsSidebarView = function() {
    $('#sidebarView').show();
    $('#detailsView').show();

    $('#welcomeView').hide();
    $('#searchView').hide();
    $('#summaryView').hide();
    $('#printSummaryView').hide();

    };

    var ShowSummaryView = function() {
      $('#summaryView').show();

      $('#sidebarView').hide();
      $('#detailsView').hide();
      $('#welcomeView').hide();
      $('#searchView').hide();
      $('#printSummaryView').hide();

      };


    searchView.openImg.on("click", ".pictureview", function(event){
      //console.log(this.id); // will always be the element with .pictureview that was clicked
      model.setChosenId(this.id)
      ShowDetailsSidebarView();


    });


}


//byt state funktion
// current view
