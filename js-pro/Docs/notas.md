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

# This

This es un objeto que adquiere un valor diferente dependiendo de su contexto.

- global

será igual al objeto window

- funcion

será igual al objeto window cuando esa funcion es llamada directamente
```js
function whoIsThis() {
  return this;
}
console.log(`whoIsThis(): ${whoIsThis()}`);
```
- stric mode

El objeto window será indefinido
En modo estricto, el valor de this se mantiene en lo que está establecida al entrar en el contexto de ejecución. Si no está definido, permanece undefined.
```js
function whoIsThisStrict() {
  'use strict';
  return this;
}

console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);
```

- objeto

si this es llamado dentro de una funcion la cual está dentro de un objeto
this está ligado a ese objeto
```js
const o = {
    p: 'p',
    getP: function() {
        return this.p;
    }
}

o.getP()
"p"
```
Vean este comportamiento
```js
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); //35
independent(); //undefined
```
Al llamar this desde la referencia del objeto, this está ligado al objeto
Pero al llamarlo directamente desde la funcion this sigue siendo window

Con esto se confirma que this sólo se ve afectado por la referencia del miembro más inmediato
Y se puede reconfirmar con esto

En el siguiente ejemplo, cuando invocamos a la función, lo llamamos como metodo g del objeto o.b. Esta vez durante la ejecución, this dentro de la función se referirá a o.b. El hecho de que el objeto es en sí mismo un elemento de o no tiene ninguna consecuencia, la referencia más inmediata es todo lo que importa.
```js
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // logs 42
```

- clase

this hace referencia a la instancia de la clase

```js
function Person(name) {
  this.name = name
}

Person.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.name}`);
}

const person = new Person('Rogelio');
person.saludar() //Hola, me llamo Rogelio
```

# call - aply - bind

Los tres son métodos que definen this pero de maneras diferentes

- call
Define `this` y ejecuta la funcion
`funcion.call(thisArg, arg1, arg2, ..., argn)`

```js
function saludar() {
  console.log(`Hola. Soy ${this.name} ${this.apellido}`);
}

const richard = {
  name: 'Richard',
  apellido: 'Kaufman López',
};

saludar.call(richard)
//caminar.call(richard, 400, 'norte');
```

Aquí, saludar está utilizando this, pero en el contexto que lo usa(global) no existen las propiedades name y apellido
Pero con call nosotros podemos definir `this`, en este caso le decimos que el objeto richard será `this`

- aply
Lo mismo que call pero en ves de recibir argumento dividido por comas lo recibe en un arreglo
```js
const valores = [800, 'noreste'];
caminar.apply(richard, valores);
```

- bind
Con `bind` también podemos definir `this` pero esta no ejecuta la funcion
sino que devuelbe otra funcion la cual ya tiene this como nosotros se lo pasamos

```js
const daniel = { name: 'Daniel', apellido: 'Sánchez' };
const danielSaluda = saludar.bind(daniel);
danielSaluda();

//mas argumentos
const danielCamina = caminar.bind(daniel, 2000);
danielCamina('oeste');
```

# Prototype
Es sólo un objeto, el cual todos los objetos de js tiene,

`Object.create(objeto)` crea una instancia del objeto que le pasamos

## New

La keyword new lo que hace es que nos evita el `Object.create(objeto)` y nos agrega el this

```js
function Hero(name) {
  // this = Object.create(Hero.prototype);
  this.name = name;
  // return this;
}

Hero.prototype.saludar = function() {
  console.log(`New: ${this.name}`);
};

const zelda = new Hero('Zelda');
zelda.saludar();
```
como se ve no necesitamos crear usar `Object.create` y tampoco debemos retornar nada,
ya que new lo hace por nosotros.

`new` es sólo una ayuda, nada mas. en programacion se llama a esto azucar sintáctico

# Herencia prototipal
Aquí se entenderá un poco mas que es el prototype, ejemplo
```js
//Creamos una funcion (que al final es un objeto en js)
function Persona() {
  this.name = 'Rogelio';
  this.age = 18;
}

//A la funcion le agregamos un metodo saludar
//Pero se agrega atraves del prototype
//cada instancia tendrá en su prototype el atributo saludar 
Persona.prototype.saludar = function() {
  console.log('Hola mi nombre es ', this.name)
}

const persona = new Persona();
cosole.log(persona) //{name: 'Rogelio', age: 18, __proto__: Object}
cosole.log(persona.__proto__) //{saludar: f(), constructor: f Persona(), __proto__: Object}
```
Como se ve el atrubuto saludar no está en primera linea, sino que está dentro del prototype del objeto persona

Ahora como podríamos llamar a la funcion saludar? intuitivamente sería así
```js
persona.saludar() //Hola mi nombre es Rogelio
```
E impresionantemente esto funciona, pero porque?
ya vimos que el metodo saludar está dentro de la propiedad `__proto__`
En teoria para poder acceder a el sería 
```js
persona.__proto__.saludar()
```

El hecho de que funcione, a eso se le llama herencia prototipal.
Cuando mandemos llamar una propiedad de un objeto en js
él buscara primero a ver si está en primera linea, si no está buscará en el prototype del objeto
y si ve que no está buscará entinces en el prototype del prototype y asñi susecivamente hasta llegar a Object
el cual su prototype es null, es poreso que podemos llamar la funcion saludar así
```js
persona.saludar()
```
Ya que al ver que noe stá en primera linea, va y busca dentro del prototype y ahí lo encuentra.

La forma corecta de obtener el prototipo de un objeto es:
```js
const protoPersona = Object.getPrototypeOf(persona)
console.log(protoPersona) //{saludar: f(), constructor: f Persona(), __proto__: Object}
```
Ya que el atributo `__proto__` puede cambiar dependiendo el borwser, node y tal

# Promises
- races: la mas rapida
- all: todas, si una falla ninguna se ejecuta
- forloop: una por una