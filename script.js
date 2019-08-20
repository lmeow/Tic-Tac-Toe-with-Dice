/* 
TIC-TAC-TOE w/ DICE
Maja Frankiewicz


ABOUT GAME:

	~ 	This is a tic-tac-toe game with a dice created with HTML, CSS and JavaScript.
		
INSTRUCTIONS:

	~	Please roll the dice by pressing the "Roll dice"-button.
	
	~	If the dice lands on a odd number, X begins.
		If the dice lands on a even number, O begins.
		
	~	It's also possible to choose who goes first, by pressing one of the small buttons
		under the "Roll dice"-button.

	~	First to 5 winning rounds, wins!

	~   If a player tries to score a point for a round, after the first winner, but before a new round has started, 
		then the winner gains an extra point.


***CODE:***

*/

var frstPlayer=""; 													// Declares variable for first player to no one.

// ~~~~ DICE ~~~~

var dice = {sides: 6,  roll: function () {							// Declares a dice of 6 sides which gives you a randomNumber with value between 1-6. 
	var randomNumber = Math.floor(Math.random() * this.sides) + 1;  // Generates a random number between 1-6.
   	return randomNumber;											// Returns random number.
  }
}

/*
	This function prints the dice number in the dice box.
*/
function printNumber(number) {
  var diceNumber = document.getElementById('diceNumber'); 			// Declares variable for the dice box.
  diceNumber.innerHTML = number;									// Returns the dice number in the dice box.		
}

/*
	This function rolls the dice.
*/
document.getElementById('diceButton').onclick = function() {		// Runs function when the dice roll-button is clicked. 
	replay();														// Resets (erases from board, dice and unselecta the small X/O-buttons).
	var result = dice.roll();										// Declares variable with the value of dice.roll()
	printNumber(result);											// Prints the number in the dice-box by sending the value 
																	// as parameter of printNumber function.
};


// ~~~~ SMALL X/O BUTTONS (UNDER ROLL DICE-BUTTON) ~~~~

document.getElementById('x').onclick = function() {					// Runs function when the small x-button is clicked.
	replay();														// Resets (erases from board, dice and unselects the small X/O-buttons).
	document.getElementById('o').style.borderStyle = 'none';		// Erase border around around o-button (if there is one).
	document.getElementById('x').style.borderStyle = 'solid'; 		// Make a border around the x-button.
	frstPlayer="x";													// First player variable value is now "x".
}

document.getElementById('o').onclick = function() {					// Runs function when the small o-button is clicked.			
	replay();														// Resets (erases from board, dice and unselects the small X/O-buttons).
	document.getElementById('x').style.borderStyle = 'none'; 		// Erases border around x-button (if there is one).
	document.getElementById('o').style.borderStyle = 'solid';		// Makes a border around the o-button.
	frstPlayer="o";													// First player variable value is now "x".
	}


// ~~~~ TIC-TAC-TOE ~~~~

var turn = document.getElementById("turn"), 						// Declares variable for Id in element above the tic-tac-toe-scoring.
	sqrs = document.querySelectorAll("#main div"), 					// Gets all the div elements in the document with ID "main".
	score = document.getElementById("score"),						// Declares variable for element that holds he scoring.
	x_or_o = 0,														// Declares variable with amount of draw to zero. This will be used for alternating turns between X and O.
	score_x = 0,													// Declares variable with X's score to zero.
	score_o = 0;													// Declares variable with X's score to zero.


/*
	This function changes scoring and changes the CSS-feature for the winning boxes.
*/
function selectWinner(b1,b2,b3){
								
	if (b1.innerHTML == 'X'){										// If the the first winning box is 'X...'	
		score_x+=1;													// Then increment its score by 1.
		score.innerHTML= "X: " + score_x + " | O: " + score_o; 		// Display the X's and O's scoring in element in HTML.
	}
	else if (b1.innerHTML == 'O'){
		score_o+=1;													// Else, increment O's score by 1.
		score.innerHTML= "X: " + score_x + " | O: " + score_o; 		// Display the X's and O's scoring in element in HTML.
	}
	b1.classList.add("score");										// Set the class "score" from CSS to this  
	b2.classList.add("score");										// Set the class "score" from CSS to this 
	b3.classList.add("score");										// Set the class "score" from CSS to this 
		
	if (score_x==5){												// If X's scoring is 5...
		turn.innerHTML = "X won! Congrats!";						//...Display this in element in HTML.
		score_x = 0;												// Reset the score for X and O.
		score_o = 0;
	}
	else if (score_o==5){											// If O's scoring is 5...
		turn.innerHTML = "O won! Congrats!"							//...Display this in element in HTML.
		score_x = 0;												// Reset the score for X and O.
		score_o = 0;
	}
	else {
		turn.innerHTML = "Winner: "+ b1.innerHTML;					// Else, display this rounds winner in element in HTML.
	}
}

/*
	This function checks if there is a winner. 
*/
function getWinner() {											

	var sqr1 = document.getElementById("box1"),						// Declares variable for every box in the tic-tac-toe
		sqr2 = document.getElementById("box2"),						// to make the code less cluttery.
		sqr3 = document.getElementById("box3"),
		sqr4 = document.getElementById("box4"),
		sqr5 = document.getElementById("box5"),
		sqr6 = document.getElementById("box6"),
		sqr7 = document.getElementById("box7"),
		sqr8 = document.getElementById("box8"),
		sqr9 = document.getElementById("box9");
			
	/*
		The code below is comparing if the elements in a row or diagonal have the same value.
		If they do, it runs the selectWinner function on those elements.
	*/

	// Square boxes: 1 2 3
	if (sqr1.innerHTML != "" && sqr1.innerHTML == sqr2.innerHTML && sqr1.innerHTML == sqr3.innerHTML)
		selectWinner(sqr1,sqr2,sqr3);

	// Square boxes: 4 5 6 
	if (sqr4.innerHTML != "" && sqr4.innerHTML == sqr5.innerHTML && sqr4.innerHTML == sqr6.innerHTML)
		selectWinner(sqr4,sqr5,sqr6);

	// Square boxes: 7 8 9 
	if (sqr7.innerHTML != "" && sqr7.innerHTML == sqr8.innerHTML && sqr7.innerHTML == sqr9.innerHTML)
		selectWinner(sqr7,sqr8,sqr9);

	// Square boxes: 1 4 7
	if (sqr1.innerHTML != "" && sqr1.innerHTML == sqr4.innerHTML && sqr1.innerHTML == sqr7.innerHTML)
		selectWinner(sqr1,sqr4,sqr7);

	// Square boxes: 2 5 8
	if (sqr2.innerHTML != "" && sqr2.innerHTML == sqr5.innerHTML && sqr2.innerHTML == sqr8.innerHTML)
		selectWinner(sqr2,sqr5,sqr8);

	// Square boxes: 3 6 9
	if (sqr3.innerHTML != "" && sqr3.innerHTML == sqr6.innerHTML && sqr3.innerHTML == sqr9.innerHTML)
		selectWinner(sqr3,sqr6,sqr9);

	// Square boxes: 1 5 9
	if (sqr1.innerHTML != "" && sqr1.innerHTML == sqr5.innerHTML && sqr1.innerHTML == sqr9.innerHTML)
		selectWinner(sqr1,sqr5,sqr9);

	// Square boxes: 3 5 7
	if (sqr3.innerHTML != "" && sqr3.innerHTML == sqr5.innerHTML && sqr3.innerHTML == sqr7.innerHTML)
		selectWinner(sqr3,sqr5,sqr7);
	}
		
for(var i=0; i<sqrs.length; i++) {									// Loops through the square boxes in the tic-tac-toe board. 
	sqrs[i].onclick = function() {									// If one of the square boxes is clicked on, then run the function. 
		if(this.innerHTML != "X" && this.innerHTML != "O"){			// If the box does not contain X or O...
			if (document.getElementById('diceNumber').innerHTML%2 == 1 || frstPlayer=="x" ){//...and if the number in the box is odd, or the small x-button is pressed...
				if(x_or_o%2 == 0 ) { 								//...and if X starts when drawing number is even (=x_or_o, to keep track of alternation)...													
					this.innerHTML ="X"; 							//...Then display an 'X' in the box-element.
					turn.innerHTML = "O's Turn"; 					// The element over the score will display this.
					score.innerHTML= "X: " + score_x + " | O: " + score_o; // Display the score in the element over tic-tac-tie.
					getWinner();									// Checks if there is a winner.
					x_or_o += 1;									// Increments the amount of draws played.
				}
				else {
					this.innerHTML="O";								// Else, display an 'O' in the box-element.
					turn.innerHTML = "X's Turn";					// The element over the score will display this.
					score.innerHTML= "X: " + score_x + " | O: " + score_o; // Display the score in the element over tic-tac-tie.
					getWinner();									// Checks if there is a winner.
					x_or_o +=1;										// Increment the amount of draws played.
				}
			}
			else {													// If the dice is even, or the small o-button is picked
				if(x_or_o%2 == 0 ){									// ...and if O starts when drawing number (=x_or_o) is even...
					this.innerHTML ="O";							//...Then display an 'O' in the box-element.
					turn.innerHTML = "X's Turn";					// The element over the score will display this.
					score.innerHTML= "X: " + score_x + " | O: " + score_o; // Display the score in the element over tic-tac-tie.
					getWinner();									// Checks if there is a winner.
					x_or_o += 1;									// Increment the amount of draws played.
				}
				else {												// If the drawing number is odd
					this.innerHTML="X";								// ...Then display an 'X' in the box-element.
					turn.innerHTML = "O's Turn";					// The element over the score will display this.
					score.innerHTML= "X: " + score_x + " | O: " + score_o; // Display the score in the element over tic-tac-tie.
					getWinner();									// Checks if there is a winner.
					x_or_o +=1;										// Increment the amount of draws played.
				}
			}
		}
	}
}

/*
	This function resets the tic-tac-toe board and the dice, and unchecks the small x/o-buttons.
	This is mainly for the Replay button on the bottom of the page, but is also used 
	when Roll dice-button and the small x/o-buttons are clicked on. 
*/ 	
function replay(){
	for (var i=0; i<sqrs.length; i++){								// For square box...
		sqrs[i].classList.remove("score");							// ... Remove the score-class from all of the elements.
		sqrs[i].innerHTML = "";										// Display nothing the square boxes (instead of X or O).
		turn.innerHTML="...then play";								// Display this above the scoring panel.
		document.getElementById('diceNumber').innerHTML="";			// Display nothing in the dice box.
		x_or_o=0;													// Reset the amount of draws to zero.
		frstPlayer=""												// Reset the first player-variable to no one.
		document.getElementById('x').style.borderStyle = 'none';	// Uncheck the small x-box.
		document.getElementById('o').style.borderStyle = 'none';	// Ucheck the o-box.
		score.innerHTML= "X: " + score_x + " | O: " + score_o; 		// Display the score in the element over tic-tac-tie.
	}
}

// ~~~~ POP-UP ~~~~ 

/*
	This is for the Pop-up button on the bottom right side of the page.
*/
document.getElementById('popup').onclick = function() {
	window.open("http://mfrankie.com/tic-tac-toe.html"); 			// Will open a new window with the game.
}
