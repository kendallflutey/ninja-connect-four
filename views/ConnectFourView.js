$(document).ready(function() {

  var ConnectFourView = {
  	placeCounter: function(colId, colour) {
    	$("#" + colId).find("td.empty:last").removeClass("empty").addClass(colour);
  	},
    announceWinner: function(winner) {
      alert(winner + " is the winner!")
    }
  }

  var model = new ConnectFourModel();
  var controller = new ConnectFourController(ConnectFourView, model);


  $("table").on('click', function() {

    var colId = $(this).prop('id');
    controller.gameTurn(colId);

  });

})
