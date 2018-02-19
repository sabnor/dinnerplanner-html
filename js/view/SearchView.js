
var SearchView = function (container, model) {

	this.openImg = container.find("#openImg");
	this.searchButton = container.find("#searchButton")

	// Let this view observe the model.
	 model.addObserver(this);

	 /**
	* Updates table data
	*/
	this.update = function() {
		Search()
	}

	// Initialize the update.
	this.update();

	/**
	* Update total total number of guests.
	*/
	chooseDish.onchange = function(){
		console.log(chooseDish.value)
	};


function Search(value) {

//loopar igenom alla dishes för bild och namn
	    var outerDiv = document.createElement('div');
	    $(outerDiv).addClass('row');

	    model.getAllDishes("starter").forEach(function(key){
	      var innerDiv = ItemView(container,model,key['id'])
	        .appendTo(outerDiv);
	    });


			var allDishImg = container.find("#allDishImg");
			allDishImg.html(outerDiv);
		}
}
