//? Sometimes when you're coding a web application, you'll need to be able to accept input from a user. In this calorie counter project, you'll learn how to validate user input, perform calculations based on that input, and dynamically update your interface to display the results. In this practice project, you'll learn basic regular expressions, template literals, the addEventListener() method, and more.
const calorieCounter = document.getElementById('calorie-counter');      //Step 14
const budgetNumberInput = document.getElementById('budget');            //Step 15
const entryDropdown = document.getElementById('entry-dropdown');        //Step 15
const addEntryButton = document.getElementById('add-entry');            //Step 16
const clearButton = document.getElementById('clear');                   //Step 16
const output = document.getElementById('output');                       //Step 16
let isError = false;                                                    //Step 17

function cleanInputString(str) {                                        //Step 18
        const regex = /[\+-\s]/g;                                       //Step 23,24,25,26,27
        return str.replace(regex, "");                                   //Step 28
};

function isInvalidInput(str) {                                          //Step 29
        const regex = /\d+e\d+/i;                                       //Step 30,31,32,33,34
        return str.match(regex);                                        //Step 35
};

function addEntry() {                                                   //Step 36
        //const targetId = "#" + entryDropdown.value;                   //Step 37
        const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);                                              //Step 38,39,40
        const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;                                                              //Step 41,42,51
        let HTMLString = `
        <label 
                for="${entryDropdown.value}-${entryNumber}-name">
                Entry ${entryNumber} Name
        </label>
        <input 
                type="text" 
                placeholder="Name" 
                id="${entryDropdown.value}-${entryNumber}-name">
        </input>
        <label 
                for="${entryDropdown.value}-${entryNumber}-calories">
                Entry ${entryNumber} Calories
        </label>
        <input 
                type="number" 
                min="0" 
                placeholder="Calories" 
                id="${entryDropdown.value}-${entryNumber}-calories">
        </input>`                                                        //Step 43,44,45,46,47,48
        targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);//Step 49,52,53
};

function calculateCalories(e) {                                          //Step 65
        preventDefault(e)                                               //Step 66
        isError = false
        const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');//Step 67
        const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');//Step 68
        const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');//Step 69
        const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
        const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

        const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);//Step 70
        const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);//Step 71
        const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);//Step 72
        const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
        const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
        const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);//Step 73

        if (isError) {//Step 74
                return;
        }

        const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories//Step 75
        const remainingCalories = budgetCalories - consumedCalories + exerciseCalories//Step 76
        const surplusOrDeficit = remainingCalories >= 0 ? 'Surplus' : 'Deficit'//Step 77
        output.innerHTML = `<span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
        <hr>
<p>${budgetCalories} Calories Budgeted</p>
<p>${consumedCalories} Calories Consumed</p>
<p>${exerciseCalories} Calories Burned</p>
`//Step 78,79,80,81,82,83,84
        output.classList.remove('hide')
}
function getCaloriesFromInputs(list) {                                   //Step 54
        let calories = 0;                                                //Step 55
        for (let i = 0; i < list.length; i++) {                          //Step 56
                const currVal = cleanInputString(list[i].value);         //Step 57,58
                let invalidInputMatch = isInvalidInput(currVal)           //Step 59
                if (invalidInputMatch) {                                   //Step 60
                        alert(`Invalid Input: ${invalidInputMatch[0]}`)  //Step 61
                        isError = true;                                  //Step 62
                        return null;
                }
                calories += Number(currVal);                             //Step 63
        }
        return calories;                                                 //Step 64
}
function clearForm(){
        const inputContainers = Array.from(document.querySelectorAll('.input-container'));
        for (let i=0; i<inputContainers.length;i++){
                inputContainers[i].innerHTML = ''
              }
  budgetNumberInput.value = ''
  output.innerText = ''
  output.classList.add('hide')

}
addEntryButton.addEventListener('click', addEntry);                      //Step 50
calorieCounter.addEventListener('submit',calculateCalories)
clearButton.addEventListener('click',clearForm)
// Start 01/04/24