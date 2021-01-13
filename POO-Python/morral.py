def contador():
	global i
	i=i+1
	return i
def morral(tamano_morral, pesos, valores, n):
    contador()
    #si ya no hay elementos o nuestro morral se llenó
    if n == 0 or tamano_morral == 0:
        return 0

    #si un elemento ya no nos cabe en nuestro morral, lo omitimos (n-1)
    if pesos[n - 1] > tamano_morral:
        return morral(tamano_morral, pesos, valores, n - 1)

    return max(valores[n - 1] + morral(tamano_morral - pesos[n - 1], pesos, valores, n - 1),
                morral(tamano_morral, pesos, valores, n - 1))


if __name__ == '__main__':
    valores = [60, 100, 120]
    pesos = [10, 20, 30] #kg
    tamano_morral = 20 #kg
    n = len(valores)

    #cual es el valor maximo de la mezcla de los valores
    #teniendo en cuenta la limitante de tamano_morral
    resultado = morral(tamano_morral, pesos, valores, n)
    print(resultado)