const readlineSync = require('readline-sync');

const name = readlineSync.question('May I have your name? ');

readlineSync.question(`Hello ` + name + ` Welcome to Slab! where you will risk your life to conquer the dark side. Press enter and lets begin.`)

const enemies = [`Demon` , `Vampire` , `Vortigern`];
const treasure = [`Shield` , `Sword` , `Medkit` , `Water`];
var prize = [`eternal life`];
let userHealth = 50;
const options = [`Walk`, `Exit`, `Print`];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (6-5+4)+5);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemiesHealth = 30;
    const enemiesPower = Math.floor(Math.random() * (4-3+2) + 6);

    const index = readlineSync.keyInSelect(options, `What do you choose to do next?`);

    if(options[index] == `Exit`){
        return userHealth = 0;
    } else if (options[index] == `Print`){
        console.log(name + `: \n` + userHealth + `\nTreasure: ` + pickUp);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log(`Walking....`);
        } else if (key >= .3) {
            console.log(enemy + `has arrived!`);
            while(enemiesHealth > 0 && userHealth > 0) {
                const user = readlineSync.question(`What would you like to do? enter "r" to run or "a" to attack: `);

                switch (user){
                    case `r` :
                        const run = Math.random();
                        if(run < .5){
                            console.log(`Before you can run away ` + enemy + ` attacks you with: ` + enemiesPower);
                        }else {
                            console.log(`You ran away! `)
                            break
                        }
                        case `a` :
                        enemiesHealth -= attackPower;
                        console.log(`You attacked ` + enemy + `with ` + attackPower + `attack power` );

                        userHealth -= enemiesPower;
                        console.log(`Oh No enemy has just attacked you with: ` + enemiesPower + `attack power`);

                        if (enemiesHealth <= 0){
                            console.log(`You have just successfully slaughtered ` +enemy + `\n` + enemy + `left: ` + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickUp);
                            }
                            
                        } else if(userHealth <= 0){
                            console.log(enemy + `has just beheaded you and taken your life away. you have been defeated.`);
                        }
                         
                        
                }
            }
        }
    }
}
while(userHealth > 0){
    // // userRestore - function(){
    //     userActive = true
    //     userHealth = 50;
    // };
    // userRestore();
    game();
}