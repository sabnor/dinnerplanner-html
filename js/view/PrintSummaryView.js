var PrintSummaryView = function (container, model) {

var numberOfGuests = container.find("#numberOfGuests");
numberOfGuests.html(model.getNumberOfGuests())

}
