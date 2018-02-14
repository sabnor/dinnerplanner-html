var SomeController = function(view, model){
  console.log("hello world");
  view.plusButton.click(function(){
    console.log("plus");
    console.log(model.getNumberOfGuests())
  model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusButton.click(function(){
    console.log("minus");
  model.setNumberOfGuests(model.getNumberOfGuests() - 1);
  });
};
