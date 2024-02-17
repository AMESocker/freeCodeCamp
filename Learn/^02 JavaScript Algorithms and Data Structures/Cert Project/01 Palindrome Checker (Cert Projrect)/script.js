const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');
/*
const checkPalindrome = () => {
  const checkWord = textInput.value
  
  switch (checkWord) {
    case "":
      alert('Please input a value')
      
      break;
  
    default:
      break;
  }
  console.log(checkWord)
}
*/
checkButton.addEventListener('click', () => {
  const checkWord = textInput.value;
  if (checkWord === "") {
    alert('Please input a value')
  } else {
    palCheck(checkWord)
  }
});

const palCheck = (input) => {
  result.innerText = `${input} is a palindrome`
}