
var SearchView = function (container, model) {

	this.openImg = container.find("#openImg");


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
