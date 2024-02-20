const isEven = (num) => num % 2 === 0
const sum = (nums) => nums.reduce((acc, el) => acc + el, 0);
const average = (nums)=>sum(nums)/nums.length;
const median = (nums)=>{
  const sorted = nums.slice().sort((a, b) => a - b);//?23
  const length = sorted.length;
  const middle = length/2-1
}

const range = (start, end) => Array(end-start+1).fill(start).map((element,index)=>element+index)
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code)=>String.fromCharCode(code));

window.onload = () => {
  const container = document.getElementById('container');
  const createLabel = (name) => {
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = name;
    container.appendChild(label)
  }
  const letters = charRange('A','J');
  letters.forEach(createLabel);
  range(1,99).forEach((number)=>{
    createLabel(number)
    letters.forEach((letter)=>{
      const input = document.createElement('input');
      input.type = 'text';
      input.id = letter + number;
      input.ariaLabel = letter + number;
      container.appendChild(input);
    })
  })
}

//^ Functional Programming is a popular approach to software development. In Functional Programming, developers organize code into smaller functions, then combine those functions to build complex programs.

//^In this spreadsheet application project, you'll learn about parsing and evaluating mathematical expressions, implementing spreadsheet functions, handling cell references, and creating interactive web interfaces. You'll learn how to dynamically update the page based on user input.

//^This project will cover concepts like the map() method, find() method, parseInt(), the includes() method.

//?1 Your project starts with a basic HTML container and some corresponding CSS. Your first task will be to programmatically generate the cells for your spreadsheet.

//?1 The global window object represents the browser window (or tab). It has an onload property which allows you to define behavior when the window has loaded the entire page, including stylesheets and scripts.

//?2 Functions are ideal for reusable logic. When a function itself needs to reuse logic, you can declare a nested function to handle that logic. Here is an example of a nested function:
/*
const outer = () => {
  const inner = () => {
  };
};
*/
//?23 In the function, declare a 'sorted' variable and assign it the value of sorting a copy of the 'nums' array.You should use the 'slice()' method for creating a shallow copy of the array.
//
//!
//?
//*
//^
//&
//~