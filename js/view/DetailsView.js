

  var DetailsView = function (container, model, id) {

    var dishObject = model.getDish(100)


    //--------------------------------------------------------------------
    //Creating the dish-informations
    var labelElement = document.createElement('label')
    var labelObject = $(labelElement).text(dishObject.name);

    var divElement = document.createElement('div');
    $(divElement).appendTo(labelElement);

    var dishImg = document.createElement('img');
    $(dishImg).addClass('img-thumbnail mb-1').attr('src','images/'+dishObject.image)
  			.appendTo(divElement);

    var descriptionElement = document.createElement('p');
    $(descriptionElement).text(dishObject.description)
    .appendTo(divElement);

    var dishLabel = container.find("#dishLabel");
    dishLabel.html(labelElement);

    var numberOfGuests = container.find("#numberOfGuests");
    numberOfGuests.html(model.getNumberOfGuests());


//--------------------------------------------------------------------
//Creating the ingredient-rows
var outerDiv = document.createElement('div')

dishObject.ingredients.forEach(function(ingredientObject){
    var price = ingredientObject['price']

    var rowElement = document.createElement('div')
    $(rowElement).addClass('row');

    var ingredientQuantityElement = document.createElement('div');
    $(ingredientQuantityElement).addClass('col').text(ingredientObject['quantity']+' '+ingredientObject['unit'])
    .appendTo(rowElement);

    var ingredientNameElement = document.createElement('div');
    $(ingredientNameElement).addClass('col').text(ingredientObject['name'])
    .appendTo(rowElement);

    var ingredientPriceElement = document.createElement('div');
    $(ingredientPriceElement).addClass('col').text(ingredientObject['price']+' '+model.getCurrency())
    .appendTo(rowElement);

    $(rowElement).appendTo(outerDiv)
});

var ingredientrows = container.find("#ingredientrows");
ingredientrows.html(outerDiv);



    //var nameElement = document.createElement('div')
    //var nameCol = $(nameElement).addClass('col').text(dishObject.name)
      //.appendTo(rowElement);
}
