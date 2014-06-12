window.onload = function(){

  var view = new ConnectFourView("table");
  var model = new ConnectFourModel();
  var controller = new ConnectFourController(view, model);
}

