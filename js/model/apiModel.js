var ApiModel = function() {
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search",
  "method": "GET",
  "headers": {
    "X-Mashape-Key": "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB",
    "Cache-Control": "no-cache",
    "Postman-Token": "6d6108e7-6e82-59b6-dcd2-c756f111766c"
  }
}

$.ajax(settings).done(function (response) {
  //console.log(response);
});
}
