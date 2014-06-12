function ConnectFourView(buttonToRespondTo, imageToMove) {
	this.buttonToRespondTo = document.querySelector(buttonToRespondTo);
	this.imageToMove = document.querySelector(imageToMove);
}
 
PirateShipView.prototype.SetLocationOfShip = function(locationOfShip) {
	this.imageToMove.style.left = locationOfShip;
};
