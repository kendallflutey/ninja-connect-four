$(document).ready(function() {

	var model = new ConnectFourModel();
	var view = new ConnectFourView("#movePirateShip", "#pirateShipImage");

	var controller = new ConnectFourController(model, view);

});

