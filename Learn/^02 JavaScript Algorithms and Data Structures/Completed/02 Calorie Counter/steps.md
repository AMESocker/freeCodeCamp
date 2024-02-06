# regex
## Step 23
While looping through the string works, creating a new array is inefficient for memory and runtime performance. Instead, you can use Regular Expressions (referred to as "regex") to match specific characters.

Regex in JavaScript is indicated by a pattern wrapped in forward slashes – for example:

        `const regex = /hello/;`
Loop:

        let strArray = str.split('');                    
        let cleanStrArray = [];                                         
        for (let i = 0; i < strArray.length; i++) {                     
                if (!["+", "-", " "].includes(strArray[i])) {           
                        cleanStrArray.push(strArray[i])                 
                }
        }

`const regex = /hello/;`
## Step 24
The pattern you currently have will match the exact text `hello`, which is not what you want to match. You want to look for `+`, `-`, or spaces. Replace the pattern in your `regex` variable with `\+-` to look for plus and minus characters.

Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions.

`const regex = /\+-/;`
## Step 25
In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. Shorthand character classes are preceded with a backslash (\). The character class \s will match any whitespace character. Add this to your regex pattern.
`const regex = /\+-\s/;`
## Step 26
Your current pattern won't work just yet. /+-\s/ looks for +, -, and a space in order. This would match +- hello but would not match +hello.

To tell the pattern to match each of these characters individually, you need to turn them into a character class. This is done by wrapping the characters you want to match in brackets. For example, this pattern will match the characters h, e, l, or o:

        `const regex = /[helo]/;`

Turn your +-\s pattern into a character class. Note that you no longer need to escape the + character, because you are using a character class.
`const regex = /[+-\s]/;`
## Step 27
Regex can also take specific flags to alter the pattern matching behavior. Flags are added after the closing `/`. The `g` flag, which stands for "global", will tell the pattern to continue looking after it has found a match. Here is an example:

        `const helloRegex = /hello/g;`
Add the `g` flag to your regex pattern.

`const regex = /[+-\s]/g;`
##