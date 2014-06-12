var ConnectFourView = function(tableSelector) {


  $(tableSelector).on("click", function() {
    self = $(this);
    setPlayerColour();
    placeCounter();
    turns +=1;
  });

  var turns = 0;
  var colour = "";

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

  var placeCounter = function()
    {
      var emptyCell = $(self).find("td.empty:last");
      emptyCell.removeClass("empty");
      emptyCell.addClass(colour);
    }
};