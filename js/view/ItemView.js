var ItemView = function (container, model, dish) {

  //Outer div
	var divElement = document.createElement('div')
	var divObject = $(divElement).addClass('col-xs-3');

  //Card
	//var link = document.createElement('a');
	//$(link).attr('id','openImg')
	//.attr('href','#')
	//.appendTo(divObject);

	var box = document.createElement('div');
	$(box).addClass('pictureview centerr')
		.appendTo(divObject);


  var dishImg = document.createElement('img');
  $(dishImg).addClass('tumnagel xs-1').attr('id',dish).attr('src','images/'+model.getDish(dish).image)
			.appendTo(box);

  var label = document.createElement('label');
  $(label).text(model.getDish(dish).name)
  .appendTo(box)
    return divObject;

}
