//@param {jQuery object} container - references the HTML parent element that contains the view.
  //@param {Object} model - the reference to the Dinner Model

  var DishView = function (container, model) {
    console.log("test1")
loadDishes();

	// This function loads the dishes for a given type
	function loadDishes() {
    console.log("test2")

		// Gather data, find the dish list div and empty it
		var dishData = model.getAllDishes();
    console.log(dishData)

		var dishList = container.find("#dishList");
		dishList.empty();

// Create all the cards for dishes
		dishData.forEach(function (dish) {

			var div = makeDishView(dish);
			div.appendTo(dishList);
		});
	}

function makeDishView(dish) {
  console.log("test4")

  //Outer div
	var divElement = document.createElement('div')
	var divObject = $(divElement).addClass('col-xs-3');

  //Card
	var box = document.createElement('div');
	$(box).addClass('pictureview centerr')
			.appendTo(divObject);

  var dishImg = document.createElement('img');
  $(dishImg).addClass('tumnagel xs-1').attr('src','images/'+dish.image)
			.appendTo(box);

  var label = document.createElement('label');
  $(label).text(dish.name)
  .appendTo(box)
console.log("test5")

    return divObject;
  }
  console.log("test6")

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
