var SelectedDishController = function(view, model){
  console.log("hello world");

  view.addDishButton.click(function(){
    console.log("plus");
    console.log(model.getChosenId())
  model.addDishToMenu(model.getChosenId())
  });

};
