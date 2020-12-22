objective = int(input('Choose an int '))
response = 0

while response**2 < objective:
    response += 1
    if response**2 == objective:
        print(f'La raiz cuadrada de {objective} is {response}')
    else:
        print(f'{objective} no tiene una raiz cuadrada exacta')
