def my_func(x):
    respuesta = 0
    for i in range(2000):
        respuesta += 1
    return respuesta

if __name__ == '__main__':
    result = my_func(1) 
    print(result)