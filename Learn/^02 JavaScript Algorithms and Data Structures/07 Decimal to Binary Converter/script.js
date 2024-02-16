const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
//? Recursion is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve. In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.
const decimalToBinary = (input) => {
  let binary = '';

  while (input > 0) {
    input = Math.floor(input/2);
  }

  result.innerText = binary;
};

const checkUserInput = () => {  
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert('Please provide a decimal number');
    numberInput.value = '';
    return
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = '';
};

convertBtn.addEventListener('click',checkUserInput);

numberInput.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    checkUserInput()
  }
});

/*
!const decimalToBinary = (input) => {
  ^const inputs = [];
  ^const quotients = [];
  ^const remainders = [];
  ? Binary numbers are a base-2 number system. Unlike the base-10 or decimal number system we use every day that uses 10 digits ('0-9') to form numbers, the binary number system only has two digits, '0' and '1'. In computer science, these binary digits are called bits, and are the smallest unit of data computers can process. For computers, 0 represents 'false' or "off", and 1 represents 'true' or "on". Bits are often grouped into an octet, which is an 8-bit set known as a byte. A byte can represent any number between 0 and 255. Here are the placement values for each bit in a byte: 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 Because bits are often grouped into bytes, it's common to see binary numbers represented in groups of eight, sometimes with leading zeros. For example, the number 52 can be represented as 110100, or 00110100 with leading zeros. 
  ^if(input===0){
  ^  result.innerText = '0';
  ^  return
  ^}
  ^while(input>0){
  ^  const quotient = Math.floor(input/2);
  ^  const remainder = input % 2;
    
  ^  inputs.push(input);
  ^  quotients.push(quotient)
  ^  remainders.push(remainder)
  ^  input = quotient;
  ^}
  ? The tricky part about 'while' loops is that, if you're not careful, they can run forever. This is called an infinite loop, and can cause your browser to crash.To avoid infinite loops, you need to make sure that the condition for the 'while' loop eventually becomes false. const quotient = 5 / 2; // 2.5 In the example above, 5 is the dividend, or the number to be divided, and 2 is the divisor, or the number to divide by. The result, 2.5, is called the quotient.
  ^console.log('Inputs: ',inputs)
  ^console.log('Quotients: ',quotients)
  ^console.log('Remainders: ',remainders)

  ^result.innerText = remainders.reverse().join('')
^};
*/