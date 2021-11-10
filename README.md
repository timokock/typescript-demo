## ¿Este objeto está declarado correctamente? ¿Cómo accedemos a la primera llave?

```js
let person = {
    "first-name": "John",
    "last-name": "Smith",
    "age": 25
}
```

Respuesta: Si, accedemos de la siguiente manera: person["first-name"]

## En el siguiente objeto, ¿cómo accederíamos al código de vuelo de British Airways?

```js
const person = {
    name: "Ram",
    age: 27,
    vehicles: {
        car: "limo",
        bike: "orbea",
        airlines: {
            lufthansa: "LH123",
            british_airways: "BA834"
        }
    }
}
```

Respuesta: Podemos acceder mediante la siguiente expresión: person.vehicles.british_airways

## Dado el siguiente objeto, itera para extraer los 3 nombres de clientes:

```js
const company = {
    name: "Bar company",
    address: "Elm Street",
    phone: 0023566699,
    clients: ["juan", "pepe", "maria"]
}
```

Respuesta: company.clients.map(client => console.log(client))

## Del objeto company, extraer las llaves:

Respuesta: for(let key in company) console.log(compnay[key])

## Para estraer las llaves, ¿sería correcto lo siguiente?
## for(let key in company) console.log(company.key)

Respuesta: No es correcto porque JS iteraría el objeto buscando una llave con nombre "key" y como no la hay devolvería undefined.

## Ahora queremos extraer del objeto company las llaves y los valores a la vez.

Respuesta: for(let [key, value] of Object.entries(company)) console.log(key, ": ", value)

## Al pasar el objeto company como prop a otro componente (en react), queremos cambiar el nombre de la llave name a companyName. ¿Cómo lo harías?

Respuesta: En ES5 tendríamos que hacer un for loop. Desde ES6 existe la desestrucuturación de objetos, podremos hacer lo siguiente:
const {name : companyName, address, phone, clients} = company

## Tenemos un array de objetos del tipo company y pasaremos el objeto como prop al componente. Queremos asegurarnos de que los datos muestren un texto para el teléfono, incluso si la companía que estamos pasando no incluye el número. Desestructura la información, asegurándote de que por defecto, si el objeto no tiene el valor de phone, nos muestre un texto: "no number available". 

```js
const companies = [
    {
        name: "Bar company1",
        address: "Elm Street 1",
        phone: 001231321231,
        clients: ["juan", "pepe", "maria"]
    },
    {
        name: "Bar company2",
        address: "Elm Street 2",
        phone: null,
        clients: ["marta", "antonio", "pedro"]
    },
    {
        name: "Bar company3",
        address: "Elm Street 3",
        phone: 0061616411,
        clients: ["alex", "jesus", "alba"]
    },
    {
        name: "Bar company4",
        address: "Elm Street 4",
        phone: 0066969969,
        clients: ["susana", "mario", "andres"]
    }
]
```

Respuesta: { name, address, phone = "no number available", clients } = companies

## Dada la siguiente función, extrae las llaves del objeto retornado:

```js
const getDetails = () => {
    return {
        age: 25,
        name: "Flora"
    }
}
```

Respuesta:

```js
const {age, name} = getDetails()
```

## En el objeto company, cambiar name a companyName, address a companyAddress y almacena el resto de la información en un objeto.

Respuesta:

```js
const {name: companyName, address: compnayAddress, ...rest} = company
```

## Haz un refactoring del siguiente código usando restructuring:

```js
const companyNew = {
    name: "Bar Company",
    address: {
        street: "Elm Street",
        zipCode: 08159,
        city: "JSCity",
        country: "JSCountry"
    },
    phone: 003442556333,
    clients: ["juan","pepe","maria"]
}

let name = company.name;
let street = company.address.street
let country = company.address.country

```

Respuesta:

```js
let {name, address: {street, country}} = companyNew
```

## ARRAYS

### Los objetos están ordenados? Y los arrays?

```js
let array = [1, 5, 3, 7] array[2] = 3

const company = {
    company: "Bar company",
    address: "Elm Street",
    phone: "00346654847",
    clients: ["juan", "pepe", "maria"]
}
```
Respuesta: Los objetos se ordenan alfabéticamente independientemente del orden en el que se declara. Los arrays mantienen su posición según se asigna las posiciones.

### Obtener los elementos a y c utilizando ES5 y ES6 desestrucuring.
```js
const letters = ["a", "b", "c"]
```
Respuesta:
```js
ES5
const a = letters[0]
const c = letters[2]

ES6
const [a, , c] = letters
```

### Dado el siguiente array, extrae el primer y segundo elemento y el resto guradar en otro array.
```js
const tennisPlayers = ["Federer", "Jockovic", "Nadal" , "Thiem", "Zverev", "Tsitsipas"]
```

Respuesta:
```js
const [player1, player2, ...rest] = tennisPlayers
```

### Dado el array tennisPlayers, extraer el primer y el sexto elemento y el resto mantanerlos en un array nuevo.

Respuesta:
```js
const tennisPlayers = ["Federer", "Tsitsipas", "Nadal" , "Thiem", "Zverev", "Jockovic"]
const [player1, player2, ...rest]
```

### Iterar en el array tennisPlayer y añadirles el ranking. Usar ES5 y ES6

Respuesta:
```js
ES5
for(let i = 0; i < tennisPlayers.length; i++) {
    console.log((i + 1) + "-" + tennisPlayers[i])
}
ES6
tennisPlayers.map((player, index) => index+1 + "-" + player)
```

### Intercambiar los valores de dos variables.

```js
let a = "Hola"
let b = "Adios"
```

Respuesta:
```js
[a, b] = [b, a]
```
### Dado el siguiente array y la asignación de la desestructuración, ¿qué valor tendrá second?

```js
const array = ["a", , "z"]

const [first, second] = array
```

Respuesta: undefined, al leer el sgundo valor sin asignar.

###