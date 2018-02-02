//@param {jQuery object} container - references the HTML parent element that contains the view.
  //@param {Object} model - the reference to the Dinner Model

  var DishView = function (container, model) {
makeDishView();

function makeDishView() {
  console.log("Enters function")

  //Outer div
	var divElement = document.createElement('div')
	var divObject = $(divElement).addClass('col-xs-3');

  //Card
	var box = document.createElement('div');
	$(box).addClass('pictureview centerr')
			.appendTo(divObject);

  var dishImg = document.createElement('img');
  $(dishImg).addClass('tumnagel xs-1').attr('src','images/'+"bakedbrie.jpg")
			.appendTo(box);

  var label = document.createElement('label');
  $(label).text("Label")
  .appendTo(box)
console.log("Done")
console.log(divObject)
    return divObject;
  }

}

	//numberOfGuests.html("<h1>"+model.getSelectedDish('starter')+"</h1>");
	//console.log("Wazzap");

	/**
	 * When we want references to some view elements to be available from outside of view, we
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 *
	 * We can then, in some other code, use exampleView.plusButton to reference the
	 * this button and do something with it (see Lab 2).
	 *
	 */

	//this.plusButton = container.find("#plusGuest");
	//this.minusButton = container.find("#minusGuest");

	// @var {jQuery object} numberOfGuests that is a reference to <span>
	 // in our view to dynamically set it's value to "Hello World".
