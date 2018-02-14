//ExampleViewController Object constructor
<<<<<<< HEAD
=======

>>>>>>> 5e70c1f80944f133084e8d9b5241024ffa71a63a
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
