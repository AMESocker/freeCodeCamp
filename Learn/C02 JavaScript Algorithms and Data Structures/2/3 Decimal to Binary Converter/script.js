//?Recursion is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve. In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');
const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
    msg:'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg:'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg:'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 5000,
    removeElDelay:10000
  }

]
//?A recursive function is a function that calls itself over and over. But you have to be careful because you can easily create an infinite loop. That's where the base case comes in. The base case is when the function stops calling itself, and it is a good idea to write it first. When writing the recursive case, you need to remember two things: 1. What is the base case? 2. What is the least amount of work you need to do to get closer to the base case?
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input)
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2)
  }
};
const showAnimation = () => {
  result.innerText = 'Call Stack Animation';

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
      <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
      decimalToBinary(${obj.inputVal})
      </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg
    }, obj.showMsgDelay)

    setTimeout(()=>{
      document.getElementById(obj.inputVal).remove()
    },obj.removeElDelay)
  });
  setTimeout(()=>{
    result.textContent = decimalToBinary(5)
  },20000)
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value)
  if (!numberInput.value || isNaN(inputInt)) {
    alert('Please provide a decimal number');
    numberInput.value = '';
    return
  }

  if (inputInt === 5) {
    showAnimation()
    return
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = '';
};

convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
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
!const decimalToBinary = (input) => {
  ? Awesome. This is a more efficient way to convert decimal numbers into binary. After learning a bit about the call stack and recursion, the 'decimalToBinary' function will be refactored to use recursion instead of a 'while' loop.
  ^let binary = '';

  ^if(input===0){
  ^  binary = '0'
  ^}

  ^while (input > 0) {
  ^  binary = (input % 2) + binary;
  ^  input = Math.floor(input/2);
  ^}

 ^ result.innerText = binary;
^};
*/
//? In computer science, a stack is a data structure where items are stored in a LIFO (last-in-first-out) manner. If you imagine a stack of books, the last book you add to the stack is the first book you can take off the stack. Or an array where you can only .push() and .pop() elements.The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top or of the stack, and when it returns, it is removed from the top / end of the stack. You'll see this in action by creating mock call stack.

//? Recursion is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve. In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.
/*
const countDownAndUp = (number) => {
  console.log(number);

  if (number === 0) {
    console.log('Reached base case')
    return;
  } else {
    countDownAndUp(number - 1);
    console.log(number)
  }
};

countDownAndUp(3);
*/