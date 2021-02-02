import random

class Drunk: 
  def __init__(self, name):
    self.name = name

    
class Traditional_Drunk:
  def __init__(self, name):
    super().__init__(name)

  def walk():
    return random.choice([(0, 1), (0, -1), (1, 0), (-1, 0)])
