class Car:

    def __init__(self, model, brand, color):
        self.model = model
        self.brand = brand
        self.color = color
        self._state = 'Resting'
        self._motor = Motor(cylinder=4)

    def speed_up(self, typeof='slow'):
        if typeof == 'fast':
            self._motor.inject_gasoline(10)
        else:
            self._motor.inject_gasoline(3)
        
        self._state = 'Moving'


class Motor:

    def __init__(self, cylinder, typeof='gasoline', gasoline):

        self.cylinder = cylinder
        self.typeof = typeof
        self._temperature = 0
        self.gasoline = 100

    def inject_gasoline(self, quantity):
        self.gasoline = self.gasoline + quantity