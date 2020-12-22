print('First user')
print('')
user1 = input('Write your name: ')
age1 = int(input('Write your age in years: '))

print('Second user')
print('')
user2 = input('Write your name: ')
age2 = int(input('Write your age in years: '))

if age1 > age2:
    print(f'{user1} is older than {user2}')
elif age1 < age2:
    print(f'{user2} is older than {user1}')
else:
    print(f'{user1} y {user2} have the same age')
