
var NoInternetView = function (container, model) {
		//var myVar = setTimeout(view, 3000);
		this.hide = function() {
	    container.hide();
	  }

	  this.show = function(){
	    container.show();
	  }

		var image = container.find("#image")

		var myPix = new Array("error1.jpg", "error2.jpg", "error3.jpg");
		var randomNum = Math.floor(Math.random() * myPix.length);
		//document.getElementById("myPicture").src = myPix[randomNum];

		var dishImg = document.createElement('img');
	  $(dishImg).addClass('img-op').attr('alt','Responsive image').attr('src','images/'+myPix[randomNum]);

		image.html(dishImg);


}
