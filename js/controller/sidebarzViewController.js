var SidebarzViewController = function(view, model, generalStateController){
  view.plusButton.click(function(){
  model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusButton.click(function(){
    if (model.getNumberOfGuests()>1) {
  model.setNumberOfGuests(model.getNumberOfGuests() - 1);
}
});

view.confirmButton.click(function(){
  generalStateController.showScreen('SUMMARY');
});
};
