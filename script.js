function ComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        return 'paper'
    } else if (x == 2) {
        return 'rock'
    } else if (x == 3) {
        return 'scissor'
    }
}

const outcome = document.querySelector('.result');

let per=0;
let c=0

function playRound(player,computer) {
    if (player.toLowerCase() == 'rock' && computer == 'paper') {
        console.log('computer wins');
        c++;
        outcome.textContent='computer wins' ;
    }else if (computer === 'rock' && player.toLowerCase() === 'paper') {
        console.log('player wins');
        per++;
        outcome.textContent='player wins';
    }else if (player.toLowerCase() == 'rock' && computer == 'scissor') {
        console.log('player wins');
        per++;
        outcome.textContent='player wins' ;
    }else if (computer == 'rock' && player.toLowerCase() == 'scissor') {
        console.log('computer wins');
        c++;
        outcome.textContent='computer wins';
    }else if (player.toLowerCase() == 'paper' && computer == 'scissor') {
        console.log('computer wins');
        c++;
        outcome.textContent='computer wins';
    }else if (computer == 'paper' && player.toLowerCase() == 'scissor') {
        console.log('player wins');
        per++;
        outcome.textContent='player wins';
    }else if (player.toLowerCase() === computer){
        console.log('tie');
        outcome.textContent='it\'s a tie';
    }else {outcome.textContent='Invalid input'}
    
    
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click', ()=> {
        choice = button.textContent;
        console.log(choice);
        p = ComputerChoice();
        playRound(choice,p);
        const cc = document.querySelector('.computer');
        cc.textContent = `computer: ${p}`;
        if (per == 5){
            alert('Player won the battle!');
            per = 0;
            c=0;
        } else if (c == 5) {
            alert('Computer won the battle!');
            per = 0;
            c=0;
        }
        const play = document.querySelector('#player');
        play.textContent =`player: ${per}`;

        const compsc = document.querySelector('#computer');
        compsc.textContent =`computer: ${c}`;
    });

})