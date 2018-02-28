var ItemView = function (container, model, dish) {

  //Outer div
	var divElement = document.createElement('div')
	var divObject = $(divElement).addClass('col-xs-3');


	var box = document.createElement('div');
	$(box).addClass('pictureview centerr').attr('id',dish.id)
		.appendTo(divObject);


  var dishImg = document.createElement('img');
  $(dishImg).addClass('tumnagel xs-1').attr('src','https://spoonacular.com/recipeImages/'+dish.image)
			.appendTo(box);

  var label = document.createElement('label');
  $(label).text(dish.title)
  .appendTo(box)
    return divObject;

}
