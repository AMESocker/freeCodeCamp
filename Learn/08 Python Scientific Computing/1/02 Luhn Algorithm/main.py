def verify_card_number(card_number):                                    # Step 7
    sum_of_odd_digits = 0                                           # Step 9
    card_number_reversed = card_number[::-1]                        # Step 10,12,13,14
    # print(card_number_reversed)                                   # Step 11,15
    odd_digits = card_number_reversed[::2]                          # Step 17
    for i in odd_digits:                                            # Step 19
        sum_of_odd_digits += int(i)                             # Step 20,21
        # print(i)
    # print(odd_digits)                                             # Step 18
    # print(sum_of_odd_digits)                                      # Step 21,25
    sum_of_even_digits = 0                                          # Step 22
    even_digits = card_number_reversed[1::2]                        # Step 23
    for i in even_digits:                                           # Step 24
        number = int(i)*2                                       # Step 26
        if number >= 10:                                        # Step 27
            number = number // 10 + number % 10             # Step 28
            # print(number)                                 # Step 29,30
        sum_of_even_digits += number                            # Step 30
    total = sum_of_odd_digits + sum_of_even_digits                  # Step 31
    # print(total)                                                  # Step 35  
    return 0 == total % 10                                          # Step 32
                


def main():                                                             # Step 1
        card_number = '4111-1111-4555-1142'                             # Step 2
        card_translation = str.maketrans({'-':'',' ':''})               # Step 3
        translated_card_number = card_number.translate(card_translation)# Step 4
        if verify_card_number(translated_card_number):                  # Step 8,33
                print('VALID!')
        else:
                print("INVALID!")
        # print(translated_card_number)                                 # Step 5,16

main()                                                                  # Step 6