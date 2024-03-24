/* -------------- HTTP VERBS (Verbos HTTP ==> GET, POST, PUT, DELETE) -------------- 

En la clase anterior, el cliente solicitaba al servidor la ruta /about y el servidor
devolvía un String que decía "About o Acerca de"
Esto es lo que conocemos como una petición GET (el cliente obtiene algo del servidor)

También tenemos peticiones POST, en las que es el cliente el que le envía algo al servidor
y es el servidor el que tendrá que guardar la información o utilizarla para crear algo (usuario en una BBDD por ejemplo).

También tenemos peticiones PUT, en las que el cliente, trata de actualizar algo. 
(un dato que ya existe en el servidor, por ejemplo, id de usuario para actualizar dicho usuario.)

También tenemos peticiones DELETE, en las que el cliente, elimina algún dato del servidor (o BBDD)

También existe PATCH, similar a PUT, con la diferencia de que utilizando PUT, actualizamos el dato completamente
por ejemplo, si tenemos un usuario con nombre, apellidos, edad, email, con el método PUT actualizaríamos todos los campos del usuario
mientras que con PATCH solo actualizamos una parte de esos datos.

* TODOS ESTOS VERBOS, FORMAN PARTE DEL MÉTODO DE COMUNICACIÓN HTTP, NO DEL SERVIDOR.
*/

//Instalamos la extensión Thunder Client de VSCode para poder realizar peticiones res sin necesidad de instalar programas (postman por ejemplo.)

const express = require('express')

const app = express()

/* MÉTODOS HTTP --> GET, POST, PUT, DELETE, PATCH */
app.get('/products', (req, res) => {
    res.send('Lista de productos')
})

app.post('/products', (req, res) => {
    res.send('Creando productos')
})

app.put('/products', (req, res) => {
    res.send('Actualizando un producto')
})

app.delete('/products', (req, res) => {
    res.send('Eliminando producto')
})

app.patch('/products', (req, res) => {
    res.send('Actualizando una parte del producto')
})

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)