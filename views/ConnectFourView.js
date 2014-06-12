$(document).ready(function() {

  var ConnectFourView = {
  	placeCounter: function(colId) {
    	$(colId).find("td.empty:last").removeClass("empty").addClass(colour);
  	}
  }

  var model = new ConnectFourModel();
  var controller = new ConnectFourController(ConnectFourView, model);


$("table").on('click', function() {

  var colId = $(this).prop('id');
  controller.gameTurn(colId);

});


})