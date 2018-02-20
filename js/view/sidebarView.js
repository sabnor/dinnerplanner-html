var SidebarView = function (container, model) {

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
    updateCost()
  }

  // Initialize the update.
  this.update();

  /**
  * Update total total number of guests.
  */
  function updateNumberOfGuests() {
  	container.find("#numberOfGuests").html(model.getNumberOfGuests());
  }


//----------------------------------------

function updateCost() {
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
    var priceCol = $(priceElement).addClass('col').text(sum*model.getNumberOfGuests() +' '+model.getCurrency())
      .appendTo(rowElement);

      rowObject
        .appendTo(outerDiv);
    totalSum = totalSum+sum
  });


var dishRows = container.find("#dishRows");
dishRows.html(outerDiv);

var printSum = container.find("#printSum");
printSum.text(totalSum*model.getNumberOfGuests()+ " " +model.getCurrency());

this.confirmButton = container.find("#confirmButton");

if (model.getFullMenu().length ==0){
  confirmButton.html('<button id="confirm" class="btn btn-light" type="button" disabled>Confirm dinner</button>');
}
else {

  confirmButton.html('<button id="confirm" class="btn btn-warning" type="button">Confirm dinner</button>');
};

}
//----------------------------------------------------------






}
