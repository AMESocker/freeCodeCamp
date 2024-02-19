const calculate = () => {
  const value = document.querySelector('#numbers').value
  const array = value.split(/,\s*/g)//?3
  //?4
};

//? As you expand your JavaScript skills, you'll want to get comfortable with array manipulation methods, such as map(), reduce(), and filter().

//?In this statistics calculator project, you'll gain experience with handling user input, DOM manipulation, and method chaining. You'll get practice by performing statistical calculations like mean, median, mode, variance, and standard deviation. 

//?Statistics is a way of using math to make sense of data. It helps us understand patterns and trends in information, so we can make predictions and decisions based on that information. 

//?In this challenge, you will build a statistics calculator that takes a set of numbers and returns the mean, median, mode, standard deviation, and variance.

//?3 The '.split()' method takes a string and splits it into an array of strings. You can pass it a string of characters or a RegEx to use as a separator. For example, 'string.split(",")' would split the string at each comma and return an array of strings.

//?4 The value of an input element is always a string, even if the input type is number. You need to convert this array of strings into an array of numbers. To do this, you can use the .map() method.