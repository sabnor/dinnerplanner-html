
var WelcomeView = function (container, model) {

	var textElement = container.find("#textElement");

	textElement.html("<p class='text-center'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>");


		this.welcomeButton = container.find("#welcomeButton");

		this.hide = function() {
			container.fadeOut();
		}

		this.show = function(){
			container.fadeIn();
		}
}
