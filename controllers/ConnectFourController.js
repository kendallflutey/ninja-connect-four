var ConnectFourController = function (view, model)
	{
		this.turns = 0;
  		this.currentColour = "";
  		this.winner;
  		this.view = view;
	};

var gameTurn = function("table") //this needs to
    {
    	view.click();
		//self = $(this);
		setCounterColour();		//whose turn it is.
		view.placeCounter();	//places counter depending on the players turn.
		model.UpdateCell(this., colour);
		turns +=1;
    };

var setPlayerColour = function()
  {
    var oddeven = turns%2;
    if(oddeven==0)
    {
    return colour = "red";
    }
    if(oddeven==1)
    {
    return colour = "yellow";
    }
  }


