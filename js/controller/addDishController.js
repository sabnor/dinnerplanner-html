var AddDishController = function(view, model, generalStateController){
  view.addDishButton.click(function(){
    //console.log(model.getChosenId())
    //generalStateController(view)
  model.addDishToMenu(model.getChosenDish())
  });

};
