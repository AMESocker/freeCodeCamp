import re
import secrets
import string


def generate_password(length=16,nums=1, special_chars=1, uppercase=1, lowercase=1):

    # Define the possible characters for the password
    letters = string.ascii_letters
    digits = string.digits
    symbols = string.punctuation

    # Combine all characters
    all_characters = letters + digits + symbols

    while True:
        password = ''
    # Generate password
        for _ in range(length):
            password += secrets.choice(all_characters)

        constraints = [
            (nums,r'\d',''),
            (lowercase ,r'[a-z]'),
            (uppercase, r'[A-Z]'),
            (special_chars,fr'[{symbols}]')
        ]
        # Check constraints
        # count = 0
        if all(
            constraint <= len(re.findall(pattern, password))
            for constraint, pattern in constraints
        ):
            break
    return password


if __name__ == '__main__':
    new_password = generate_password()
    print('Generated password:',new_password)
#


# Start 01/25/24
""" 

pattern = r'\W' #"l+"
quote = '_'
print(re.findall(pattern,quote))
print(all_characters)
print(secrets.choice(all_characters)) 
# pattern = re.compile('l+')
# quote = 'Not all those who wander are lost.'
# print(pattern.search(quote))
"""



































"""
A Python module is a file that contains a set of statements and definitions that you can use in your code.

In this project, you'll learn how to import modules from the Python standard library. You'll also learn how to use Regular Expressions by building your own password generator program."""