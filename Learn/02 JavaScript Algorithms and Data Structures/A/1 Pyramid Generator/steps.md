#  Step 1-10
## Step 1
JavaScript is the programming language that powers the web. Unlike the HTML and CSS you have learned previously, JavaScript is most commonly used to write logic instead of markup.

One of the most important concepts in programming is variables. A variable points to a specific memory address that stores a value. Variables are given a name which can be used throughout your code to access that value.

Declaring a variable means giving it a name. In JavaScript, this is often done with the `let` keyword. For example, here is how you would declare a `hello` variable:

```js
let hello;
```
Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.

Declare a `character` variable in your code.

Note: It is common practice to end statements in JavaScript with a semicolon. `;`
## Step 2
Your `character` variable currently does not have a value. You can assign a value using the assignment operator `=`. For example:
```js
let hello = "Hello";
```
Assigning a value to a variable at the moment of its declaration is known as initialization.

Initialize your `character` variable by assigning it the value `"Hello"` during its declaration.
## Step 3
JavaScript has seven primitive data types, with `String` being one of them. In JavaScript, a string represents a sequence of characters and can be enclosed in either single (`'`) or double (`"`) quotes.

Note that strings are *immutable*, which means once they are created, they cannot be changed.

Change your `"Hello"` string to use single quotes.
## Step 4
The console allows you to print and view JavaScript output. You can send information to the console using `console.log()`. For example, this code will print `"Naomi"` to the console:
```js
let developer = "Naomi";
console.log(developer);
```
The code above accesses the `developer` variable with its name in the `console.log()`. Note that the value between the parentheses is the value that will be printed.

Print the value of the `character` variable to the console. Then, click the "Console" button to view the JavaScript console.
## Step 5
When a variable is declared with the `let` keyword, you can reassign (or change the value of) that variable later on. In this example, the value of `programmer` is changed from `"Naomi"` to `"CamperChan"`.
```js
let programmer = "Naomi";
programmer = "CamperChan";
```
Note that when reassigning a variable that has already been declared, you do not use the `let` keyword.

After your `console.log`, assign the value `"World"` to your `character` variable.
## Step 6
Now log your `character` variable to the console again. You should see the string `"Hello"`, then the string `"World"`, in the console.
## Step 7
When variable names are more than one word, there are specific naming conventions for how you capitalize the words. In JavaScript, the convention to use is *camel case*.

Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased. Here are some examples of camel case:
```js
let variableOne;
let secondVariable;
let yetAnotherVariable;
let thisIsAnAbsurdlyLongName;
```
Use camel case to declare a new `secondCharacter` variable.
## Step 8
When you declare a variable without initializing it, it is considered *uninitialized*. Currently, your `secondCharacter` variable is uninitialized.

Add a `console.log()` to see what the value of your `secondCharacter` variable is.
## Step 9
The default value of an uninitialized variable is `undefined`. This is a special data type that represents a value that does not have a definition yet.

You can still assign a value to an uninitialized variable. Here is an example:
```js
let uninitialized;
uninitialized = "assigned";
```
Assign the string `"Test"` to your `secondCharacter` variable below your declaration. Open the console to see how your log has changed.
## Step 10
You can also assign the value of a variable to another variable. For example:
```js
let first = "One";
let second = "Two";
second = first;
```
The `second` variable would now have the value `"One"`.

To see this in action, change your `secondCharacter` assignment from `"Test"` to your `character` variable.

Then open the console to see what gets logged.
# Step 11 - 20
## Step 11
You are now ready to declare your next variable. Remove both `console.log` statements, and the `character` reassignment.

Also remove your `secondCharacter` variable, but leave the `character` initialization unchanged.
## Step 12
Use `let` to declare a `count` variable. Assign it the number `8`. When using a number value, you do not use quotes. For example:
```js
let money = 100;
```
## Step 13
With the `number` data type, you can perform mathematical operations, like addition. Try printing `count + 1` to the console.
## Step 14
You can also perform subtraction (`-`), multiplication (`*`), and division (`/`). Feel free to experiment with the operators and numbers in your `console.log`. When you are ready to move on, remove the `console.log`.
## Step 15
In programming, you will often need to work with lots of data. There are many data structures that can help you organize and manage your data. One of the most basic data structures is an array.

An array is a non-primitive data type that can hold a series of values. Non-primitive data types differ from primitive data types in that they can hold more complex data. Primitive data types like strings and numbers can only hold one value at a time.

Arrays are denoted using square brackets (`[]`). Here is an example of a variable with the value of an empty array:
```js
let array = [];
```
Declare a `rows` variable and assign it an empty array.
## Step 16
When an array holds values, or elements, those values are separated by commas. Here is an array that holds two strings:
```js
let array = ["first", "second"];
```
Change your `rows` declaration to be an array with the strings `"Naomi"`, `"Quincy"`, and `"CamperChan"`. The order of values in an array is important, so follow that order. Remember that strings are case-sensitive.
## Step 17
You can access the values inside an array using the *index* of the value. An index is a number representing the position of the value in the array, starting from `0` for the first value.

You can access the value using bracket notation, such as `array[0]`.

Use `console.log` and bracket notation to print the first value in your `rows` array.
## Step 18
Arrays are special in that they are considered *mutable*. This means you can change the value at an index directly.

For example, this code would assign the number `25` to the second element in the array:
```js
let array = [1, 2, 3];
array[1] = 25;
console.log(array); // prints [1, 25, 3]
```
Update the **third** element of your `rows` array to be the number `10`. Then print the `rows` array to your console.
## Step 19
Notice how the value inside your `rows` array has been changed directly? This is called *mutation*. As you learn more about arrays, you will learn when to mutate an array, and when you should not.

Before moving on, this is a great opportunity to learn a common array use. Currently, your code accesses the last element in the array with `rows[2]`. But you may not know how many elements are in an array when you want the last one.

You can make use of the `.length` property of an array - this returns the number of elements in the array. To get the last element of any array, you can use the following syntax:
```js
array[array.length - 1]
```
`array.length` returns the number of elements in the array. By subtracting `1`, you get the index of the last element in the array. You can apply this same concept to your `rows` array.

Update your `rows[2]` to dynamically access the last element in the rows array. Refer to the example above to help you.

You should not see anything change in your console.
## Step 20
For now, remove your first console log and your rows`[rows.length - 1]` assignment. Leave the second `rows` log statement for later.
# Step 21 - 30
## Step 21
A *method* in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the `.log()` method, which is part of the `console` object.

Arrays have their own methods, and the first you will explore is the `.push()` method. This allows you to "push" a value to the end of an array. Here is an example to add the number `12` to the end of an array:
```js
array.push(12);
```
Use `.push()` to add the string `"freeCodeCamp"` to the end of your `rows` array. Add this code before your `console.log` so you can see the change you made to your array.
## Step 22
Another method essential for this project is the `.pop()` method. It removes the last element from an array and *returns* that element.

When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

Create a new variable called `popped` and assign it the result of `rows.pop()`. Then, log `popped` to the console.
## Step 23
You should see the string `"freeCodeCamp"` logged to the console. This is because `.pop()` returns the value that was removed from the array - and you pushed `"freeCodeCamp"` to the end of the array earlier.

But what does `.push()` return? Assign your existing `rows.push()` to a new `pushed` variable, and log it.
## Step 24
Were you expecting to see `4` in the console? `.push()` returns the new length of the array, after adding the value you give it.

It is important to be aware of what values a method returns. Take some time to experiment with `.push()` and `.pop()`. When you are ready, remove all of your `.push()` and `.pop()` calls, and your `console.log` statements.
## Step 25
Change your `rows` declaration to be assigned an empty array again.

Also, change your `'Hello'` string to use double quotes again. Generally, it does not matter which of the two you prefer, but you will want to be consistent in that choice throughout your project.
## Step 26
Declaring a variable with the `let` keyword allows it to be reassigned. This means you could change `character` later to be a completely different value.

For this project, you will not want to change these variable values. So instead, you should use `const` to declare them. `const` variables are special.

First, a `const` variable cannot be reassigned like a `let` variable. This code would throw an error:
```js
const firstName = "Naomi";
firstName = "Jessica";
```
A `const` variable also cannot be uninitialized. This code would throw an error:
```js
const firstName;
```
Replace your `let` keywords with `const`.
## Step 27
You are now ready to start building your pyramid generator. Your `character` variable will serve as the building block for the pyramid.

`"Hello"` might not work very well for that. Change the value of character to be the hash character `"#"`.
## Step 28
To generate a pyramid, you will need to create multiple rows. When you have to perform a task repeatedly until a condition is met, you will use a *loop*. There are many ways to write a loop.

You are going to start with a basic `for` loop. `for` loops use the following syntax:
```js
for (iterator; condition; iteration) {
  logic;
}
```
In the upcoming steps, you'll explore each component of a loop in detail. For now, construct a `for` loop that includes the terms `"iterator"`, `"condition"`, and `"iteration"` for the three components. Keep the loop *body*, the section within the curly braces {}, empty.
## Step 29
Your loop now needs a proper iterator. The *iterator* is a variable you can declare specifically in your `for` loop to control how the loop iterates or goes through your logic.

It is a common convention to use `i` as your iterator variable in a loop. A `for` loop allows you to declare this in the parentheses `()`. For example, here is a `for` loop that declares an `index` variable and assigns it the value `100`.
```js
for (let index = 100; "second"; "third") {

}
```
Replace the string `"iterator"` with a let declaration for the variable `i`. Assign it the value `0` to start. This will give the `i` variable the value `0` the **first time** your loop runs.