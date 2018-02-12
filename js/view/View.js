var View = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

 // Let this view observe the model.
	 model.addObserver(this);

	 /**
	* Updates table data
	*/
	this.update = function() {
		updateNumberOfGuests()
	}

	// Initialize the update.
	this.update();

	/**
	* Update total total number of guests.
	*/
	function updateNumberOfGuests() {
		container.find("#numberOfGuests").html(model.getNumberOfGuests());
	}


}
