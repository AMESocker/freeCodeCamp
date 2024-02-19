const getMean = (array) => array.reduce((acc, el) => acc + el, 0)/ array.length;

const getMedian = (array) => {
  
}


const calculate = () => {console.log('calculate')
  const value = document.querySelector('#numbers').value
  const array = value.split(/,\s*/g); //?3
  const numbers = array
    .map((el) => Number(el)) //?4
    .filter((el) =>  !isNaN(el) ); //?7

  const mean = getMean(numbers)
  document.querySelector('#mean').textContent = mean
 
  console.log('value:',value)
  console.log('array:',array)
  console.log('number:',numbers)
  console.log('mean:',mean)
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
/* 15
?{ getMean function
?  const sum = array.reduce((acc, el) =>  acc + el,0 );//?12
?  const mean = sum/array.length;
?  return mean;
}*/