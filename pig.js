$('.roll-btn').click(function() {
  $( ".toggle" ).effect( "shake" );
});

var dice0 = 0; 
var dice1 = 0;

document.querySelector(".roll-btn").addEventListener("click", function() {

	var dice0 = Math.floor(Math.random() * 6) + 1;
	var dice1 = Math.floor(Math.random() * 6) + 1; 
	
	document.querySelector('.dice0').src = 'img/dice-' + dice0 + '.png';  
	document.querySelector('.dice1').src = 'img/dice-' + dice1 + '.png'; 

	document.getElementById('player-0-current').textContent = dice0; 
});

document.getElementById('player-0-current').textContent = "0"; 
document.getElementById('player-1-current').textContent = "0"; 
document.getElementById('player-0-score').textContent = "0"; 
document.getElementById('player-1-score').textContent = "0"; 
