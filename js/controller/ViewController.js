//ExampleViewController Object constructor
<<<<<<< HEAD

=======
>>>>>>> 3a3dd8fb662e4b75391750d617dbb428255f9465
var ViewController = function(view, model, generalStateController) {

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
