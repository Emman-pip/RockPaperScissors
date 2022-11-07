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


function wins(player,computer) {
    if (player.toLowerCase() == 'rock' && computer == 'paper') {
        console.log('computer wins');
        alert('computer wins') ;
    }else if (computer === 'rock' && player.toLowerCase() === 'paper') {
        console.log('player wins');
        alert('player wins');
    }else if (player.toLowerCase() == 'rock' && computer == 'scissor') {
        console.log('player wins');
        alert('player wins') ;
    }else if (computer == 'rock' && player.toLowerCase() == 'scissor') {
        console.log('computer wins');
        alert('computer wins');
    }else if (player.toLowerCase() == 'paper' && computer == 'scissor') {
        console.log('player wins');
        alert('player wins');
    }else if (computer == 'paper' && player.toLowerCase() == 'scissor') {
        console.log('computer wins');
        alert('computer wins');
    }else if (player.toLowerCase() === computer){
        console.log('tie');
        alert('it\'s a tie');
    }else {alert('Invalid input')}
    
    
}

let x=0;
let y =0;

for (let i = 0; i!=5;i++){
    let playerChoice = prompt('Rock, paper, or scissors?')
    lol = wins(playerChoice, ComputerChoice())
    if (lol == 'player wins'){
        x++;
        continue;
    }
    else if (lol =='computer wins'){
        y++;
        continue;
    }

}

if (x<y) {
    alert('you lost')
}
else {
    alert('you won')
}