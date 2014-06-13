$(document).ready(function() {

  var ConnectFourView = {
  	placeCounter: function(colId, colour) {
    	$("#" + colId).find("td.empty:last").removeClass("empty").addClass(colour);
  	},
    announceWinner: function(winner) {
      alert(winner + " is the winner!")
    },
    reset: function() {
      $("td.red").removeClass("red").addClass("empty");
      $("td.yellow").removeClass("yellow").addClass("empty");
    }
  }

  var model = new ConnectFourModel();
  var controller = new ConnectFourController(ConnectFourView, model);


  $("table").on('click', function() {

    var colId = $(this).prop('id');
    controller.gameTurn(colId);
    if(typeof controller.winner !== "undefined")
    {
      controller.reset();
    }
  });

})
