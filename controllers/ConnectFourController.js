function ConnectFourController(model, view)
{
  self = this;
  this.model = model;
  this.view = view;

  this.view.buttonToRespondTo.addEventListener('click', this.placePiece, false);
}

ConnectFourController.prototype.PlacePiece = function()
{
  var locationOfPiece = self.model.getColumn();
  self.view.setPlace(locationOfPiece);
}