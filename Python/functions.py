objective = int(input('Digite un numero que desea encontrar: '))
print('')
print('1. Busqueda binaria')
print('2. enumeracion exhaustiva')
print('3. aproximacion')
action = int(input('Digite la opcion por la cual desea buscar: '))


def binarySerarch():
    times = 0
    left = 0.0
    right = max(1.0, objective)
    answer = (left + right) / 2

    while answer < objective:
        times += 1
        if answer > objective:
            right = answer
        else:
            left = answer

        answer = (left + right) / 2

    print(f'{answer} fue entontrado en {times} intentos')


def exhaustiveEnumeration():
    times = 0
    answer2 = 0

    while answer2 < objective:
        answer2 += 1
        times += 1

    print(f'{answer2} fue entontrado en {times} intentos')


def approximation():
    epsilon = 0.01
    step = epsilon**2
    answer3 = 0
    times = 0

    while abs(answer3 - objective) >= epsilon:
        answer3 += step
        times += 1

    print(f'{answer3} fue entontrado en {times} intentos')


if action > 3:
    print('Debe de ser un numero del 1 al 3')

if action == 1:
    binarySerarch()

if action == 2:
    exhaustiveEnumeration()

if action == 3:
    approximation()
