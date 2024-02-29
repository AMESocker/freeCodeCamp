const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const checkWord = textInput.value;
  if (checkWord === "") {
    alert('Please input a value')
  } else {
    palCheck(checkWord)
  }
});

const cleanString = (input) =>{
  const lowercase = input.toLowerCase()
  console.log(lowercase)

  const cleanInput = lowercase.replaceAll(/_|\W/g,'')
  console.log(cleanInput)
  palCheck(cleanInput)
}

const palCheck = (cleanInput) => {




  const inputArray = cleanInput.split('')
  console.log(inputArray)

  const half = Math.floor((inputArray.length)/2)
  console.log(half)

  const firstHalf = cleanInput.slice(0,half)
  console.log(firstHalf)

  const secondHalf = cleanInput.slice(half+1,inputArray.length)
  console.log(secondHalf)

  if(firstHalf==secondHalf){
    result.innerText = `${cleanInput} is a palindrome`
    console.log('True: ',cleanInput)
  }else{
    console.log('False: ',cleanInput)
  }
}

// palCheck('A')
// palCheck('eye')
// palCheck('nope')

//^----Tests----
const tests = [
  // 'A',
  // 'eye',
  // '_eye',
  'race car',
  // 'A man, a plan, a canal. Panama',
  // 'never odd or even',
  //  'My age is 0, 0 si ega ym.',
  //  '0_0 (: /-\ :) 0-0]'
  ]
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
for(let i = 0;i<tests.length;i++){
  cleanString(tests[i])
}