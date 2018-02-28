//DinnerModel Object constructor
var DinnerModel = function(generalStateController) {

	//Todo Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
//----------------------------------------------------------------------
var numberOfGuests = 4;
var fullMenu = [];
//var selectedDish = [1,100];
var currency = "SEK";
var observers = [];
var chosenId = "10";
var chosenType = "3";
//----------------------------------------------------------------------
this.setChosenType = function(type) {
	chosenType = type;
	notifyObservers();
}
	this.getChosenType = function() {
		return chosenType;
}
//----------------------------------------------------------------------
this.setChosenId = function(id) {
	chosenId = id;
	notifyObservers('chosenId');
}
	this.getChosenId = function() {
		return chosenId;
}
//----------------------------------------------------------------------
	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
		notifyObservers('numberOfGuests');
	}
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}
//----------------------------------------------------------------------

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		for(var i = 0; i< fullMenu.length; i++){
			if(this.getDish(fullMenu[i]).type == type) {
				return this.getDish(fullMenu[i])
			}
		}
	}


	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return fullMenu;
		// Todo Lab 1
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var menu = this.getFullMenu()
		var ingedients = []
		for (var i = 0; i < menu.length; i++) {
			ingredients.push(menu[i].ingredients);
		}
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice = [];
		var allIngredients = this.getAllIngredients();
		for (var i = 0; i < allIngredients.length; i++){
			var dishPrice = 0;
			for (var j = 0; j < allIngredients[i].length; j++) {
				var ingredientPrice = allIngredients[i][j].price;
				dishPrice += (ingredientPrice * numberOfGuests);
			}
		totalPrice.push(dishPrice)
	}
return totalPrice;
}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
this.addDishToMenu = function(id) {
	console.log("add");

		this.getDish(id, function(data) {
			//callback data
			console.log("callback");
			var type = data.dishTypes

			for (var i = 0; i < fullMenu.length; i++) {
					this.getDish(fullMenu[i], function(data){
						//callback data
						if (type == data.dishTypes){
						fullMenu.splice(i,1);

						};

						fullMenu.push(id);
						notifyObservers('addedDish');


					}, function(error){
			 	 //error callback getDish fullmenu
				  window.alert("Error in addedDish")
				});
			}


		} //end getDish
		, function(error){
			// error callback	getDish
			window.alert("Error in getDish")
		});


} //end addDishToMenu


	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		 for (var i = 0; i < selectedDish.length; i++){
			 if (selectedDish[i] == id){
				 selectedDish.splice(i,1)
			 }
		 }
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned


	this.getAllDishes = function (type, filter, callback, errorCallback) {

		var urlQuery = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type="+type+"&number=100&query="+filter;
		console.log('Start Loader')
		generalStateController.showScreen('LOADER');

		//app.startLoader();
	$.ajax( {
	   url: urlQuery,
		 dataType: "json",
	   headers: {
	     'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
	   },
	   success: function(data) {
	     callback(data)
	   },
	   error: function(error) {
	     errorCallback(error)
	   }
 })
 generalStateController.showScreen('SEARCHSIDEBAR');
 console.log('End Loader')


	}


	this.getDish = function (id, callback, errorCallback) {
	var urlQuery = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+id+"/information";
	generalStateController.showScreen('LOADER');

	$.ajax( {
		 url: urlQuery,
		 headers: {
			 'X-Mashape-Key': "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB",
		 },
		 success: function(data) {
			 callback(data)
		 },
		 error: function(error) {
			 errorCallback(error)
		 }

	})
	generalStateController.showScreen('DETAILSSIDEBAR');

}

this.setCurrency = function (newCurrency) {
  currency = newCurrency.toUpperCase();
}

this.getCurrency = function(){
  return currency;
}


this.addObserver = function(observer) {
observers.push(observer);
 }

var notifyObservers = function(args) {
	for(var i =0; i < observers.length; i++){
			observers[i].update(args)
}
}

}
