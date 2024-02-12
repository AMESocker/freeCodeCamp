# Step 1
In this project you will learn basic string and array methods by building a music player app. You will be able to play, pause, skip, and shuffle songs.

The HTML and CSS of this project have been provided for you, so you can focus on the JavaScript.

Start by accessing the `#playlist-songs`, `#play`, and `#pause` elements with the `getElementById()` method. Assign them to variables `playlistSongs`, `playButton` and `pauseButton` respectively.

The spread operator (...) allows you to copy all elements from one array into another. It can also be used to concatenate multiple arrays into one.

If the function body consists of a single expression, you don't need the curly braces and the return keyword. This is called an implicit return:
Traditional function -        function add   (a, b)    {return a + b;}
Arrow function -  		 const add = (a, b) => {return a + b;};
Arrow function implicit return - const add = (a, b) =>         a + b;

The map() method is used to iterate through an array and return a new array. The map() method takes a function as an argument. This is called a callback function, which is a function that is passed to another function as an argument.
# Step 20 Optional chaining
Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined. For example:

const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};

// Accessing nested properties without optional chaining
const state = user.address.state; // CA

// Accessing a non-existent nested property with optional chaining
const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error