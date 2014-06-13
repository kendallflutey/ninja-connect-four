var ConnectFourController = function (view, model) {
	this.turns = 0;
	this.winner;
	this.view = view;
	this.model = model;
};

ConnectFourController.prototype.gameTurn = function(colId) {
	this.turns +=1;
  this.setPlayerColour();
  this.view.placeCounter(colId, colour);
  this.model.UpdateCell(colId, colour);
  var winner = this.model.Winner(colour);
  if(typeof winner !== "undefined"){
    this.view.announceWinner(winner)
  }
};

ConnectFourController.prototype.setPlayerColour = function() {
    if(this.turns%2 === 0) {
    	return colour = "red";
    }
    else {
    	return colour = "yellow";
    }
}

