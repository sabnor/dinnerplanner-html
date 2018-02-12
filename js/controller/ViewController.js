//ExampleViewController Object constructor
<<<<<<< HEAD
var ViewController = function(view, model ) {
=======
var ViewController = function(view, model, generalStateController) {
>>>>>>> 5be1c989aed07f9a27622e66550371b2b9cbcafd

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
