/* 
Hasta ahora, en cada petición hemos estado devolviendo textos (String) que el navegador puede interpretar, 
pero podemos devolver diferentes cosas como por ejemplo:
Archivos HTML, videos, audios, o formatos como JSON o XML entre otro tipo de respuestas.
*/

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

//respondemos a la ruta localhost:3000/miarchivo con una imagen.
app.get('/miarchivo', (req, res) => {
    res.sendFile('./RikudevLogo.png',{
        root: __dirname
    })
})

//También podemos responder con un archivo JSON
app.get('/user', (req, res) => {
    res.json({
        Nombre: 'Daniel',
        Apellidos: 'Ramon Campos',
        Email: 'aaaaa@gmail.com',
        Edad: 34,
        Puntos:[1,2,3,4,5],
        Dirección: {
            Calle: 'calle 1234 san express',
            CP: 76859,
            Ciudad: 'express city'
        }
    })
})


/* A la hora de enviar una peticion DELETE, el servidor no tiene por que responder nada, 
aunque normalmente, recibiremos una respuesta con numero (200, 204, 404, 500, etc) */
//200 OK, devuelve algún contenido (texto, json, archivo)
//204 OK, pero no devuelve nada
//404 Error, not found
//500 Error interno del servidor

app.get('/isAlive', (req, res) => {
    res.status(200).send('El servidor está en linea')
})

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)