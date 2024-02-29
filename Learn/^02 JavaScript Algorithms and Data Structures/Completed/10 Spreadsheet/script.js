//?Functional Programming is a popular approach to software development. In Functional Programming, developers organize code into smaller functions, then combine those functions to build complex programs. In this spreadsheet application project, you'll learn about parsing and evaluating mathematical expressions, implementing spreadsheet functions, handling cell references, and creating interactive web interfaces. You'll learn how to dynamically update the page based on user input. This project will cover concepts like the map() method, find() method, parseInt(), the includes() method.
const infixToFunction = {
  "+": (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
}

const infixEval = (str,regex)=>str.replace(regex,(_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));

const highPrecedence = (str) => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  const str2 = infixEval(str, regex);
  return str2 === str ? str :  highPrecedence(str2);
}

const isEven = (num) => num % 2 === 0
const sum = (nums) => nums.reduce((acc, el) => acc + el, 0);
const average = (nums)=>sum(nums)/nums.length;
const median = (nums)=>{
  const sorted = nums.slice().sort((a, b) => a - b);//?23
  const length = sorted.length;
  const middle = length/2-1
  return isEven(length)
  ? average([sorted[middle],sorted[middle+1]])
  : sorted[Math.ceil(middle)] ;
}


const spreadsheetFunctions = {
  sum,
  average,
  median,
  even: nums => nums.filter(isEven),

  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num => num + 1),
  someeven: nums => nums.some(isEven),
  everyeven: nums => nums.every(isEven),
  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num => num + 1),
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  range: nums => range(...nums),
  nodupes: nums => [...new Set(nums).values()]
}//?98, 99 

const applyFunction = (str)=>{
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2 = infixEval(noHigh,infix);
  const functionCall = /([a-z]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = (args) => args.split(',').map(parseFloat);
  const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(functionCall,(match, fn, args)=>spreadsheetFunctions.hasOwnProperty(fn.toLowerCase())?apply(fn, args) : match);
}

const range = (start, end) => Array(end-start+1).fill(start).map((element,index)=>element+index)
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code)=>String.fromCharCode(code));

const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/ig;//?36,37
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => character => idToText(character + num);
  const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num))
  const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
  const cellRegex = /[A-J][1-9][0-9]?/ig;
  const cellExpanded = rangeExpanded.replace(cellRegex, (match) => idToText(match.toUpperCase()));
  const functionExpanded = applyFunction(cellExpanded)
  return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded,cells)
} //?45,51,59,60

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
      input.onchange = update
      container.appendChild(input);
    })
  })
}

const update = (event)=>{
  const element = event.target;
  const value = element.value.replace(/\s/g,'');
  if (!value.includes(element.id) && value.startsWith('=')) {
    element.value = evalFormula(value.slice(1), Array.from(document.getElementById("container").children));
  }
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

//?26 Object properties consist of key/value pairs. You can use shorthand property names when declaring an object literal. When using the shorthand property name syntax, the name of the variable becomes the property key and its value the property value.

//?26 The following example declares a user object with the properties userId, firstName, and loggedIn.
/*
const userId = 1;
const firstName = "John";
const loggedIn = true;

const user = {
  userId,
  firstName,
  loggedIn,
};

console.log(user); // { userId: 1, firstName: 'John', loggedIn: true }
*/
//?36 You need to be able to match cell ranges in a formula. Cell ranges can look like A1:B12 or A3:A25. You can use a regular expression to match these patterns.Start by declaring a rangeRegex variable and assign it a regular expression that matches A through J (the range of columns in your spreadsheet). Use a capture group with a character class to achieve this.

//?37 After matching a cell letter successfully, your rangeRegex needs to match the cell number. Cell numbers in your sheet range from 1 to 99. Add a capture group after your letter capture group. Your new capture group should match one or two digits – the first digit should be 1 through 9, and the second digit should be 0 through 9. The second digit should be optional.

//?45 The concept of returning a function within a function is called currying. This approach allows you to create a variable that holds a function to be called later, but with a reference to the parameters of the outer function call. For example:
/*
const innerOne = elemValue(1);
const final = innerOne("A");
*/
//?45 'innerOne' would be your inner function, with num set to 1, and 'final' would have the value of the cell with the id of A1. This is possible because functions have access to all variables declared at their creation. This is called closure.

//?51 You can pass a function reference as a callback parameter. A function reference is a function name without the parentheses. For example:
/*
const myFunc = (val) => `value: ${val}`;
const array = [1, 2, 3];
const newArray = array.map(myFunc);
*/
//?51 The .map() method here will call the myFunc function, passing the same arguments that a .map() callback takes. The first argument is the value of the array at the current iteration, so newArray would be [value: 1, value: 2, value: 3].

//?59 Your addCharacters(char1) is also returning a function, which returns another function. You need to make another function call to access that innermost function reference for the .map() callback. JavaScript allows you to immediately invoke returned functions:
//myFunc(1)("hi");

//?60 You'll notice that you are not using your match parameter. In JavaScript, it is common convention to prefix an unused parameter with an underscore _. You could also leave the parameter empty like so: (, char1) but it is often clearer to name the parameter for future readability.

//?98 Arrays have a .some() method. Like the .filter() method, .some() accepts a callback function which should take an element of the array as the argument. The .some() method will return true if the callback function returns true for at least one element in the array. Here is an example of a .some() method call to check if any element in the array is an uppercase letter.
//const arr = ["A", "b", "C"];
//arr.some(letter => letter === letter.toUpperCase());

//?99 Arrays have an .every() method. Like the .some() method, .every() accepts a callback function which should take an element of the array as the argument. The .every() method will return true if the callback function returns true for all elements in the array. Here is an example of a .every() method call to check if all elements in the array are uppercase letters.
// const arr = ["A", "b", "C"];
// arr.every(letter => letter === letter.toUpperCase());
//
//!
//?
//*
//^
//&
//~