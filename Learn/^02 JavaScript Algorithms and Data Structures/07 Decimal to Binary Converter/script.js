const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
//? Recursion is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve. In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.
const checkUserInput = () => {
  console.log(numberInput.value)
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {

  }
};

convertBtn.addEventListener('click',checkUserInput);

numberInput.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    checkUserInput()
  }
});