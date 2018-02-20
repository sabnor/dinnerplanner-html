var SearchViewController = function(view, model){

  view.searchButton.click(function(){
    event.preventDefault();
    console.log(chooseDish.value,filter.value)
    view.searchFilter(chooseDish.value,filter.value)
    //model.addDishToMenu(model.getChosenId())

  });




};
