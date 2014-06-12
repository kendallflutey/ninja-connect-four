var ConnectFourView = function(tableSelector) {


  var click = function() 
  {
    $(tableSelector).on("click", function()
    {
      return $(this).attr("id");
    };
  }



  var placeCounter = function()
    {
      var emptyCell = $(self).find("td.empty:last");
      emptyCell.removeClass("empty");
      emptyCell.addClass(colour);
      return $(this).[whatever is inside .data-col];
    }
};