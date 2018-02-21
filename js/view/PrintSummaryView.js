var PrintSummaryView = function (container, model) {

  var numberOfGuests = container.find("#numberOfGuests");
  this.editButton = container.find("#editButton")


  // Let this view observe the model.
   model.addObserver(this);

   /**
  * Updates table data
  */
  // this.update = function() {
  //   updateNumberOfGuests();
  //   updatePrintSummary();
  // }
  //
  // // Initialize the update.
  // this.update();
  this.update = function(args){
    if (args == 'numberOfGuests'){
      updateNumberOfGuests();
      updatePrintSummary();
    }
    if (args == 'addedDish'){
      updatePrintSummary();
    }
}

this.update('numberOfGuests');
  /**
  * Update total total number of guests.
  */
  function updateNumberOfGuests() {
  	container.find("#numberOfGuests").html(model.getNumberOfGuests());
  }


  //----------------------------------------

  function updatePrintSummary() {

  var outerDiv = document.createElement('div');

  model.getFullMenu().forEach(function(id){
    console.log(id)
    var dishObject = model.getDish(id)

    var rowElement = document.createElement('div')
  	var rowObject = $(rowElement).addClass('row');

    var colElement = document.createElement('div');
    $(colElement).addClass("col")
    .appendTo(rowElement);

    var dishImg = document.createElement('img');
    $(dishImg).addClass('imgDetailsView').attr('src','images/'+dishObject.image)
  			.appendTo(colElement);

    var colElement2 = document.createElement('div');
    $(colElement2).addClass("col")
    .appendTo(rowElement);

    var labelElement = document.createElement('div');
    $(labelElement).addClass("smallTitle").html(dishObject.name)
    .appendTo(colElement2);

    var descriptionElement = document.createElement('p');
    $(descriptionElement).text(dishObject.description)
    .appendTo(colElement2);

    var colElement3 = document.createElement('div');
    $(colElement3).addClass("col")
    .appendTo(rowElement);

    var labelElement = document.createElement('div');
    $(labelElement).addClass("smallTitle").html("Description")
    .appendTo(colElement3);

    var descriptionElement = document.createElement('p');
    $(descriptionElement).text(dishObject.description)
    .appendTo(colElement3);



    rowObject
    .appendTo(outerDiv);



  });


      var mealSummary = container.find("#mealSummary");
    mealSummary.html(outerDiv);
  }

  this.hide = function() {
    container.fadeOut();
  }

  this.show = function(){
    container.fadeIn();
  }

}
