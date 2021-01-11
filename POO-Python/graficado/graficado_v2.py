from bokeh.plotting import figure, output_file, show

#f(x) = 2x + 4
def graphic(x):
    y = (2 * x) + 4

    return y

if __name__ == '__main__':
    output_file('graficado_v2.html')
    fig = figure()

    print('f(x) = 2x + 4')
    points = int(input('How many point do you want to have you graphic? '))

    x = []
    y = []

    for i in range(points):
        x_value = int(input('Digit the x value: ')) 

        y_value = graphic(x_value)

        x.append(x_value)
        y.append(y_value)
    
    fig.line(x, y, line_width=2)
    show(fig)

