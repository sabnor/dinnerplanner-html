var SidebarzViewController = function(view, model){
  view.plusButton.click(function(){
    console.log("plus");
    console.log(model.getNumberOfGuests())
  model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusButton.click(function(){
    console.log("minus");
    if (model.getNumberOfGuests()>1) {
  model.setNumberOfGuests(model.getNumberOfGuests() - 1);
}
});
};
