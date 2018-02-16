var SearchViewController = function(view, model){

  console.log("hello world");
  view.searchButton.click(function(){
    console.log("plus");
    console.log(model.getNumberOfGuests())

  });


};
