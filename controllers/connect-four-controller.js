function ConnectFourController(model, view)
{
  self = this;
  this.model = model;
  this.view = view;

  this.view.column.addEventListener('click', this.placePiece, false);
}

ConnectFourController.prototype.PlacePiece = function()
{
  var locationOfPiece = self.model.getCell();
  self.view.setPlace(locationOfPiece);
}