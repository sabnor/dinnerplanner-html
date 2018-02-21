//GeneralViewController Object constructor
//hide and show pages
var GeneralStateController = function() {

  var views = [];
  var screens = {};

  var hideAll = function(){
    for (var key in views){
      views[key].hide();
    }
  }

this.addView = function(view){
  views.push(view);
}


this.addScreen = function(name, views){
  screens[name] = views;
}

this.showScreen = function (name) {
  hideAll();
  for(var key in screens[name]){
    screens[name][key].show();
  }
}

}


//byt state funktion
// current view
