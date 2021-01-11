from bokeh.plotting import figure, output_file, show

#f(x) = x^2
def quadratic_function(x):
    y = x**2

    return y

if __name__ == '__main__':
    output_file('funcion_cuadratica.html')
    fig = figure()

    print('f(x) = x^2')
    points = int(input('How many point do you want to have you graphic? '))

    x = []
    y = []

    for i in range(points):
        x_value = int(input('Digit the x value: ')) 

        y_value = quadratic_function(x_value)

        x.append(x_value)
        y.append(y_value)
    
    fig.line(x, y, line_width=2)
    show(fig)