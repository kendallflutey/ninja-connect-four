function ConnectFourModel() {

	this.board = [[0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0]];

	this.red = 1;
	this.yellow = 2;

};

ConnectFourModel.prototype.UpdateCell = function(ColumnNumber, PlayerColour) {
	
	var colNum = {
		"column-1": 0,
		"column-2": 1,
		"column-3": 2,
		"column-4": 3,
		"column-5": 4,
		"column-6": 5,
		"column-7": 6
	};

	var LowZero = board.length();
	
	for(var i = LowZero; i > 0; i--) {
		if board[i, column[ColumnNumber]] === 0 {
			LowZero = i;
		};
	};
	board[LowZero,column[ColumnNumber]] = PlayerColour;
}; 
