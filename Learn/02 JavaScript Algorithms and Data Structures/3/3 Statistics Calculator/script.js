//?As you expand your JavaScript skills, you'll want to get comfortable with array manipulation methods, such as map(), reduce(), and filter(). In this statistics calculator project, you'll gain experience with handling user input, DOM manipulation, and method chaining. You'll get practice by performing statistical calculations like mean, median, mode, variance, and standard deviation.
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;//?12

const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => { a - b })//?21
  const median = array.length % 2 === 0
    ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
    : sorted[Math.floor(array.length / 2)];//?22
  return median;//?23
}

const getMode = (array) => {
  
  const counts = {}
  array.forEach((el) => {
    counts[el]++
    console.log(counts)
  })

  // if (new Set(Object.values(counts)).size === 1) {
  //   return null
  // }//?28

  const highest = Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a])[0];
    // console.log(highest)
  const mode = Object.keys(counts)
    .filter((el) => counts[el] === counts[highest])
    // console.log(mode)
  return mode.join(', ')
}

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}//?35

const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el)=>{
    const difference = el - mean;
    const squared = difference**2;
    return acc+squared
  },0) / array.length;
  return variance
}

const getStandardDeviation = (array)=>{
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

const calculate = () => {
  const value = document.querySelector('#numbers').value
  const array = value.split(/,\s*/g); //?3
  const numbers = array
    .map((el) => Number(el)) //?4
    .filter((el) => !isNaN(el)); //?7
    console.log(numbers)
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector('#mean').textContent = mean;
  document.querySelector('#median').textContent = median;
  document.querySelector('#mode').textContent = mode;
  document.querySelector('#range').textContent = range;
  document.querySelector('#variance').textContent = variance;
  document.querySelector('#standardDeviation').textContent = standardDeviation;
};


//? As you expand your JavaScript skills, you'll want to get comfortable with array manipulation methods, such as map(), reduce(), and filter().

//?In this statistics calculator project, you'll gain experience with handling user input, DOM manipulation, and method chaining. You'll get practice by performing statistical calculations like mean, median, mode, variance, and standard deviation.

//?Statistics is a way of using math to make sense of data. It helps us understand patterns and trends in information, so we can make predictions and decisions based on that information.

//?In this challenge, you will build a statistics calculator that takes a set of numbers and returns the mean, median, mode, standard deviation, and variance.

//?3 The '.split()' method takes a string and splits it into an array of strings. You can pass it a string of characters or a RegEx to use as a separator. For example, 'string.split(",")' would split the string at each comma and return an array of strings.

//?4 The value of an input element is always a string, even if the input type is number. You need to convert this array of strings into an array of numbers. To do this, you can use the .map() method.

//?5 The '.map()' method takes a callback function as its first argument. This callback function takes a few arguments, but the first one is the current element being processed. Here is an example:
// array.map(el => {})
//?5 The callback function needs to return a value. In this case, you want to return the value of each element converted to a number. You can do this by using the 'Number()' constructor, passing the element as an argument.

//?7 Much like the .map() method, the .filter() method takes a callback function. The callback function takes the current element as its first argument.
//array.filter(el => {})
//?7 The callback function needs to return a Boolean value, which indicates whether the element should be included in the new array. In this case, you want to return true if the element is not NaN (not a number).

//?7 However, you cannot check for equality here, because NaN is not equal to itself. Instead, you can use the isNaN() method, which returns true if the argument is NaN.

//?8 Array methods can often be chained together to perform multiple operations at once. As an example:
//array.map().filter();

//?10 The mean is the average value of all numbers in a list. The first step in calculating the mean is to take the sum of all numbers in the list. Arrays have another method, called .reduce(), which is perfect for this situation. The .reduce() method takes an array and applies a callback function to condense the array into a single value.

//?11 Like the other methods, .reduce() takes a callback. This callback, however, takes at least two parameters. The first is the accumulator, and the second is the current element in the array. The return value for the callback becomes the value of the accumulator on the next iteration.
//array.reduce((acc, el) => {});

//?12 The .reduce() method takes a second argument that is used as the initial value of the accumulator. Without a second argument, the .reduce() method uses the first element of the array as the accumulator, which can lead to unexpected results.
//?12 To be safe, it's best to set an initial value. Here is an example of setting the initial value to an empty string:
// array.reduce((acc, el) => acc + el.toLowerCase(), "");
/* 15 getMean function
{
  const sum = array.reduce((acc, el) =>  acc + el,0 );
  const mean = sum/array.length;
  return mean;
}*/
//?21 By default, the .sort() method converts the elements of an array into strings, then sorts them alphabetically. This works well for strings, but not so well for numbers. For example, 10 comes before 2 when sorted as strings, but 2 comes before 10 when sorted as numbers.

//?21 To fix this, you can pass in a callback function to the .sort() method. This function takes two arguments, which represent the two elements being compared. The function should return a value less than 0 if the first element should come before the second element, a value greater than 0 if the first element should come after the second element, and 0 if the two elements should remain in their current positions.

//?22The next step is to find the number in the middle of the list. If the list has an odd number of numbers, the middle number is the median. If the list has an even number of numbers, the median is the average of the two middle numbers.

//?22 You can check if a number is even or odd with the modulus operator, which is represented by the % symbol. This operator returns the remainder of the division of two numbers. If the remainder is 0, the number is even. If the remainder is 1, the number is odd:

//?23Like the getMean function, you could condense this code into one line and reduce the number of variables you instantiate. However, it is important to remember that shorter code is not always better code. In this case, reducing the lines of code would make the code harder to read and understand, impacting future maintainability.

//?25 Your next calculation is the mode, which is the number that appears most often in the list.

//?28 There are a few edge cases to account for when calculating the mode of a dataset. First, if every value appears the same number of times, there is no mode.

//?28 To calculate this, you will use a Set. A Set is a data structure that only allows unique values. If you pass an array into the Set constructor, it will remove any duplicate values.

//?35 Your next calculation is the range, which is the difference between the largest and smallest numbers in the list.

//?35 You previously learned about the global Math object. Math has a .min() method to get the smallest number from a series of numbers, and the .max() method to get the largest number. Here's an example that gets the smallest number from an array:
// const numbersArr = [2, 3, 1];
// console.log(Math.min(...numbersArr));
// Expected output: 1
//? The variance of a series represents how much the data deviates from the mean, and can be used to determine how spread out the data are. The variance is calculated in a few steps.