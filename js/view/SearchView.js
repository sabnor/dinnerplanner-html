
var SearchView = function (container, model) {

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


			model.getAllDishes(type, filter, function(data){
				data.results.forEach(function(key){
		      var innerDiv = ItemView(container,model,key)
		        .appendTo(outerDiv);
		    });

			}, function(error){
				window.alert("Error in SearchView")

			})






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
