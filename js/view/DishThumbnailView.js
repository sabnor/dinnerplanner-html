

  var DishThumbnailView = function (container, model) {



    var outerDiv = document.createElement('div');
    $(outerDiv).addClass('row');

    model.getFullMenu("dessert").forEach(function(key){
      var innerDiv = makeDishView(key['id'])
        .appendTo(outerDiv);
    });



function makeDishView(dish) {

  //Outer div
	var divElement = document.createElement('div')
	var divObject = $(divElement).addClass('col-xs-3');

  //Card
	var box = document.createElement('div');
	$(box).addClass('pictureview centerr')
			.appendTo(divObject);

  var dishImg = document.createElement('img');
  $(dishImg).addClass('tumnagel xs-1').attr('src','images/'+model.getDish(dish).image)
			.appendTo(box);

  var label = document.createElement('label');
  $(label).text(model.getDish(dish).name)
  .appendTo(box)
    return divObject;

  };
var dishThumbnail = container.find("#dishThumbnail");
dishThumbnail.html(outerDiv);

}
