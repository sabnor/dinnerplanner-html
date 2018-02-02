var SidebarView = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
