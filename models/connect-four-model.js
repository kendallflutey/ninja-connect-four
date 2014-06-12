function ConnectFourModel(){
{
  this.location = 0;
}

ConnectFourModel.prototype.getCell = function(){
  this.position += 10;
  return this.location;
}
