Idea-RPG with Munchkin Rules and characters
# Steps   1 -   3 12/23/23
# Steps   4 -   5 12/26/23
# Steps   5 -  49 12/27/23
# Steps  51 -  60 12/28/23
## Step 54Passed
Object properties are written as key: value pairs, where key is the name of the property (or the key), and value is the value that property holds. For example, here is an object with a key of name set to Quincy Larson.

{
    name: "Quincy Larson"
}
Add a name property to your empty object and give it a value of town square. 
## Step 55Passed
Just like array values, object properties are separated by a comma. Add a comma after your name property and add a button text property with the value of an empty array.

Note that, because the property name has more than one word, you'll need to surround it in quotes. For example:

{
    name: "Naomi",
    "favorite color": "purple"
} 
## Step 56Passed
Give your empty button text array three string elements. Use the three strings being assigned to the button innerText properties in the goTown function. Remember that array values are separated by commas. 
## Step 57Passed
Create another property in your object called button functions. Give this property an array containing the three functions assigned to the onclick properties in the goTown function. Remember that these functions are variables, not strings, and should not be wrapped in quotes. 
## Step 58Passed
Add one final property to the object named text. Give this property the final text.innerText value from the goTown function. 
## Step 59Passed
Add a second object to your locations array (remember to separate them with a comma). Following the pattern you used in the first object, create the same properties but use the values from the goStore function. Set the name property to store.
*/
## Step 60
Now you can consolidate some of your code. Start by copying the code from inside the goTown function and paste it into your update function. Then, remove all the code from inside the goTown and goStore functions. */
# Steps  61 -  70 12/28/23 - 12/29/23
## Step 61
Instead of assigning the innerText and onclick properties to specific strings and functions, the update function will use data from the location that is passed into it. First, that data needs to be passed.
Inside the goTown function, call the update function. Here is an example of calling a function named myFunction:
myFunction(); */
## Step 62
You now need to pass the location argument into the update call. You pass arguments by including them within the parentheses of the function call. For example, calling myFunction with an arg argument would look like:
myFunction(arg)
Pass your locations array into the update call. */
## Step 63
The 'locations' array contains two locations: 'the town square' and the 'store'. Currently you are passing that entire array into the 'update' function.
Pass in only the first element of the locations array by adding [0] at the end of the variable. For example: myFunction(arg[0]);.
This is called bracket notation. Values in an array are accessed by index. Indices are numerical values and start at 0 - this is called zero-based indexing. arg[0] would be the first element in the arg array.*/
## Step 64
Now your update function needs to use the argument you pass into it.
Inside the update function, change the value of the button1.innerText assignment to be location["button text"]. That way, you use bracket notation to get the button text property of the location object passed into the function. */
## Step 65
location["button text"] is an array with three elements. Change the button1.innerText assignment to be the first element of that array instead. */
## Step 66
Now update button2.innerText and button3.innerText to be assigned the second and third values of the button text array, respectively. */
## Step 67
Following the same pattern as you did for the button text, update the three buttons' onclick assignments to be the first, second, and third values of the button functions array. */
## Step 68
Finally, update the text.innerText assignment to equal the text from the location object. However, instead of using bracket notation, use dot notation.
## Step 69
Now update your goStore function to call the update function. Pass the second element of the locations array as your argument.
## Step 70
Create two more empty functions named fightSlime and fightBeast. These functions will be used in your upcoming cave object. */
To make sure your refactoring is correct, try clicking your first button again. You should see the same changes to your webpage that you saw earlier. */
Here is an example of accessing the name property of an object called person:

person.name */
# Steps  71 -  80 12/29/23 - 12/30/23
## Step 71
Add a third object to the locations array. Give it the same properties as the other two objects.

Set name to cave. Set button text to an array with the strings Fight slime, Fight fanged beast, and Go to town square. Set the button functions to an array with the variables fightSlime, fightBeast, and goTown. Set the text property to You enter the cave. You see some monsters.. */
## Step 72
Now that you have a cave location object, update your goCave function to call update and pass that new cave location. Remember that this is the third element in your locations array.

Don't forget to remove your console.log call! */
## Step 73
Now that your store and cave locations are complete, you can code the actions the player takes at those locations. Inside the buyHealth function, set gold equal to gold minus 10.

For example, here is how you would set num equal to 5 less than num: num = num - 5;. */
## Step 74
After the gold is updated, add a line to set health equal to health plus 10. */
## Step 75
There is a shorthand way to add or subtract from a variable called compound assignment. For example, changing num = num + 5 to compound assignment would look like num += 5.

Update both lines inside your buyHealth function to use compound assignment. */
## Step 76
Now that you are updating the gold and health variables, you need to display those new values on the game screen.

After your assignment lines, assign the innerText property of goldText to be the variable gold. Use the same pattern to update healthText with the health variable.

Here is an example:

let value = 100;
const total = document.querySelector('#total');
total.innerText = value;
You can test this by clicking your "Go to store" button, followed by your "Buy Health" button.

Note: Your answer should only be two lines of code. */
## Step 77
What if the player doesn't have enough gold to buy health? When you want to run code conditionally, you can use the if statement. Put all of the code in your buyHealth function inside an if statement. For example:

function myFunction() {
    if ("condition") {
        console.log("Hello World!");
    }
}
For now, follow that pattern to use a string condition inside your if statement. */
## Step 78
The condition string is just a placeholder. Change the if statement condition to check if gold is greater than or equal to 10.

Here is an if statement that checks if num is greater than or equal to 5:

if (num >= 5) {

} */
## Step 79
Now when a player tries to buy health, it will only work if they have enough money. If they do not, nothing will happen. Add an else statement where you can put code to run if a player does not have enough money.

Here is an example of an empty else statement:

    if (num >= 5) {

    } else {

    }
## Step 80
Inside the else statement, set `text.innerText` to equal `You do not have enough gold to buy health.`. */
# Steps  81 -  90 12/30/23
## Step 81
Use const to create a weapons variable above your locations array. Assign it an empty array. */
## Step 82
Just like your locations array, your weapons array will hold objects. Add four objects to the weapons array, each with two properties: name and power. The first should have the name set to stick and the power set to 5. The second should be dagger and 30. The third, claw hammer and 50. The fourth, sword and 100. */
## Step 83
Inside your buyWeapon function, add an if statement to check if gold is greater than or equal to 30. */
## Step 84
Similar to your buyHealth function, set gold equal to 30 less than its current value. Make sure this is inside your if statement. */
## Step 85
The value of the currentWeapon variable corresponds to an index in the weapons array. The player starts with a stick, since currentWeapon starts at 0 and weapons[0] is the stick weapon.

In the buyWeapon function, use compound assignment to add 1 to currentWeapon - the user is buying the next weapon in the weapons array. 
## Step 86
Increasing a value by 1, or incrementing, has a special operator in JavaScript: ++. If you wanted to increase num by 1, you could write num++.

Change your currentWeapon assignment to use the increment operator. 
## Step 87
Now update the `goldText` element to display the new value of `gold`, and update the `text` element to display `You now have a new weapon.`.
## Step 88
You should tell the player what weapon they bought. In between the two lines you just wrote, use `let` to initialize a new variable called `newWeapon`. Set this to equal `weapons`.
## Step 89
Use bracket notation to access an object within the `weapons` array and assign it to your `newWeapon` variable. Place the variable `currentWeapon` within the brackets.

When you use a variable in bracket notation, you are accessing the property or index by the *value* of that variable.

For example, this code uses the `index` variable to access a value of `array`.

    let value = array[index];
## Step 90
`weapons[currentWeapon]` is an object. Use dot notation to get the `name` property of that object.  
# Steps  91 - 100 12/30/23 - 12/31/23
## Step 91
You can insert variables into a string with the *concatenation operator* `+`. Update the `You now have a new weapon.` string to say You now have a and the name of the new weapon. Remember to end the sentence with a period.

Here is an example that creates the string `Hello, our name is freeCodeCamp.`:

    const ourName = "freeCodeCamp";
    const ourStr = "Hello, our name is " + ourName + ".";
## Step 92
Back at the beginning of this project, you created the `inventory` array. Add the `newWeapon` to the end of the `inventory` array using the `push()` method.

Here is an example:

    const arr = ["first"];
    const next = "second";
    arr.push(next);
`arr` would now have the value `["first", "second"]`.
## Step 93
Up until now, any time `text.innerText` was updated, the old text was erased. This time, use the `+=` operator to add text to the end of `text.innerText`.

Add the string ` In your inventory you have: ` - include the spaces at the beginning and the end.
## Step 94
At the end of the second `text.innerText` string you just added, use the concatenation operator to add the contents of `inventory` to the string.
## Step 95
Add an `else` statement to your `buyWeapon` function. In that statement, set `text.innerText` to equal `You do not have enough gold to buy a weapon.`.
## Step 96
Once a player has the best weapon, they cannot buy another one. Wrap all of the code in your `buyWeapon` function inside another `if` statement. The condition should check if `currentWeapon` is less than 3 - the index of the last weapon.
## Step 97 12/31/23
Arrays have a `length` property that returns the number of items in the array. You may want to add new values to the `weapons` array in the future.

Change your `if` condition to check if `currentWeapon` is less than the length of the `weapons` array. An example of checking the length of an array `myArray` would look like `myArray.length`.
## Step 98
You now have an error to fix. The `currentWeapon` variable is the index of the `weapons` array, but array indexing starts at zero. The index of the last element in an array is one less than the length of the array.

Change the `if` condition to check `weapons.length - 1`, instead of `weapons.length`.
## Step 99
Add an `else` statement for your outer `if` statement. Inside this new e`lse` statement, set `text.innerText` to `You already have the most powerful weapon!`.
## Step 100
Once a player has the most powerful weapon, you can give them the ability to sell their old weapons.

In the outer `else` statement, set `button2.innerText` to `Sell weapon for 15 gold.` Also set `button2.onclick` to the function name `sellWeapon`.
# Steps 101 - 110 12/31/23
## Step 101
Create an empty `sellWeapon` function.
## Step 102
Players should not be able to sell their only weapon. Inside the `sellWeapon` function, add an `if` statement with a condition that checks if the length of the `inventory` array is greater than `1`.
## Step 103
Inside the `if` statement, set `gold` equal to `15` more than its current value. Also update `goldText.innerText` to the new value.
## Step 104
Use the `let` keyword to create a variable named `currentWeapon`. Don't assign it a value yet.

Notice that you already have a `currentWeapon` variable elsewhere in your code. Since you are using the `let` keyword instead of `var`, the new `currentWeapon` is scoped only to this `if` statement. At the close of the `if` statement, the old `currentWeapon` will be used again.
## Step 105
The `shift()` method on an array removes the first element in the array and returns it. Use this method to take the first element from the `inventory` array and assign it to your `currentWeapon` variable.
## Step 106
After your `currentWeapon`, use the concatenation operator to set `text.innerText` to the string `You sold a `, then `currentWeapon`, then the string `.`.
## Step 107
Now use the `+=` operator to add the string `In your inventory you have:` and the contents of `inventory` to the `text.innerText`. Make sure to include the space at the beginning and end of the `In your inventory you have:` string.
## Step 108
Use an `else` statement to run when the `inventory` length is not more than one. Set the `text.innerText` to say `Don't sell your only weapon!`.
## Step 109
Now you can start the code to fight monsters. To keep your code organized, your `fightDragon` function has been moved for you to be near the other `fight` functions.

Below your `weapons` array, define a `monsters` variable and assign it an array. Set that array to have three objects, each with a `name`, `level`, and `health` properties. The first object's values should be `slime`, `2`, and `15`, in order. The second should be `fanged beast`, `8`, and `60`. The third should be `dragon`, `20`, and `300`.
## Step 110
Fighting each type of monster will use similar logic. Create an empty function called `goFight` to manage this logic.
# Steps 111 - 120 12/31/23 - 01/01/24
## Step 111
In your `fightSlime` function, set `fighting` equal to `0` - the index of `slime` in the `monsters` array. Remember that you already declared `fighting` earlier in your code, so you do not need `let` or `const` here.

On the next line, call the `goFight` function.
## Step 112
Following the same pattern, use that code in the `fightBeast` and `fightDragon` functions. Remember that `beast` is at index `1` and `dragon` is at index `2`. Also, remove the `console.log` call from your `fightDragon` function.
## Step 113
At the end of your code, create two empty functions named `attack` and `dodge`.
## Step 114
Add a new object to the end of the `locations` array, following the same properties as the rest of the objects. Set `name` to `fight`, `button text` to an array with `Attack`, `Dodge`, and `Run`, `button functions` to an array with `attack`, `dodge`, and `goTown`, and `text` to `You are fighting a monster.`.
## Step 115
In the `goFight` function, call your `update` function with the fourth object in `locations` as an argument.
## Step 116
Below your `update` call, set the `monsterHealth` to be the health of the current monster. You can get this value by accessing the `health` property of `monsters[fighting]` with dot notation.
## Step 117
The HTML element that shows the monster's stats has been hidden with CSS. Display the `monsterStats` element by updating the `display` property of the `style` property to `block`. For example, updating the `first` property of the `name` property of `user` would look like:

    user.name.first = "Naomi";
## Step 118
Now, set the `innerText` property of `monsterName` to be the `name` property of the current monster. Do the same for `monsterHealthText` and the `health` property.
## Step 119 - 01/01/24
Now you can build the `attack` function. First, update the `text` message to say `The [monster name] attacks.`, replacing `[monster name]` with the name of the monster. Remember you can use the concatenation operator for this.