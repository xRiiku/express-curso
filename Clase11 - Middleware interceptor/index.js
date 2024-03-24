/* 
Hay veces que queremos utilizar algo que otros desarrolladores han creado, pero no queremos modificar su código.
Por eso es que express nos permite utilizar middlewares, incluso utilizando paquetes de terceros.

Para diferenciar un middleware de una ruta, el middleware no tiene un path, solo tiene una función que recibe req, res y next.

Un middleware bastante popular que hace el trabajo que ya habíamos hecho en clases anteriores es morgan (https://www.npmjs.com/package/morgan).
Este middleware nos permite ver en consola las peticiones que se hacen a nuestro servidor.
*/

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev')) //mirar la documentación de morgan para ver las opciones que tiene

app.get('/profile', (req, res) => {
    res.send('Profile page')
})

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)