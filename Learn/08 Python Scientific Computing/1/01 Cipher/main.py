"""
# number = 5                            # Step 1
# print(text)                           # Step 3
# print(text[6])                        # Step 4
# print(text[-1])                       # Step 5
# print(len(text))                      # Step 6
# print(type(text))                     # Step 7
# print(shift)                          # Step 9
# print(type(shift))                    # Step 10
#index = alphabet.find(text[0])         # Step 12,13
#print(text.lower())                    # Step 14  
#print(index)                           # Step 13
# index = alphabet.find(text[0].lower())# Step 15
# shifted = alphabet[index+shift]       # Step 16
# print(shifted)                        # Step 17
print(char,index)                       # Step 19,20,21,22,24
#text[0] = 'B'                          # Step 27
text = 'Albatross'                      # Step 28
print(new_char)                         # Step 31
print(char==' ')                        # Step 37
encrypted_text += char                  # Step 40 
def caesar(message,offset):             # Step 46,48
caesar(text,shift)                      # Step 47,50
shift = 3                               # Step 8,49
caesar(text,13)                         # Step 51
        print('plain text:', message)                                   # Step 45
        print('encrypted text:', encrypted_text)                        # Step 32,34,44
encryption = encrypt(text,custom_key)                                   # Step 63,67,73,81

"""
text = 'Hello Zaira!'                                                   # Step 2,41,49,74
custom_key = 'happycoding'                                                   # Step 54,91
def vigenere(message,key,direction=1):                                  # Step 53,65,72
    key_index = 0                                                   # Step 55
    alphabet = 'abcdefghijklmnopqrstuvwxyz'                         # Step 11
    final_message = ''                                              # Step 33,70

    for char in message.lower():                                    # Step 18,25
        # Append any non-letter character to the message        # Step 56,77
        if not char.isalpha():                                  # Step 38,75,76
                final_message += char                           # Step 39
        else:
                # Find the right key character to encode/decode # Step 59,71
                key_char = key[key_index % len(key)]            # Step 57
                key_index += 1                                  # Step 58
        # Define the offset and the encrypted/decrypted letter. # Step 61,71
                offset = alphabet.index(key_char)               # Step 60
                index = alphabet.find(char)                     # Step 23
                new_index = (index + offset*direction)% len(alphabet)                                      # Step 26,42,43,66
                final_message += alphabet[new_index]            # Step 30,34,35,36
    return final_message                                            # Step 62
def encrypt(message,key):                                               # Step 78
    return vigenere(message, key)                                   # Step 79

def decrypt(message,key):                                               # Step 80
    return vigenere(message, key, -1)

print(f'\nEncrypted text: {text}')                                        # Step 64,83,87,88,89
print(f'Key: {custom_key}')                                               # Step 84,88
decryption = decrypt(text,custom_key)                                   # Step 68,81
print(f'\nDecrypted text: {decryption}\n')                                   # Step 69,85,88,90