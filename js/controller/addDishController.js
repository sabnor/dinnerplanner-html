var AddDishController = function(view, model, generalStateController){
  view.addDishButton.click(function(){
    //console.log(model.getChosenId())
    //generalStateController(view)
    console.log("addDishview");
  model.addDishToMenu(model.getChosenId())
  console.log("addDishtoSidebar");
  });

};
