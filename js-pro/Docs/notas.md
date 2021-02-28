# Como llega un script al navegador

## normal
Se recorre el html hasta que encuentra una etiqueta script, ahí para de procesar html
para leer y ejecutar el javascript, cuando termina sigue con el html

## async (sólo cuando el script tiene un src en internet)
Hace la peticion del script asíncronamente, 
es decir que mientras hace el fetching se sigue ejecutando el html
hasta que ya termina el fetching ahí vuelve a parar de ejecutar el html
para leer y ejecutar el javascript

## defer
Esto lo que hace es que pone tu script al final del documento,
y tiene el mismo comportamiento que el **async**, 
pero este funciona con scripts internos o externos

# Scope

Existen 4 scopes
- Global scope
- Function scope
- Block scope
- Module scope

# Clousures

Es una técnica para emular el tener métodos y variables privados
```js
function makeCounter(n) {
  let count = n;
  return {
    increase: function() {
      count = count + 1;
    },
    decrease: function() {
      count = count - 1;
    },
    getCount: function() {
      return count;
    },
  };
}
```

https://developer.mozilla.org/es/docs/Web/JavaScript/Closures