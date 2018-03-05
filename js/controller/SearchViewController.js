var SearchViewController = function(view, model, generalStateController){

//search by filter & type
  view.searchButton.click(function(){
    event.preventDefault();
    view.searchFilter(chooseDish.value,filter.value)

  });

  view.openImg.on("click", ".pictureview", function(event){
   // will always be the element with .pictureview that was clicked
    generalStateController.showScreen('LOADER');
     model.getDish(this.id,function(data){
     model.setChosenDish(data) },
       function(error){
         generalStateController.showScreen('NOINTERNET');
         //window.alert("Error in detailsView")
       });
    generalStateController.showScreen('DETAILSSIDEBAR');

      });


};
