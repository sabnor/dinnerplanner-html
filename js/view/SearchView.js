
var searchView = function (container, model) {


//loopar igenom alla dishes för bild och namn
	    var outerDiv = document.createElement('div');
	    $(outerDiv).addClass('row');

	    model.getAllDishes("dessert").forEach(function(key){
	      var innerDiv = makeDishView(key['id'])
	        .appendTo(outerDiv);
	    });

			
			var allDishImg = container.find("#allDishImg");
			allDishImg.html(outerDiv);
}
