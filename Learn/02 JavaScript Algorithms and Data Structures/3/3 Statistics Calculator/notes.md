# Intro
As you expand your JavaScript skills, you'll want to get comfortable with array manipulation methods, such as map(), reduce(), and filter(). 
In this statistics calculator project, you'll gain experience with handling user input, DOM manipulation, and method chaining. You'll get practice by performing statistical calculations like mean, median, mode, variance, and standard deviation.
Statistics is a way of using math to make sense of data. It helps us understand patterns and trends in information, so we can make predictions and decisions based on that information.
In this challenge, you will build a statistics calculator that takes a set of numbers and returns the mean, median, mode, standard deviation, and variance.
# 1 - 10
## 3 
The `.split()` method takes a string and splits it into an array of strings. You can pass it a string of characters or a RegEx to use as a separator. For example, `string.split(",")` would split the string at each comma and return an array of strings.
## 4 
The value of an input element is always a string, even if the input type is number. You need to convert this array of strings into an array of numbers. To do this, you can use the .map() method.
## 5
The `.map()` method takes a callback function as its first argument. This callback function takes a few arguments, but the first one is the current element being processed. Here is an example:
```js
array.map(el => {})
```
The callback function needs to return a value. In this case, you want to return the value of each element converted to a number. You can do this by using the `Number()` constructor, passing the element as an argument.
## 7 
Much like the .map() method, the .filter() method takes a callback function. The callback function takes the current element as its first argument.
//array.filter(el => {})
The callback function needs to return a Boolean value, which indicates whether the element should be included in the new array. In this case, you want to return true if the element is not NaN (not a number).

However, you cannot check for equality here, because NaN is not equal to itself. Instead, you can use the isNaN() method, which returns true if the argument is NaN.

//?8 Array methods can often be chained together to perform multiple operations at once. As an example:
//array.map().filter();

//?10 The mean is the average value of all numbers in a list. The first step in calculating the mean is to take the sum of all numbers in the list. Arrays have another method, called .reduce(), which is perfect for this situation. The .reduce() method takes an array and applies a callback function to condense the array into a single value.
# 11 - 20
## Step 11
Like the other methods, .reduce() takes a callback. This callback, however, takes at least two parameters. The first is the accumulator, and the second is the current element in the array. The return value for the callback becomes the value of the accumulator on the next iteration.
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
## Step 21
By default, the `.sort()` method converts the elements of an array into strings, then sorts them alphabetically. This works well for strings, but not so well for numbers. For example, `10` comes before `2` when sorted as strings, but `2` comes before `10` when sorted as numbers.

To fix this, you can pass in a callback function to the `.sort()` method. This function takes two arguments, which represent the two elements being compared. The function should return a value less than `0` if the first element should come before the second element, a value greater than `0` if the first element should come after the second element, and `0` if the two elements should remain in their current positions.

To sort your numbers from smallest to largest, pass a callback function that takes parameters `a` and `b`, and returns the result of subtracting `b` from `a`.
```js
array.sort((a, b) => a - b);
```
## Step 22
In the next few steps, you'll learn how to determine if an array's length is even or odd, as well as how to find the median. You will then be able to apply what you learned to the `getMedian` function.

To check if a number is even or odd, you can use the *modulus operator* `%`. The modulus operator returns the remainder of the division of two numbers.

Here is an example checking if an array length is even or odd:
```js
// check if array length is even
arr.length % 2 === 0;

// check if array length is odd
arr.length % 2 === 1;
```
If the remainder is `0`, the number is even. If the remainder is `1`, the number is odd.

Create a variable called `isEven`. Then use the modulus operator to check if the length of the `testArr2` array is even. Assign that expression to the `isEven` variable.

Below your `isEven` variable, log out the `isEven` variable to the console.

Open up the console to see the result.
```js
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
```
## Step 23
To get the median of an array with an odd number of elements, you will need to find and return the middle number.

Here is how to find the middle number of an array with an odd number of elements:
```js
arr[Math.floor(arr.length / 2)];
```
Here is a longer example finding the middle number of an array with 5 elements:
```js
const numbers = [1, 2, 3, 4, 5];
const middleNumber = numbers[Math.floor(numbers.length / 2)];
console.log(middleNumber); // 3
```
The reason why you use `Math.floor` is because the result of dividing an odd number by `2` will be a decimal. `Math.floor` will round down to the nearest whole number.

Declare an `oddListMedian` variable and assign it the result of finding the middle number of the `testArr1`. Then log the `oddListMedian` variable to the console.

Open up the console to see the result.
```js
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
```
## Step 24
To find the median of an even list of numbers, you need to find the two middle numbers and calculate the mean of those numbers.

Here is how to find the two middle numbers of an even list of items:
```js
// first middle number
arr[arr.length / 2];
// second middle number
arr[(arr.length / 2) - 1];
```
To find the median, you can use the `getMean` function which adds the middle numbers and divides the sum by `2`.
```js
const numbers = [1, 2, 3, 4];
const firstMiddleNumber = numbers[numbers.length / 2];
const secondMiddleNumber = numbers[(numbers.length / 2) - 1];
// result is 2.5
getMean([firstMiddleNumber, secondMiddleNumber]);
```
Create an `evenListMedian` variable and assign it the result of finding the median of the `testArr2`.

Then, log the `evenListMedian` variable to the console.
```js
const evenListMedian = getMean(testArr2);
console.log(evenListMedian);
```
## Step 25
Now that you have a better understanding of how to find the median for odd and even lists of numbers, you can remove all your test code from the previous steps.

## 26 
The next step is to find the number in the middle of the list. If the list has an odd number of numbers, the middle number is the median. If the list has an even number of numbers, the median is the average of the two middle numbers.

//?22 You can check if a number is even or odd with the modulus operator, which is represented by the % symbol. This operator returns the remainder of the division of two numbers. If the remainder is 0, the number is even. If the remainder is 1, the number is odd:

//?23Like the getMean function, you could condense this code into one line and reduce the number of variables you instantiate. However, it is important to remember that shorter code is not always better code. In this case, reducing the lines of code would make the code harder to read and understand, impacting future maintainability.

//?25 Your next calculation is the mode, which is the number that appears most often in the list.

//?28 There are a few edge cases to account for when calculating the mode of a dataset. First, if every value appears the same number of times, there is no mode.

//?28 To calculate this, you will use a Set. A Set is a data structure that only allows unique values. If you pass an array into the Set constructor, it will remove any duplicate values.
# 31 - 40
## Step 31
Inside the `calculate` function, you have already called the `getMean` and `getMedian` functions.

Below those function calls, add a `console.log(getMode(numbers))`.

To see the result, enter the numbers `4, 4, 2, 5` and click on the `"Calculate"` button. Open up the console to see the following array:
```js
[ 2, 4, 4, 5 ]
```
## Step 32
Inside your `getMode` function, on the empty line above your return call `forEach` on `array`. Your `.forEach()` method should have an empty callback function that takes an `el` parameter.

In the next few steps, you will use this loop to count the frequency of occurrences of each number in the array.
```js
array.forEach(el => {});
```
## Step 33
Inside the `array.forEach()` callback function, check if the current element is inside the `counts` object. If the element can be found, increment the value of `counts[el]` by `1`. Otherwise, assign the number `1` to `counts[el]`.

Change your return statement to return `counts` instead of array.

To test this, enter the numbers `4, 4, 2, 5` and click Calculate. You should see the following in the console:
```js
{ '2': 1, '4': 2, '5': 1 }
```
```js
function getMode(array) {
  const counts = {};
  array.forEach(el => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });
  return counts;
}
```
## Step 34
Now that you have a better understanding of how the `getMode` function works, you can remove the `console.log(getMode(numbers))` statement from the calculate function.
## Step 35
Returning the `counts` variable was only for testing purposes. Now that you are done testing, remove the `return counts` line from the `getMode` function.
## Step 43
Your next calculation is the *range*, which is the difference between the largest and smallest numbers in the list.

You previously learned about the global `Math` object. `Math` has a `.min()` method to get the smallest number from a series of numbers, and the `.max()` method to get the largest number. Here's an example that gets the smallest number from an array:
```js
const numbersArr = [2, 3, 1];

console.log(Math.min(...numbersArr));
// Expected output: 1
```
Declare a `getRange` function that takes the same `array` parameter you have been using. Using `Math.min()`, `Math.max()`, and the spread operator, return the difference between the largest and smallest numbers in the list.
```js
function getRange(array) {
  return Math.max(...array) - Math.min(...array);
}
```