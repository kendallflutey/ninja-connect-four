var ConnectFourModel = function() {

	this.board = [[0,0,0,0,0,0,0],
							 	[0,0,0,0,0,0,0],
							 	[0,0,0,0,0,0,0],
							 	[0,0,0,0,0,0,0],
							 	[0,0,0,0,0,0,0],
							 	[0,0,0,0,0,0,0]];



};

ConnectFourModel.prototype.UpdateCell = function(colId, PlayerColour) {
	
	var colNum = {
		"column-1": 0,
		"column-2": 1,
		"column-3": 2,
		"column-4": 3,
		"column-5": 4,
		"column-6": 5,
		"column-7": 6
	};

	var colorConverter = {
			"red": 1,
			"yellow": 2
	}

	var LowZero = 6;
	
	for(var i = LowZero; i > 0; i--) {
		if(this.board[i, colNum[colId]] === 0) {
			LowZero = i;
		};
	};
	this.board[LowZero,colNum[colId]] = colorConverter[PlayerColour];
}; 
