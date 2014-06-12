function PirateShipModel() {
this.location = 0;
}
 
PirateShipModel.prototype.GetLocationOfShip = function() {
this.location += 10;
return this.location;
}

function ConnectFourModel() {

};

ConnectFourModel.prototype.GameState = function() {
	// "recieve state from view via controller"
	// "given state has someone won? based on my criteria below"
	CheckColumn;
	CheckRow;
	CheckDiagonal;
};

function CheckColumn() {
	for (var i = 1; i > 7; i++) {
		
		$("#column-"+i)

	};
}