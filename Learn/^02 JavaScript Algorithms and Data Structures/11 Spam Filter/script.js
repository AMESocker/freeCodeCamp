const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

const helpRegex = /please help|assist me/i;
const dollarRegex = /dollars/i;

const denyList = [helpRegex, dollarRegex]

const isSpam = (msg) => denyList.some((regex) => regex.test(msg)); //?9,12

checkMessageButton.addEventListener('click', () => {
  if (messageInput.value === '') {
    alert('Please enter a message.');
    return
  }
  result.textContent = isSpam(messageInput.value)
    ? 'Oh no! This looks like a spam message.'
    : 'This message does not seem to contain any spam.';
  messageInput.value = '';
});



//?9  const isSpam = (msg) => msg.match(helpRegex)
//?12 const isSpam = (msg) => helpRegex.test(msg)