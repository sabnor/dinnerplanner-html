var SearchViewController = function(view, model){

  view.searchButton.click(function(){
    event.preventDefault();
    view.searchFilter(chooseDish.value,filter.value)
    model.addDishToMenu(model.getChosenId())

  });




};
