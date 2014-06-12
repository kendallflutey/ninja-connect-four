function ConnectFourModel() {

	var board = [[0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0],
							 [0,0,0,0,0,0,0],
							 [1,0,0,0,0,0,0]];

	var red = 1;
	var yellow = 2;

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


	// var LowZero = ColumnNumber.transpose.lastIndexOf("0")






ConnectFourModel.prototype.GameState = function() {
	// "recieve state from view via controller"
	// "given state has someone won? based on my criteria below"
	CheckColumn;
	CheckRow;
	CheckDiagonal;
};

function CheckColumn() {
	for (var i = 1; i > 7; i++) {
		$("#column-"+i).CheckTds
	};

	function CheckTds() {
		if $("#column-1 td[data-row='1']").attr("class") === "red"
			"this stuff!"
		else if $("#column-1 td[data-row='1']").attr("class") === "yellow"
	};

};