var SummaryView= function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");

	//backbutton
		this.editButton = container.find("#editButton")

		// Let this view observe the model.
		 model.addObserver(this);


		//Updates table data
		this.update = function() {
			updateNumberOfGuests()
			summary()

		}

		// Initialize the update.
		this.update();


		//Update total total number of guests.
		function updateNumberOfGuests() {
			container.find("#numberOfGuests").html(model.getNumberOfGuests());
		}


//----------------------------------------

function summary () {
	    var outerDiv = document.createElement('div');
	    $(outerDiv).addClass('row');

	    model.getFullMenu().forEach(function(id){
				console.log(id)
	      var innerDiv = ItemView(container, model, id)
	        .appendTo(outerDiv);
	    });

			var menuSummary = container.find("#menuSummary");
			menuSummary.html(outerDiv);

	}

}
