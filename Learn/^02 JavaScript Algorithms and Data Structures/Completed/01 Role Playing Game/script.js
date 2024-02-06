let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
//----query Selectors----
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
//----game components----
const weapons = [
    { name: "stick", power: 5 },
    { name: "dagger", power: 30, },
    { name: "claw hammer", power: 50, },
    { name: "sword", power: 100, },
];
//Step 109
const monsters = [
    { name: "Slime", level: 2, health: 15 },
    { name: "Fanged Beast", level: 8, health: 60 },
    { name: "Dragon", level: 20, health: 300 }
];
//Step 114,133
const locations = [
    {
        "name": "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        "text": "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        "name": "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        "text": "You enter the store."
    },
    {
        "name": "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        "text": "You enter the cave. You see some monsters."
    },
    {
        "name": "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        "text": "You are fighting a monster."
    },
    //Step 134,176
    {
        "name": "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, easterEgg],
        "text": 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    //Step 138
    {
        "name": "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        "text": "You die. ☠️"
    },
    //
    {
        "name": "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        "text": "You defeat the dragon! YOU WIN THE GAME! 🎉"

    },
    //Step 161
    {
        "name": "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        "text": "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];

//----initialize buttons----
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
//Step 135
function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);
    console.log('goTown');
};

function goStore() {
    update(locations[1]);
    console.log('goStore');
};

function goCave() {
    update(locations[2]);
    console.log('goCave');
};



function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold
        healthText.innerText = health
    } else {
        text.innerText = "You do not have enough gold to buy health."
    }
    console.log('buyHealth');
};
//Steps 91,92,93,94,95,96,97,98,99,100
function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory + " ";
        } else {
            text.innerText = "You do not have enough gold to buy a weapon."
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    };
    console.log('buyWeapon');
}


//Steps 101,102,103,104,105,106,107,108
function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon;
        currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon!"
    };
    console.log("sellWeapon");
};
//Steps 111
function fightSlime() {
    fighting = 0;
    goFight();
    console.log('fightSlime');
};
//Steps 112
function fightBeast() {
    fighting = 1;
    goFight();
    console.log('fightBeast');
};

function fightDragon() {
    fighting = 2;
    goFight();
    console.log('fightDragon');
};

//Step 110,115,116,117,118
function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block"
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
    console.log('goFight');
};
//Step 113,119,120,121,122,123,124,125,126,139,140,143,149,154,155,156,157
function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()) {

        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += " You miss."
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        lose()
    } else if (monsterHealth <= 0) {
        fighting === 2 ? winGame() : defeatMonster();
    };
    if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeapon--;
    };
};
//Step 144,145,146,147,148
function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
};
//Step 152,153
function isMonsterHit() {
    return (Math.random() > .2) || health < 20;
};
//Step 128
function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name
};
//Step 129,130,131,132
function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
    console.log('defeatMonster');
};
//Step 127,136
function lose() {
    update(locations[5]);
    console.log('lose');
}
//Step 141
function winGame() {
    update(locations[6]);
    console.log('winGame');
};
//Step 137
function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
    console.log('restart');
};
//Step 158
function easterEgg() {
    update(locations[7])
};
//Step 160
function pickTwo() {
    pick(2)
};
function pickEight() {
    pick(8)
};
//Step 159,162,163,163,164,165,166,167,168,169,170,171,172,173,174,175
function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11))
    };
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i]+"\n";
    };
    console.log(numbers)
    if(numbers.indexOf(guess) !== -1) {
        text.innerText += "Right! You win 20 gold!";
        gold += 20;
        goldText.innerText = gold;
    }else{
        text.innerText += "Wrong! You lose 10 health!";
        health -= 10;
        healthText.innerText = health;
        if(health<=0){
            lose();
        }
    }
};