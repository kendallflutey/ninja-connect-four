$(document).ready(function() {

  $("table").on("click", function () {
    var emptyCell = $(this).find("td.empty:last");
    emptyCell.removeClass("empty");
    emptyCell.addClass("red");
  })

	// var model = new ConnectFourModel();
	// var view = new ConnectFourView("#movePirateShip", "#pirateShipImage");

	// var controller = new ConnectFourController(model, view);

});

