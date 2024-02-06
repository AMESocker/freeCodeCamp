import re
import secrets
import string


def generate_password(length,nums, special_chars, uppercase, lowercase):

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
        constraints = [(nums,'')]
    return password

# new_password = generate_password(8)
# print(new_password)

# pattern = re.compile('l+')
# quote = 'Not all those who wander are lost.'
# print(pattern.search(quote))

pattern = 'w[ha]' #"l+"
quote = 'Not all those who wander are lost.'
print(re.findall(pattern,quote))

# Start 01/25/24
""" 
print(all_characters)
print(secrets.choice(all_characters)) """



































"""
A Python module is a file that contains a set of statements and definitions that you can use in your code.

In this project, you'll learn how to import modules from the Python standard library. You'll also learn how to use Regular Expressions by building your own password generator program."""