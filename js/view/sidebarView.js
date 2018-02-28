var SidebarView = function (container, model) {

  var numberOfGuests = container.find("#numberOfGuests");

  this.plusButton = container.find("#plusGuest");
  this.minusButton = container.find("#minusGuest");

  this.confirmButton = container.find("#confirmButton");

  var confirmButtonColor =function(button) {
    if (model.getFullMenu().length ==0){
      button.html('<button class="btn btn-light" type="button" disabled>Confirm dinner</button>');
    }
    else {

      button.html('<button class="btn btn-warning" type="button">Confirm dinner</button>');
    };

  }



  // Let this view observe the model.
   model.addObserver(this);

   /**
  * Updates table data
  // */
  // this.update = function() {
  // 	updateNumberOfGuests()
  //   updateCost()
  //   confirmButtonColor(this.confirmButton);
  // }

  // Initialize the update.
  //this.update();

  this.update = function(args){
    if (args == 'numberOfGuests'){
      updateNumberOfGuests();
      updateCost();
    }
    if (args == 'addedDish'){
      updateCost();
      confirmButtonColor(this.confirmButton);
    }
}
  this.update('numberOfGuests');
  this.update('addedDish');

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

    model.getDish(model.getChosenId(),function(data){
    var dishObject = data
    //----------
    var rowElement = document.createElement('div')
  	var rowObject = $(rowElement).addClass('row');

    var nameElement = document.createElement('div')
    var nameCol = $(nameElement).addClass('col').text(dishObject.title)
      .appendTo(rowElement);

    var priceElement = document.createElement('div')
    var sum = dishObject.pricePerServing
    // var ingredients = dishObject.ingredients.forEach(function(ingredientObject){
    //   var price = ingredientObject['price']
    //   sum = sum+price
    // });
    var priceCol = $(priceElement).addClass('col').text(sum*model.getNumberOfGuests() +' '+model.getCurrency())
      .appendTo(rowElement);

      rowObject
        .appendTo(outerDiv);
    totalSum = totalSum+sum

    var dishRows = container.find("#dishRows");
    dishRows.html(outerDiv);

    var printSum = container.find("#printSum");
    printSum.text(totalSum*model.getNumberOfGuests()+ " " +model.getCurrency());

  },
  function(error){
    window.alert("Error in SidebarView")
  });

  });




}
//----------------------------------------------------------


this.hide = function() {
  container.fadeOut();
}

this.show = function(){
  container.fadeIn();
}



}
