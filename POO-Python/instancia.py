import unittest

class Coordenada:

    def __init__(self, x, y):
        self.x = x;
        self.y = y;

    def distacnia(self, otra_coordenada):
        x_diff = (self.x - otra_coordenada.x)**2
        y_diff = (self.y - otra_coordenada.y)**2

        return (x_diff + y_diff)**0.5 #raiz cuadrada

class caja_negra_test(unittest.TestCase):

    def test_metodo_distancia(self):

        coord_1 = Coordenada(3,30)
        coord_2 = Coordenada(4,8)

        resultado = coord_1.distacnia(coord_2)

        self.assertEqual(resultado, 22.02271554554524)


if __name__ == '__main__':

    unittest.main()

#coord_1 = Coordenada(3,30)
#coord_2 = Coordenada(4,8)
#
#print(coord_1.distacnia(coord_2))
#print(isinstance(coord_2, Coordenada)) #ver si la variable coord_2 es una instancia de la clase Coordenada