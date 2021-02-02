class Cordinate:

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def move(self, delta_x, delta_y):
        return Cordinate(self.x + delta_x, self.y + delta_y)

    def distancia(self, another_cordinate):
        delta_x = self.x - another_cordinate.x 
        delta_y = self.y - another_cordinate.y 

        return (delta_x**2 + delta_y**2)**0.5