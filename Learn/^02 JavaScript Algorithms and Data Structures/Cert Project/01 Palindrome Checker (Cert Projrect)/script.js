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

const palCheck = (input) => {
  const lowercase = input.toLowerCase()
  console.log(lowercase)
  result.innerText = `${input} is a palindrome`
}