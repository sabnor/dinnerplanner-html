//@param {jQuery object} container - references the HTML parent element that contains the view.
  //@param {Object} model - the reference to the Dinner Model

  var DishThumbnailView = function (container, model) {

    var outerDiv = document.createElement('div');
    $(outerDiv).addClass('row');

    model.getFullMenu("dessert").forEach(function(key){
      var innerDiv = makeDishView(key['id'])
        .appendTo(outerDiv);
    });


    //for (key in model.getSelectedDish("starter")){
      //console.log(key['id']);
      //var innerDiv = makeDishView(1)
        //.appendTo(outerDiv);

    //for (var i = 1; i < model.getAllDishes("main dish").length+1; i++){
      //console.log(i)
      //var innerDiv = makeDishView(i)
        //.appendTo(outerDiv);

    //}
//var code2 = code.clone(1);

function makeDishView(dish) {

  //Outer div
	var divElement = document.createElement('div')
	var divObject = $(divElement).addClass('col-xs-3');

  //Card
	var box = document.createElement('div');
	$(box).addClass('pictureview centerr')
			.appendTo(divObject);

  var dishImg = document.createElement('img');
  $(dishImg).addClass('tumnagel xs-1').attr('src','images/'+model.getDish(dish).image)
			.appendTo(box);

  var label = document.createElement('label');
  $(label).text(model.getDish(dish).name)
  .appendTo(box)
    return divObject;

  };
var dishThumbnail = container.find("#dishThumbnail");
dishThumbnail.html(outerDiv);

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
