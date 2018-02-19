
var SearchView = function (container, model) {

	this.openImg = container.find("#openImg");
	this.searchButton = container.find("#searchButton")


	// Let this view observe the model.
	 model.addObserver(this);

	 /**
	* Updates table data
	*/
	this.update = function() {
		//Search()
	}

	// Initialize the update.
	this.update();

	/**
	* Update total total number of guests.
	*/
<<<<<<< HEAD
	// chooseDish.onchange = function(){
	// 	console.log(chooseDish.value)
	// };
=======

	chooseDish.onchange = function(){
		console.log(chooseDish.value)
		Search(chooseDish.value)
	};
>>>>>>> 2bcfced97cc71160a04f18f2f966b7d2bb1b869c

this.searchFilter = function(type,filter){
	console.log(filter)

	Search(type,filter)
}

function Search(type,filter) {

//loopar igenom alla dishes för bild och namn
	    var outerDiv = document.createElement('div');
	    $(outerDiv).addClass('row');

	    model.getAllDishes(type,filter).forEach(function(key){
	      var innerDiv = ItemView(container,model,key['id'])
	        .appendTo(outerDiv);
	    });


			var allDishImg = container.find("#allDishImg");
			allDishImg.html(outerDiv);
		}
}
