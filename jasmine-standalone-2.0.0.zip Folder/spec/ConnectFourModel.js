describe("ConnectFourModel", function() {

  beforeEach(function() {
    this.model = new ConnectFourModel();
  })

  it("updates the board", function() {
    this.model.UpdateCell("column-1", "yellow");
    expect(this.model.board[5][0]).toEqual(2);
  })
});