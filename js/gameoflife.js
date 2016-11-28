//The game continue or not
var gameContinue = false;
//The generation of cells
var generation = 1; 
//The matrix where the cells live
var matrix = [
	[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
	[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0],
	[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
	[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1],
	[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]
];

tableCreate(); //Show the current matrix

//Play and stop the game
function stopPlayLife() {
	if (gameContinue) {
		console.log("Life stopped");
		gameContinue = false;
	} else {
		console.log("Life begin");
		gameContinue = true;
		startGame();
	}
}

function startGame() {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			//Get the number of alive cells around the cell x,y
			var aliveCells = getAliveCells(x,y);

			/*If the function evaluates that the cell has to live, 
			then the value is changed by one*/
			if (liveDie(aliveCells)) {
				matrix[y][x] = 1;
			} else {
				/*If the number of alive cells is diferent than two
				then the cell can't live by overpopulation or loneliness.
				So the value change to zero*/
				if (aliveCells != 2) {
					matrix[y][x] = 0;
				}
			}

		}
	}

	//Increases the generation. So we know the number of the generation.
	generation++;

	evaluateGame();
}

/*Evaluate if the game is running or paused. Also delete the
old table and create the new table with the new values in the
matrix*/
function evaluateGame() {
	if (gameContinue) {
		//Print in console the number of the generation
		console.log(generation)
		showGeneration();

		//The old container is deleted to create a new with the new generation
		var element = document.getElementById("div_container");
		element.parentNode.removeChild(element);

		//Create a new table with the new generation
		tableCreate();

		//Continue with the next generation
		setTimeout(startGame,100);
	} else {
		//Print in console the number of the generation
		console.log(generation)
		showGeneration();
	}
}

/*
Return the number of alive cells around x,y
*/
function getAliveCells(x,y){
	var aliveCells = 0;

	//It is readed each cell around the cell x,y
	aliveCells += evaluateCell((x-1),(y-1));
	aliveCells += evaluateCell((x),(y-1));
	aliveCells += evaluateCell((x+1),(y-1));
	aliveCells += evaluateCell((x-1),(y));
	aliveCells += evaluateCell((x+1),(y));
	aliveCells += evaluateCell((x-1),(y+1));
	aliveCells += evaluateCell((x),(y+1));
	aliveCells += evaluateCell((x+1),(y+1));

	return aliveCells;
}

/*
This function evaluates each cell around of the cell that 
is being evaluated
*/
function evaluateCell(x,y){
	if ((x >= 0) && (y >= 0)) {
		if ((x < matrix.length) && (y < matrix.length)) {
			if (matrix[y][x] == 1) {
				return 1; //Alive cell
			} else {
				return 0; //Dead cell
			}
		} else {
			return 0; //Out of the matrix
		}
	} else {
		return 0; //Out of the matrix
	}
}

/*
It is evaluated if with the number of alive cells, 
the current cell is going to die or live
*/
function liveDie(aliveCells) {
	if (aliveCells == 3) {
		return true;
	} else {
		return false;
	}
}

/*Creation of the table that is going to contain
the matrix*/
function tableCreate(){
    var body = document.body;
    var table  = document.createElement("table");
    var div = document.createElement("div");
    table.id = "tableLive";
    div.id = "div_container";

    for(var i = 0; i < matrix.length; i++){
        var tr = table.insertRow(); //Creation of a new row in the table
        for(var j = 0; j < matrix[i].length; j++){
            	var td = tr.insertCell(); //Creation of a new cell in the row
            	if (matrix[i][j] == 1) { //Cell is alive
            		td.style.background = "red";
            	} 
            	else { //Cell is dead
            		td.style.background = "black";
            	}          
            }
        }

    div.className = "container";
    div.appendChild(table);

    if (body != null) {
    	body.appendChild(div);
    } else {
    	console.log("There is no body element");
    }
}

/*Evaluate if the game is running*/
function addRandomCells(){
	if (gameContinue) {
		alert("Life is running you can not generate new life");
	} else {
		generateRandomCells();
	}
}

/*Generate 100 cells in the matrix*/
function generateRandomCells(){
	generation = 1;

	//The old table is deleted to create a new with the new generation
	var element = document.getElementById("div_container");
	if (element != null) {
		element.parentNode.removeChild(element);
	}

	//Clear the matrix
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			matrix[y][x] = 0;
		}
	}

	//Generating new random cells
	for (var i = 0; i < 101; i++) {
		y = Math.floor((Math.random() * 29) + 0);
		x = Math.floor((Math.random() * 29) + 0);
		matrix[y][x] = 1;
	}

	tableCreate();
	showGeneration();
}

function showGeneration(){
	document.getElementById("id_generation").innerHTML = generation;	
}