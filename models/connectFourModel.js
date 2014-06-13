function ConnectFourModel() {

	 this.board =[[0,0,0,0,0,0,0],
			 	  [0,0,0,0,0,0,0],
			 	  [0,0,0,0,0,0,0],
			 	  [0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0]];
			 };

	var red = 1;
	var yellow = 2;


ConnectFourModel.prototype.UpdateCell = function(ColumnNumber, PlayerColour) {

	var PlayerNumber;

	if(PlayerColour === "red") {
		PlayerNumber = 1};
	if(PlayerColour === "yellow") {
		PlayerNumber = 2};

	var colNum = {
		"column-1": 0,
		"column-2": 1,
		"column-3": 2,
		"column-4": 3,
		"column-5": 4,
		"column-6": 5,
		"column-7": 6
	};

	for(var i = this.board.length-1; i >= 0; i--) {
		if (this.board[i][colNum[ColumnNumber]] === 0)
		{
			this.board[i][colNum[ColumnNumber]] = PlayerNumber;
			return;
		}
	};
};

ConnectFourModel.prototype.Winner = function(colour)
	{
		if	(checkRow(this.board) == true ||
			checkColumn(this.board) == true ||
			checkDiagonalFromLeft(this.board) == true ||
			checkDiagonalFromRight(this.board) == true)
		{
			return colour;
		}

	};

ConnectFourModel.prototype.reset = function() {
	this.board =[[0,0,0,0,0,0,0],
			 	 [0,0,0,0,0,0,0],
			 	 [0,0,0,0,0,0,0],
			 	 [0,0,0,0,0,0,0],
			 	 [0,0,0,0,0,0,0],
			 	 [0,0,0,0,0,0,0]];
	 };

var cellAt = function(board, row, col) {
	if (board[row] != undefined) {
		return board[row][col];
	}
	return undefined;
};

var checkRow = function(board){
	for(var row = 0; row<board.length; row++)
	{
		for(var col = 0; col<board[row].length; col++)
		{
			if( cellAt(board, row, col) != 0
				&& cellAt(board, row, col) === cellAt(board, row, col+1)
				&& cellAt(board, row, col) === cellAt(board, row, col+2)
				&& cellAt(board, row, col) === cellAt(board, row, col+3))
			{
				return true;
			}
		}
	}
};

var checkColumn = function(board) {
	for(var row = 0; row<board.length; row++)
	{
		for(var col = 0; col<board[row].length; col++)
		{
			if( cellAt(board, row, col) != 0
				&& cellAt(board, row, col) === cellAt(board, row+1, col)
				&& cellAt(board, row, col) === cellAt(board, row+2, col)
				&& cellAt(board, row, col) === cellAt(board, row+3, col))
			{
				return true;
			}
		}
	}
};

var checkDiagonalFromLeft = function(board) {
	for(var row = 0; row<board.length; row++)
	{
		for(var col = 0; col<board[row].length; col++)
		{
				if( cellAt(board, row, col) != 0
				&& cellAt(board, row, col) === cellAt(board, row+1, col+1)
				&& cellAt(board, row, col) === cellAt(board, row+2, col+2)
				&& cellAt(board, row, col) === cellAt(board, row+3, col+3))
			{
				return true;
			}
		}
	}
};

var checkDiagonalFromRight = function(board) {
	for(var row = 0; row<board.length; row++)
	{
		for(var col = 0; col<board[row].length; col++)
		{
			if(cellAt(board, row, col) != 0
				&& cellAt(board, row, col) === cellAt(board, row+1, col-1)
				&& cellAt(board, row, col) === cellAt(board, row+2, col-2)
				&& cellAt(board, row, col) === cellAt(board, row+3, col-3))
			{
				return true;
			}
		}
	}
};
