
var Loading = function () {

	container.loading = function(){
		var myVar = setTimeout(showPage(), 3000);
	};
	var showPage = function() {
		console.log('loading')
	document.getElementById("loader").style.display = "none";
	document.getElementById("myDiv").style.display = "block";
	}



}
