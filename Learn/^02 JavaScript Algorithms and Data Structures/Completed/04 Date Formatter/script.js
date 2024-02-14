const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');
//? There are many built-in "constructors" that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the 'new' operator.
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;
//? The 'change' event is used to detect when the value of an HTML element has changed.
dateOptionsSelectElement.addEventListener('change', () => { });

switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
    break;
  case "mm-dd-yyyy-h-mm":
    currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes` 
    break; 
  default:
    currentDateParagraph.textContent = formattedDate;
}
//? A 'switch' statement is used to compare an expression against multiple possible values and execute different code blocks based on the match. It's commonly used for branching logic. If your 'switch' statement is going to have multiple cases, it is best practice to include a 'break' statement.The 'break' statement will tell the JavaScript interpreter to stop executing statements. Without adding a 'break' statement at the end of each 'case' block, the program will execute the code for all matching 'cases'. The 'default' case is executed when none of the previous case conditions match the value being evaluated. It serves as a catch-all for any other possible cases.