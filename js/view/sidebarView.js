var SidebarView = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());
  var totalSum = container.find("#totalSum");
	totalSum.text("33");

  function dishRowObjects() {
  model.getFullMenu().forEach(function(id){
    var dishObject = model.getDish(id)

    var rowElement = document.createElement('div')
  	var rowObject = $(rowElement).addClass('row');

    var nameElement = document.createElement('div')
    var nameCol = $(nameElement).addClass('col').text(dishObject.name)
      .appendTo(rowElement);

    var priceElement = document.createElement('div')
    var sum = 0
    var ingredients = dishObject.ingredients.forEach(function(ingredientObject){
      var price = ingredientObject['price']
      sum = sum+price
    });
    var priceCol = $(priceElement).addClass('col').text(sum + " " +model.getCurrency())
      .appendTo(rowElement);

    //rowObject
      //.appendTo(container);
      return rowElement;
  });
}

var dishRows = container.find("#dishRows");
dishRows.html(dishRowObjects());

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
}
