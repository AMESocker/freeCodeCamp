const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');
//? In JavaScript, there are many built-in "constructors" that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the 'new' operator.
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;
//? In JavaScript, the 'change' event is used to detect when the value of an HTML element has changed.
