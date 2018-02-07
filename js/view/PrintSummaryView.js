var PrintSummaryView = function (container, model) {

var numberOfGuests = container.find("#numberOfGuests");
numberOfGuests.html(model.getNumberOfGuests())

var outerDiv = document.createElement('div');

model.getFullMenu().forEach(function(id){
  var dishObject = model.getDish(id)

  var rowElement = document.createElement('div')
  var rowObject = $(rowElement).addClass('row');

  var nameElement = document.createElement('div')
  var nameCol = $(nameElement).addClass('pictureview').text(dishObject.name)
    .appendTo(rowElement);

  var nameElement = document.createElement('div')
  var nameCol = $(nameElement).addClass('col').text(dishObject.name)
    .appendTo(rowElement);

  var priceElement = document.createElement('div')
  var sum = 0
  var ingredients = dishObject.ingredients.forEach(function(ingredientObject){
    var price = ingredientObject['price']
    sum = sum+price
  });
  var priceCol = $(priceElement).addClass('col').text(sum*model.getNumberOfGuests() +model.getCurrency())
    .appendTo(rowElement);

    rowObject
      .appendTo(outerDiv);
  totalSum = totalSum+sum
});


var dishRows = container.find("#dishRows");
dishRows.html(outerDiv);

var printSum = container.find("#printSum");
printSum.text(totalSum*model.getNumberOfGuests()+ " " +model.getCurrency());



<div class="row">
  <div class="col">

    <div class="pictureview">
            <img src="images/meatballs.jpg" alt="" class="Square mb-1">
    </div>
</div>

  <div class="col">
      <h2>Meatball</h2>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          </p>

  </div>

  <div class="col">
    <h2>Preparation</h2>

    <p>
    BESKRIVNING
  </p>
  </div>
</div>
}
