var SelectedDishController = function(view, model){
  view.addDishButton.click(function(){
    //console.log(model.getChosenId())
    //generalStateController(view)
  model.addDishToMenu(model.getChosenId())
  });

};
