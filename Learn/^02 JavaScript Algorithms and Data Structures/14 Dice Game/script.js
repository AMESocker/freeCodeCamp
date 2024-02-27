const listOfAllDice = document.querySelectorAll('.die');
const listOfAllBigDice = document.querySelectorAll('.die-big');
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');
const currentRoundText = document.getElementById('current-round');
const currentRoundRollsText = document.getElementById('current-round-rolls');
const totalScoreText = document.getElementById('total-score');
const scoreHistory = document.getElementById('score-history');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const keepScoreBtn = document.getElementById('keep-score-btn');
const rulesContainer = document.querySelector('.rules-container');
const rulesBtn = document.getElementById('rules-btn');

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let totalScore = 0;
let round = 1;
let rolls = 0;

const rollDice = () => {
  diceValuesArr = [];
  //!--added--
  diceImages = {
    1:'<img src="1.jpg">',
    2:'<img src="2.jpg">',
    3:'<img src="3.jpg">',
    4:'<img src="4.jpg">',
    5:'<img src="5.jpg">',
    6:'<img src="6.jpg">',
  }

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice)
  }

  listOfAllDice.forEach((dice,index)=>{
    dice.textContent= diceValuesArr[index]
  })
  listOfAllBigDice.forEach((dice,index)=>{
    dice.innerHTML = diceImages[diceValuesArr[index]]
  })
};

const updateStats = () => {
  currentRoundRollsText.textContent = rolls;
  currentRoundText.textContent = round;
}

rollDiceBtn.addEventListener('click',()=>{
  if(rolls === 3){
    alert('You have made three rolls this round. Please select a score.')
  }else{
    rolls++
    rollDice()
  }
})

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    rulesBtn.textContent = "Hide Rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show Rules";
    rulesContainer.style.display = "none";
  }
});