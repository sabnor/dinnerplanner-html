var ItemView = function (container, model, dish) {

  //Outer div
	var divElement = document.createElement('div')
	var divObject = $(divElement).addClass('col-xs-3');

  //Card
	var link = document.createElement('a');
	$(link).attr('href','#').attr('id','openImg')
	.appendTo(divObject);

	var box = document.createElement('div');
	$(box).addClass('pictureview centerr')
			.appendTo(link);

  var dishImg = document.createElement('img');
  $(dishImg).addClass('tumnagel xs-1').attr('src','images/'+model.getDish(dish).image)
			.appendTo(box);

  var label = document.createElement('label');
  $(label).text(model.getDish(dish).name)
  .appendTo(box)
    return divObject;

}
