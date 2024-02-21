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
  const half = lowercase.length/2
  const inHalf = lowercase.split(lowercase[half])
  console.log(lowercase)
  result.innerText = `${input} is a palindrome`
}