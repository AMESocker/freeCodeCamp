def add_expense(expenses,amount,category):                      # Step 1
        expenses.append({'amount': amount,'category':category}) # Step 3,4,5

def print_expenses(expenses):                                   # Step 6
        for expense in expenses:                                # Step 7
                print(f'Amount: {expense["amount"]}, Category: {expense["category"]}')                                 # Step 8,9

def total_expenses(expenses):                                   # Step 10
        return sum(map(lambda expense: expense['amount'], expenses))                                              # Step 16,17

def filter_expenses_by_category(expenses,category):             # Step 19
        return filter(lambda expense: expense['category'] == category,expenses)                                               # Step 20,21,22

def main():                                                     # Step 23
        expenses = []                                           # Step 2
        while True:                                             # Step 24
                print('\nExpense Tracker')
                print('1. Add an expense')                      # Step 25
                print('2. List all expenses')                   # Step 26
                print('3. Show total expenses')                 # Step 27
                print('4. Filter expenses by category') 
                print('5. Exit') 

                choice = input('Enter your choice: ')           # Step 28
                if choice == '1':                               # Step 29
                        amount = float(input('Enter amount: ')) # Step 30,31
                        category = input('Enter category: ')    # Step 32
                        add_expense(expenses,amount,category)   # Step 33
                elif choice =='2':                              # Step 34
                        print('\nAll Expenses:')
                        print_expenses(expenses)                # Step 35
                elif choice =='3':                              # Step 36
                        print('\nTotal Expenses: ',total_expenses(expenses))
                elif choice == '4':                             # Step 37
                        category = input('Enter category to filter: ') 
                        print(f'\nExpenses for {category}:')    # Step 38  
                        expenses_from_category = filter_expenses_by_category(expenses, category)                    # Step 39  
                        print_expenses(expenses_from_category)  # Step 40
                elif choice == '5':                             # Step 41
                        print('Exiting the program.')  
                        break                                   # Step 42 
if __name__ == '__main__':                                      # Step 44
        main()                                                  # Step 43

# test = lambda x: x * 2                                        # Step 11
# print(sum(map(test, [2, 3, 5, 8])))                           # Step 12,13,14,15