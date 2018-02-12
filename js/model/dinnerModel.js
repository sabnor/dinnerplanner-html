//DinnerModel Object constructor
var DinnerModel = function() {

	//Todo Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

var numberOfGuests = 4;
var fullMenu = [1,100];
//var selectedDish = [1,100];
var currency = "SEK";
var observers = [];

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
		this.notifyObservers();
	}

	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		for(var i = 0; i< selectedDish.length; i++){
			if(this.getDish(selectedDish[i]).type == type) {
				return this.getDish(selectedDish[i])
			}
		}
	}


	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		// var menu = [];
		// for (var i = 0; i < selectedDish.length; i++) {
		// 	var dish = this.getDish(selectedDish[i]);
		// 	menu.push(dish);
		// }
		return fullMenu;
		// Todo Lab 1
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//Todo Lab 1
    // var ingredients = [];
    // this.fullMenu.forEach(function (dish){
    //   dish["ingredients"].forEach(function (ingredient) {
    //     ingredients.append(ingredient);
    //   })
    // })
		// console.log(ingredients);

		var menu = this.getFullMenu()
		var ingedients = []
		for (var i = 0; i < menu.length; i++) {
			ingredients.push(menu[i].ingredients);
		}
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//Todo Lab 1
		//for (var i = 0 - 1; i >= ingredients.length; i++) {
		//	ingedients[i]
		//}
		//dishes.ingredients['price'].price*this.numberOfGuests;
    // var ingredients = this.getAllIngredients();
    // var price = 0;
    // ingredients.forEach(function (ingredient){
    //   price += ingredient["price"]
    // });
    // price *= this.getNumberOfGuests();
    // return price;
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
		//Todo Lab 1
    // var dishToAdd = this.getDish(id);
    // this.getFullMenu().forEach(function (dishInMenue) {
    //   // Check if there is already a dish with the same type in the menu, if so remove it
    //   if (dishInMenu["type"] === dishToAdd["type"]){
    //     this.removeDishFromMenu(dishInMenu["id"]);
    //   }
    //   // Add the selected dish
    //   this.addDishToMenu(dishToAdd["id"]);
    // })

		var type = this.getDish(id).type;

		for (var i = 0; i < selectedDish.length; i++) {
			if (type == this.getDish(selectedDish[i]).type){
				selectedDish.splice(i,1);
			}

	}
selectedDish.push(id);
this.notifyObservers();
}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		 //Todo Lab 1
     // for (key in this.fullMenu) {
     //   if (this.fullMenu[key].id == id) {
     //     this.fullMenu.splice(key, 1);

		 for (var i = 0; i < selectedDish.length; i++){
			 if (selectedDish[i] == id){
				 selectedDish.splice(i,1)
			 }
		 }
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return dishes.filter(function(dish) {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
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

var notifyObservers = function(obj) {
	for(var i =0; i < observers.length; i++){
			observers[i].update()
}
}


	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}
