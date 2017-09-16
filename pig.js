$('.roll-btn').click(function() {
  $( ".toggle" ).effect( "shake" );
});

var dice0, dice1, currentScore, score, activePlayer; 
init(); 



document.querySelector(".roll-btn").addEventListener("click", function() {

	var dice0 = Math.floor(Math.random() * 6) + 1;
	var dice1 = Math.floor(Math.random() * 6) + 1; 
	
	document.querySelector('.dice0').src = 'img/dice-' + dice0 + '.png';  
	document.querySelector('.dice1').src = 'img/dice-' + dice1 + '.png'; 

	if(dice0 !== 1 && dice1 !== 1) {
		if(dice0 === 6 && dice1 === 6) {
			currentScore = 0; 
			score[activePlayer] = 0; 
			document.getElementById('player-' + activePlayer + '-current').textContent = "0"; 
			document.getElementById('player-' + activePlayer + '-score').textContent = "0"
			nextPlayer(); 
		} else {
			currentScore += dice0 + dice1;
			document.getElementById('player-' + activePlayer + '-current').textContent = currentScore;
		}
	} else {
		currentScore = 0 
		document.getElementById('player-' + activePlayer + "-current").textContent = "0"; 
		nextPlayer(); 
	}
});


document.querySelector('.hold-btn').addEventListener("click", function() {
	score[activePlayer] += currentScore;  

	if(score[activePlayer] >= 20) {
		if(activePlayer == 1) {
			document.querySelector('.name-1').innerHTML = "Winner"; 
			document.querySelector('.name-0').innerHTML = "Loser"; 
			// init();
			alert('Player 2 Wins!!!') 
		} else {
			document.querySelector('.name-0').innerHTML = "Winner"; 
			document.querySelector('.name-1').innerHTML = "Loser"; 
			// init(); 
			alert('Player 1 Wins!!!')
		}
	}

	document.getElementById('player-' + activePlayer + '-score').textContent = score[activePlayer]; 
	currentScore = 0; 
	document.getElementById('player-' + activePlayer + '-current').textContent = "0";

	nextPlayer();

});

document.querySelector('.new-game-btn').addEventListener('click', init);

function nextPlayer() {
	if(activePlayer === 0) {
		activePlayer = 1; 
	} else {
		activePlayer = 0; 
	}
}

function init() {
	dice0 = 0; 
 	dice1 = 0;
 	currentScore = 0; 
 	score = [0,0]; 
 	activePlayer = 0; 
 	document.querySelector('.name-0').innerHTML = "Player 1"; 
 	document.querySelector('.name-1').innerHTML = "Player 2"; 
	document.getElementById('player-0-current').textContent = "0"; 
	document.getElementById('player-1-current').textContent = "0"; 
	document.getElementById('player-0-score').textContent = "0"; 
	document.getElementById('player-1-score').textContent = "0";  
}
