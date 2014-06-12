var ConnectFourController = function (view, model) {
	this.turns = 0;
	this.winner;
	this.view = view;
	this.model = model;
};

ConnectFourController.prototype.gameTurn = function(colId) {
	this.setPlayerColour();		
	this.view.placeCounter(colId);
	this.model.UpdateCell(colId, this.setPlayerColour);
	this.turns +=1;
};

ConnectFourController.prototype.setPlayerColour = function() {
    if(this.turns%2 === 0) {
    	return colour = "red";
    }
    else {
    	return colour = "yellow";
    }
}

