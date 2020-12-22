objetivo = int(input('Escoge un numero: '))
epsilon = 0.01
bajo = 0.0
alto = max(1.0, objetivo)
respuesta = (alto + bajo) / 2

while abs(respuesta**2 - objetivo) >= epsilon:
    print(f'bajo = {bajo}, alto = {alto}, respuesta = {respuesta}')
    if respuesta**2 < objetivo:
        bajo = respuesta
    else:
        alto = respuesta

    respuesta = (alto + bajo) / 2

print(f'La raiz cuadrada del {objetivo} es {respuesta}')


# bajo es 0 y alto es el objetivo (144)
# respuesta es igual a la mitad de la suma de alto + bajo, quedando siempre en la mitad de los rangos
# luego verificamos si la mitad es la raiz elevandola al cuadrado, si es mayor al objetivo entonces nos vamos para la izquierda, y si no, a la derecha
# despues volvemos a hacer que la respuesta sea igual a la division de la suma de alto  bajo
# y volmenos a verificar si la mitad es la raiz elevandola al cuadrado
# repeat
# repeat
