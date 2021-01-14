import time

# factorial(n) = 2(n-1) + 2 
def factorial(n):
    respuesta = 1 #1

    while n > 1: #n-1
        respuesta *= n #1
        n -= 1 #1

    return respuesta #1


def factorial_r(n):
    if n == 1:
        return 1

    return n * factorial_r(n - 1)


if __name__ == '__main__':
    n = 950

    comienzo = time.time()
    factorial(n)
    final = time.time()
    print(final - comienzo)

    comienzo = time.time()
    factorial_r(n)
    final = time.time()
    print(final - comienzo)

# Un loop => crecimiento lineal.
# Un loop dentro de otro => crecimiento cuadratico
# Llamadas recursivas => crecimiento exponecncial.
