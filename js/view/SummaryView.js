var SummaryView= function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");

	//backbutton
		this.editButton = container.find("#editButton")
		this.printButton = container.find("#printButton")

		// Let this view observe the model.
		 model.addObserver(this);


		// //Updates table data
		// this.update = function() {
		// 	updateNumberOfGuests()
		// 	summary()
		// }
    //
    //
    //
		// // Initialize the update.
		// this.update();
    //


		  this.update = function(args){
		    if (args == 'numberOfGuests'){
		      updateNumberOfGuests();
		      summary();
		    }
				if (args == 'addedDish'){
		      summary();
		}
	}

	this.update('numberOfGuests');

		//Update total total number of guests.
		function updateNumberOfGuests() {
			container.find("#numberOfGuests").html(model.getNumberOfGuests());
		}


//----------------------------------------

function summary () {
	    var outerDiv = document.createElement('div');
	    $(outerDiv).addClass('row');
			var totalSum = 0


	    model.getFullMenu().forEach(function(id){
				var dishObject = model.getDish(id)
				var colDiv = document.createElement('div');
		    $(colDiv).addClass('col').appendTo(outerDiv);

				console.log(id)
	      var innerDiv = ItemView(container, model, id)
	      .appendTo(colDiv);

			    var rowElement = document.createElement('div')
			  	var rowObject = $(rowElement).addClass('row');

			    var priceElement = document.createElement('div')
			    var sum = 0
			    var ingredients = dishObject.ingredients.forEach(function(ingredientObject){
			      var price = ingredientObject['price']
			      sum = sum+price
			    });
			    var priceCol = $(priceElement).addClass('col').text(sum*model.getNumberOfGuests() +' '+model.getCurrency())
			      .appendTo(colDiv);

			      rowObject
			        .appendTo(outerDiv);
			    totalSum = totalSum+sum

			  });

			var sumDiv = document.createElement('div');
			$(sumDiv).addClass('col sum').text("Total: "+totalSum*model.getNumberOfGuests() +' '+model.getCurrency())
			.appendTo(outerDiv);

			var menuSummary = container.find("#menuSummary");
			menuSummary.html(outerDiv);


			var dishRows = container.find("#dishRows");
			dishRows.html(outerDiv);

			var printSum = container.find("#printSum");
			printSum.text(totalSum*model.getNumberOfGuests()+ " " +model.getCurrency());



	}
	this.hide = function() {
		container.fadeOut();
	}

	this.show = function(){
		container.fadeIn();
	}

}
