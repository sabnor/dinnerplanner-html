var SidebarView = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());


  var outerDiv = document.createElement('div');

  var totalSum = 0

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
    var priceCol = $(priceElement).addClass('col').text(sum*model.getNumberOfGuests() +model.getCurrency())
      .appendTo(rowElement);

      rowObject
        .appendTo(outerDiv);
    totalSum = totalSum+sum
  });


var dishRows = container.find("#dishRows");
dishRows.html(outerDiv);

var printSum = container.find("#printSum");
printSum.text(totalSum*model.getNumberOfGuests()+ " " +model.getCurrency());

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
}
