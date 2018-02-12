//ExampleViewController Object constructor
var genController = function(view, model ) {

 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });
}



		$('#welcomeView').show();
		$('#sidebarView').hide();



//Till startsidan-dishes
var showDishpage = function() {
	welcome.hide()
	// side.show()
	$('#welcomeView').hide();
	$('#sidebarView').show();
	};
  //
	// $("#welcomeButton").click(function(){
	// 	showDishpage();
	// });

	// document.getElementById("welcomeButton").addEventListener("click", showDishpage, false);
welcomeView.welcomeButton.onclick = showDishpage();



//byt state funktion
// current view
