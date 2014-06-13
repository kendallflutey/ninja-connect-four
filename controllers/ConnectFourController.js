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
  this.winner = winner;
  if(typeof winner !== "undefined"){
    this.view.announceWinner(winner)
    this.reset();
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

ConnectFourController.prototype.reset = function() {
  this.view.reset();
  this.model.reset();
  this.turns = 0;
  this.winner = undefined;
}
