const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i; //?15,16,18
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:\s|$)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:\s|$)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex,dearRegex];

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

//?15 A character class is defined by square brackets, and matches any character within the brackets. For example, [aeiou] matches any character in the list aeiou. You can also define a range of characters to match using a hyphen. For example, [a-z] matches any character from a to z.

//?16 The dollar value may be more than one digit. To match this, the '+' quantifier can be used - this matches one or more consecutive occurrence. For example, the regular expression '/a+/' matches one or more consecutive 'a' characters.

//?18 A capture group is a way to define a part of the expression that should be captured and saved for later reference. You can define a capture group by wrapping a part of your expression in parentheses. For example, '/h(i|ey) camper/' would match either 'hi camper' or 'hey camper', and would capture 'i' or 'ey' in a group.