This script checks whether a given string is a palindrome. Below is a summary of its functionality:

1. **HTML Elements Selection:**
   - `textInput`: An input field for the user to type a string.
   - `checkButton`: A button to trigger the palindrome check.
   - `result`: A field to display the result.

2. **Event Handling:**
   - When the `checkButton` is clicked:
     - It retrieves the user input from `textInput`.
     - If the input is empty, it prompts an alert asking the user to provide a value.
     - Otherwise, it calls `cleanString()` to process the input.

3. **String Cleaning (`cleanString` function):**
   - Converts the input string to lowercase.
   - Removes underscores and non-word characters (e.g., punctuation, spaces) using a regular expression.
   - Passes the cleaned string to `palCheck()`.

4. **Palindrome Check (`palCheck` function):**
   - Splits the cleaned string into an array of characters.
   - Reverses the array and converts it back to a string.
   - Compares the original cleaned string with the reversed string:
     - If they match, the input is a palindrome, and a message is displayed in `result`.
     - Otherwise, a message indicating it's not a palindrome is shown.

5. **Tests:**
   - The script includes a test array with predefined strings (both palindromes and non-palindromes).
   - Each string is passed through `cleanString()` to verify its palindrome status.

**Key Features:**
- Handles case-insensitivity and ignores spaces, punctuation, and special characters when checking for palindromes.
- Provides feedback for both valid and invalid inputs.