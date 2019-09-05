const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const  modal = document.querySelector(".model");
const ps = document.getElementById("playerScore");
const cs = document.getElementById("computerScore");
const draw = document.getElementById("draw");

const scoreboard = {
    player : 0,
    computer : 0,
    draw : 0
}


function play(e){
    restart.style.display = "inline";
    const playerChoice = e.target.id;
    const computerChoice = getConputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);

    console.log(playerChoice, computerChoice, winner);

}


function getConputerChoice(){
    const rand = Math.random();
    if(rand< 0.34){
        return "rock";
    }else if(rand <= 0.67){
        return "paper";
    }else{
        return "scissors";
    }
}

function getWinner(p, c){
    if(p == c){
        return "draw";
    }else if(p === "rock"){
        if(c === "paper"){
            return "computer";
        }else{
            return "player";
        }
    }else if(p === "paper"){
        if(c === "scissors"){
            return "computer"
        }else{
            return "player"
        }
    }else if(p === "scissors"){
        if(c === "rock"){
            return "computer"
        }else{
            return "player"
        }
    }
}

function showWinner(winner, computerChoice){
    if(winner === "player"){
        scoreboard.player++;
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>  
        `;
    }else if(winner === "computer"){
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>  
        `;
    }else{
        scoreboard.draw++;
        result.innerHTML = `
        <h1>It's a Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>  
        `;
    }

    ps.textContent = scoreboard.player;
    cs.textContent = scoreboard.computer;
    draw.textContent = scoreboard.draw;



    modal.style.display = "inline";

}


restart.addEventListener("click", function(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    scoreboard.draw = 0;
    ps.textContent = "0";
    cs.textContent = "0";
    draw.textContent = "0";
    restart.style.display = "none";
})

function clearmodel(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

for(var i=0; i<choices.length; i++){
    choices[i].addEventListener("click", play)
};
window.addEventListener("click", clearmodel);
