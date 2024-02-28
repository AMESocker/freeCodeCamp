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
    1: '<img src="1.jpg">',
    2: '<img src="2.jpg">',
    3: '<img src="3.jpg">',
    4: '<img src="4.jpg">',
    5: '<img src="5.jpg">',
    6: '<img src="6.jpg">',
  }

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice)
  }

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index]
  })
  //!--added--
  listOfAllBigDice.forEach((dice, index) => {
    dice.innerHTML = diceImages[diceValuesArr[index]]
  })
};

const updateStats = () => {
  currentRoundRollsText.textContent = rolls;
  currentRoundText.textContent = round;
}

const updateRadioOption = (optionNode, score) => {
  scoreInputs[optionNode].disabled = false;
  scoreInputs[optionNode].value = score;
  scoreSpans[optionNode].textContent = `, score = ${score}`
}

const getHighestDuplicates = (arr) => {
  const counts = {}

  for (const num of arr) {
    if (counts[num]) {
      counts[num]++
    } else {
      counts[num] = 1
    }
  }

  let highestCount = 0;

  for (const num of arr) {
    const count = counts[num]
    if (count >= 3 && count > highestCount) {
      highestCount = count
    }
    if(count >= 4 && count > highestCount){
      highestCount = count
    }
    if(count >= 5 && count > highestCount){
      highestCount = count
    }
  }

  const sumOfAllDice = diceValuesArr.reduce((a,b)=> a+b,0);
  
  if(highestCount >= 5){
    updateRadioOption(0, sumOfAllDice)
  }
  if(highestCount >= 4){
    updateRadioOption(1, sumOfAllDice)
  }
  if(highestCount >= 3){
    updateRadioOption(0, sumOfAllDice)
  }
  updateRadioOption(6,0)
};

const resetRadioOption = ()=>{
  scoreInputs.forEach((input)=>{
    input.disabled = true
    input.checked = false
  });
scoreSpans.forEach((span)=>{
  span.textContent = ''
})
};

rollDiceBtn.addEventListener('click', () => {
  if (rolls === 30) {
    alert('You have made three rolls this round. Please select a score.')
  } else {
    rolls++
    resetRadioOption()
    rollDice();
    updateStats();
    getHighestDuplicates(diceValuesArr)
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