function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } 
    else if(argMoveId == 2) {
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  argComputerMove = 'kamień';
}
else if(randomNumber == 2){
  argComputerMove = 'papier';
}
else if(randomNumber == 3){
    argComputerMove = 'nożyce';
} 
*/
printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nożyce';
}
else{
    playerMove = 'Nieznany ruch';
}
*/

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);

    if(argComputerMove == 'kamień' &&  argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'papier' &&  argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'nożyce' &&  argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz');
    }
    else if(argComputerMove ==  argPlayerMove){
        printMessage('Remis');
    }
    else if(argPlayerMove == 'Nieznany ruch'){
        printMessage('Wybrałeś Nieznany ruch');
    }
    else{
        printMessage('Wygrał komputer');
    }
}

displayResult(computerMove, playerMove);
/*printMessage('Twój ruch to: ' + playerMove);

if(argComputerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}
else if(argComputerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}
else if(argComputerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz');
}
else if(argComputerMove == playerMove){
    printMessage('Remis');
}
else if(playerMove == 'Nieznany ruch'){
    printMessage('Wybrałeś Nieznany ruch');
}
else{
    printMessage('Wygrał komputer');
}
*/