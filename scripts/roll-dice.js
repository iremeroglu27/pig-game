/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


const score0El = document.querySelector('#score-0');
const score1El = document.querySelector('#score-1');
const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');


diceEl.classList.add('hidden'); 
 
reset();  

btnRoll.addEventListener("click", function() {

    const dice = Math.trunc(Math.random() * 6) + 1;  

    diceEl.classList.remove('hidden'); 
    diceEl.src = `dice-${dice}.png`;


    if(dice != 1) { 

        currentScore += dice;
        if (player1Act == 1) {
            current0El.textContent = currentScore;
        }
        else if (player2Act == 1) {
            current1El.textContent = currentScore;
        }
        
    } else { 

        currentScore = 0;
        if(player1Act == 1) {
            current0El.textContent = currentScore;
            player2Act =1;
            player1Act =0;
        }
        else if (player2Act == 1) {
            current1El.textContent = currentScore;
            player2Act = 0;
            player1Act = 1; 
        }     
    }
});


btnHold.addEventListener("click", function() {

        if(player1Act == 1) {

            let total = Number(score0El.textContent) + Number(current0El.textContent);
            
            score0El.textContent = total.toString();
            
            current0El.textContent = 0;

            currentScore = 0;

            player2Act = 1;  
            player1Act = 0;

            if(score0El.textContent>=100) {
                alert("player 1 wins");
                reset();
            }       
        } 
        else if(player2Act == 1) {

            let total = Number(score1El.textContent) + Number(current1El.textContent);
            
            score1El.textContent = total.toString();

            current1El.textContent = 0;

            currentScore = 0;

            player2Act = 0;  
            player1Act = 1; 

            if(score1El.textContent>=100) {
                alert("player 2 wins");
                reset();    
            }
        }  
});

btnNew.addEventListener("click", reset);


function reset() {
    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;

    currentScore = 0;

    player1Act = 1;
    player2Act = 0;
}







