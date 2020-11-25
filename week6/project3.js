var readlineSync = require('readline-sync');

var playerName = readlineSync.question('May I have your name? ');

const welcomeMessage = `welcome ${playerName}, enjoy your time playing this fun escape room game! `;
console.log(welcomeMessage);

let playerLife = true;
let hasFoundKey = false;

while(playerLife == true){
    menuID = readlineSync.keyIn(' Press 1 to Put hand in hole /n Press 2 to Find the key /n Press 3 to Open the door: ', {limit: '$<1-3>'});
    if(menuID == 1){
        console.log(`Oh no! ${playerName}, that was the worst possible option. You are Dead and the game is over!`)
    }
    else if (menuID == 2 && hasFoundKey == false){
        // Player has never found the key
        console.log(`${playerName}, good job on successfully finding the key!`);
        hasFoundKey = true;
    }
    else if (menuID == 2 && hasFoundKey == true){
        // The player has already found the key
        console.log(`${playerName}, You have already found the key!`);
    }
    else if (menuID == 3 && hasFoundKey == false){
        // player has not found the key yet
        console.log(`${playerName}, you have not found the key!`);
    }
    else if (menuID == 3 && hasFoundKey == true){
        // Player has found the key
        console.log(`${playerName}, you have successfully found the key and have escaped from the room. Congratulations, you WIN!`);
        playerLife = false;
    }

}