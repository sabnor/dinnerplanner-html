

var outerDiv = document.createElement('div');
$(outerDiv).addClass('row');

model.getFullMenu("dessert").forEach(function(key){
  var innerDiv = makeDishView(key['id'])
    .appendTo(outerDiv);
});

var DishThumbnailView = new ExampleView($("#exampleView"),model);
