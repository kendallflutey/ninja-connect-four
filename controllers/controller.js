function PirateShipController(model, view)
{
self = this;
this.model = model;
this.view = view;
 
this.view.buttonToRespondTo.addEventListener('click', this.MoveShip, false);
}

PirateShipController.prototype.MoveShip = function()
{
var locationOfShip = self.model.GetLocationOfShip();
self.view.SetLocationOfShip(locationOfShip);
}

 

 function ConnectFourController(model, view){
 	self = this;
 	this.model = model;
 	this.view = view;

 	$("columnID").call(view).on('click', );
 };