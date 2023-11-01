let moves = 0;
let time = 0;
let timerInterval;
let simpleGame = false;

function swapTiles(cell1, cell2) 
{
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
}

function shuffle() 
{
	moves = 0;
  	time = 0;
  	document.getElementById("time").textContent = "Amount of time spent on current game: 0 seconds";
	startTimer();
	//Use nested loops to access each cell of the 3x3 grid
	for (var i = 0; i < 1000; i++) {
		var row = Math.floor(Math.random() * 4) + 1;
		var column = Math.floor(Math.random() * 4) + 1;
		clickTile(row, column);
	  }
	swapTiles("cell4", "cell4", "tile16");
}

function clickTile(row, column)
{
	var cell = document.getElementById("cell"+row+column);
	var tile = cell.className;
	
	if(tile!="tile16") {
		//check if the white tile is on the right
		if(column<4)
        {
			if(document.getElementById("cell"+row+(column+1)).className=="tile16")
            {
				swapTiles("cell"+row+column, "cell"+row+(column+1));
				moves++;
				setTimeout(() => {Win()}, 1000); //async global function to delay alert window execution for 1 second
                return;
			}
		}
		//check if the white tile is on the left
		if(column>1)
        {
			if(document.getElementById("cell"+row+(column-1)).className=="tile16")
            {
				swapTiles("cell"+row+column,"cell"+row+(column-1));
				moves++;
				setTimeout(() => {Win()}, 1000); //async global function to delay alert window execution for 1 second
				return;
			}
		}
		//check if the white tile is above
		if(row > 1)
        {
			if(document.getElementById("cell"+(row-1)+column).className=="tile16")
            {
				swapTiles("cell"+row+column, "cell"+(row-1)+column);
				moves++;
				setTimeout(() => {Win()}, 1000); //async global function to delay alert window execution for 1 second
				return;
			}
		}
		//check if the white tile is below
		if(row < 4)
        {
			if(document.getElementById("cell"+(row+1)+column).className=="tile16")
            {
				swapTiles("cell"+row+column, "cell"+(row+1)+column);
				moves++;
				setTimeout(() => {Win()}, 1000); //async global function to delay alert window execution for 1 second
				return;
			}
		}
	}

}

function Win()
{
    //Write some code logic here that determines if the tiles are all in order, hence the puzzle is won. If so, alert to the user that they won.
    if (
		document.getElementById("cell11").className=="tile1" && document.getElementById("cell12").className=="tile2" && document.getElementById("cell13").className=="tile3" && document.getElementById("cell14").className=="tile4" && document.getElementById("cell21").className=="tile5" && document.getElementById("cell22").className=="tile6" && document.getElementById("cell23").className=="tile7" && document.getElementById("cell24").className=="tile8" && document.getElementById("cell31").className=="tile8" && document.getElementById("cell32").className=="tile10" && document.getElementById("cell33").className=="tile11" && document.getElementById("cell34").className=="tile12" && document.getElementById("cell41").className=="tile13" && document.getElementById("cell42").className=="tile14" && document.getElementById("cell43").className=="tile15" && document.getElementById("cell44").className=="tile16") {
			stopTimer();
			window.alert("Congratulations!!\n Amount spent on current game in seconds: " + time +"\n Number of moves so far: " + Number_of_moves+"\nWould you like to play again?");
			if(Response) {
				window.location.reload(); //Reload page upon confirmation
				shuffle();
			}
    }
}

function startTimer()
{
	timerInterval = setInterval(() =>
	{
	  time++;
	  document.getElementById("time").textContent = "Amount of time spent on current game: " + time + " seconds";
	}, 1000);
}
  
function stopTimer() 
{
	clearInterval(timerInterval);
}

function createSimpleGame() {
	simpleGame = true;
	shuffle();
	simpleGame = false;
}
  
// Initialize the game when the page loads
window.onload = function () {
	shuffle();
};