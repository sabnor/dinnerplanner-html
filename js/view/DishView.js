

  var DishView = function (container, model) {
    console.log("Wazzap");


    var dishObject = model.getDish(100)

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




    //var nameElement = document.createElement('div')
    //var nameCol = $(nameElement).addClass('col').text(dishObject.name)
      //.appendTo(rowElement);
}
