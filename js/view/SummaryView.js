/** ExampleView Object constructor
 *
 * This object represents the code for one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view Object like this for every view in your UI.
 *
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var SummaryView= function (container, model) {


	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());
	console.log("Wazzap");



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


	// /**
	//  * We use the @method find() on @var {jQuery object} container to look for various elements
	//  * inside the view in orther to use them later on. For instance:
	//  *
	//  * @var {jQuery object} numberOfGuests is a reference to the <span> element that
	//  * represents the placeholder for where we want to show the number of guests. It's
	// //  * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	//  * and we can use it to modify <span>, for example to populate it with dynamic data (for now
	//  * only 'Hello world', but you should change this by end of Lab 1).
	//  *
	//  * We use variables when we want to make the reference private (only available within) the
	//  * ExampleView.
	//  *
	//  * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	//  * or some other way of searching only among the containers child elements. In this way you
	//  * make your view code modular and ensure it doesn't break if by mistake somebody else
	//  * in some other view gives the same ID to another element.
	//  *
	//  */

  //
	// /**
	//  * When we want references to some view elements to be available from outside of view, we
	//  * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it
	//  * will be important for assigning listeners to these buttons, because the listeners
	//  * should not be assigned in the view, but rather in controller.
	//  *
	//  * We can then, in some other code, use exampleView.plusButton to reference the
	//  * this button and do something with it (see Lab 2).
	//  *
	//  */
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	// /**
	//  * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	//  * in our view to dynamically set it's value to "Hello World".
	 */
}
