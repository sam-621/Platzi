# Por aproximacion

objetivo = int(input('escoge un numero '))  # 4
epsilon = 0.01  # La diferencia que debería de haber entre respuesta**2 y el objetivo
paso = epsilon**2  # 0.0001
respuesta = 0.0

while abs(respuesta**2 - objetivo) >= epsilon and respuesta <= objetivo:
    print(respuesta)
    respuesta += paso
if abs(respuesta**2 - objetivo) >= epsilon:
    print('No encontramos la raiz cuadrada')
else:
    print(f'La raiz vuadrad de {objetivo} es {respuesta}')


# Queremos sacar la raiz de un numero mediante aproximaciones
# A respuesta le vamos sumando 0.0001
# luego lo elevamos al cuadrado y le restamos el numero que debe de dar
# si la diferencia es mayor o igual que epsilon (0.01)
# ya tuvimos nuestra aproximacion
#
