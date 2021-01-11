from bokeh.plotting import figure, output_file, show

#f(x) = x^2
def quadratic_function(x):
    y = x**2

    return y

if __name__ == '__main__':
    output_file('funcion_cuadratica.html')
    fig = figure()

    print('f(x) = x^2')

    x = []
    y = []
    i = -100

    while i <= 100:
        i = i + 0.1 

        y_value = quadratic_function(i)

        x.append(i)
        y.append(y_value)
    
    fig.line(x, y, line_width=2)
    show(fig)