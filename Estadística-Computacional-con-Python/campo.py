class Campo:

  def __init__(self):
    self.drunk_cordinates = {}

  def add_drunk(self, drunk, cordinate):
    self.drunk_cordinates[drunk] = coordinate

  def move_drunk(drunk):
    delta_x, delta_y = drunk.walk()
    current_cordinate = self.drunk_cordinates[drunk]
    new_cordinate = current_cordinate.move(delta_x, delta_y)

    self.drunk_cordinates[drunk] = new_cordinate

  def get_coordinate(self, drunk):
    return self.drunk_cordinates[drunk]