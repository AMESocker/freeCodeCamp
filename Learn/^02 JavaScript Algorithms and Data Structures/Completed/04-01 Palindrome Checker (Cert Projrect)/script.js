const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

let input = ''

checkButton.addEventListener('click', () => {
  const checkWord = textInput.value;
  input = textInput.value
  if (checkWord === "") {
    alert('Please input a value')
  } else {
    cleanString(checkWord)
  }
});

const cleanString = (input) =>{
  const lowercase = input.toLowerCase()
  const cleanInput = lowercase.replaceAll(/_|\W/g,'')
  palCheck(cleanInput)
}

const palCheck = (cleanInput) => {
  const inputArray = cleanInput.split('')
  const cleanReversed = inputArray.toReversed().join('')
  const checkSting = inputArray.join('')
  if(checkSting==cleanReversed){
    result.innerText = `${input} is a palindrome`
  }else{
    result.innerText = `${input} is not a palindrome` 
  }
}

//^----Tests----
const tests = [
  //^true
  // 'A',
  // 'eye',
  // '_eye',
  // 'race car',
  // 'A man, a plan, a canal. Panama',
  // 'never odd or even',
  //  'My age is 0, 0 si ega ym.',
  //  '0_0 (: /-\ :) 0-0]',
  //^false
  'not a palindrome',
  'nope',
  'almostomla',
  '1 eye for of 1 eye.',
  'five|\_/|four',
  ]
  for(let i = 0;i<tests.length;i++){
    cleanString(tests[i])
  }
/*
^true
A
eye
_eye
race car
A man, a plan, a canal. Panama
never odd or even
 My age is 0, 0 si ega ym.
 0_0 (: /-\ :) 0-0
^false
not a palindrome
nope
almostomla
1 eye for of 1 eye.
five|\_/|four
*/
