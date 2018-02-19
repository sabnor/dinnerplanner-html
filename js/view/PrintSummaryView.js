var PrintSummaryView = function (container, model) {

  var numberOfGuests = container.find("#numberOfGuests");


  // Let this view observe the model.
   model.addObserver(this);

   /**
  * Updates table data
  */
  this.update = function() {
    updateNumberOfGuests();
    //updatePrintSummary();
  }

  // Initialize the update.
  this.update();

  /**
  * Update total total number of guests.
  */
  function updateNumberOfGuests() {
    container.find("#numberOfGuests").html(model.getNumberOfGuests());



  //----------------------------------------

  function updatePrintSummary() {

  var outerDiv = document.createElement('div');

  model.getFullMenu().forEach(function(id){
    var dishObject = model.getDish(id)

    var rowElement = document.createElement('div')
    var rowObject = $(rowElement).addClass('row');

    var nameElement = document.createElement('div')
    var nameCol = $(nameElement).addClass('col').text(dishObject.name)
      .appendTo(rowElement);

    //rowObject.appendTo(outerDiv);

  });


      var mealSummary = container.find("#mealSummary");
    mealSummary.html(outerDiv);
  }

};

}
