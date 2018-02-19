var SummaryView= function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");

	//backbutton

		// Let this view observe the model.
		 model.addObserver(this);


		//Updates table data
		this.update = function() {
			updateNumberOfGuests()
			Summary()

		}

		// Initialize the update.
		this.update();


		//Update total total number of guests.
		function updateNumberOfGuests() {
			container.find("#numberOfGuests").html(model.getNumberOfGuests());
		}


//----------------------------------------

function Summary () {
	    var outerDiv = document.createElement('div');
	    $(outerDiv).addClass('row');

	    model.getFullMenu("dessert").forEach(function(key){
	      var innerDiv = ItemView(container, model, key['id'])
	        .appendTo(outerDiv);
	    });

			var allDishImg = container.find("#allDishImg");
			allDishImg.html(outerDiv);

	}



}
