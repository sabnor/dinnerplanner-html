//ExampleViewController Object constructor
var ExampleViewController = function(view, model ) {

 view.plusButton.click(function(){
   console.log("plus")
   console.log(model.getNumberOfGuests())
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

 view.minusButton.click(function(){
   console.log("minus")
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });
}
