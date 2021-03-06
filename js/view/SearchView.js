
var SearchView = function (container, model,generalStateController) {

	this.openImg = container.find("#openImg");
	this.searchButton = container.find("#searchButton")

	// Let this view observe the model.
	 model.addObserver(this);

	 this.update = function(args){
		 if (args == 'numberOfGuests'){
			 console.log('Search update')
		 }
	 }

	chooseDish.onchange = function(){
		console.log(chooseDish.value)
		Search(chooseDish.value,filter.value)
	};


this.searchFilter = function(type,filter){

	Search(type,filter)
}
Search("","")




function Search(type,filter) {

//loopar igenom alla dishes för bild och namn
	    var outerDiv = document.createElement('div');
	    $(outerDiv).addClass('row');

			generalStateController.showScreen('LOADER');
			model.getAllDishes(type, filter, function(data){
				data.results.forEach(function(key){
		      var innerDiv = ItemView(container,model,key)
		        .appendTo(outerDiv);
		    });

			}, function(error){
				generalStateController.showScreen('NOINTERNET');
				//window.alert(error.statusText + '. You seem to have lost your internet connection')

				//generalStateController.showScreen('NOINTERNET');

			})
			generalStateController.showScreen('SEARCHSIDEBAR');






			var allDishImg = container.find("#allDishImg");
			allDishImg.html(outerDiv);
		}

	this.hide = function() {
		container.hide();
	}

	this.show = function(){
		container.fadeIn();
	}

}
