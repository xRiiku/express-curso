/* 
Cuando el cliente nos envía un objeto JSON, este objeto se envía en el cuerpo de la petición (request body). 
endpoint /user
Header json
Body {username: 'pepe', password: '1234'}
*/

const express = require('express')

const app = express()


//Estas funciones siempre deben estar antes de las rutas, ya que si no, no se ejecutarán.

app.use(express.text()) //con esto, veremos el hello world que pasamos por text en thunder client con el método post
app.use(express.json()) //con esto, veremos el objeto que pasamos por json en thunder client con el método post
app.use(express.urlencoded({extended: false})) 
//con esto, veremos el objeto que pasamos por un formulario desde el cliente. thunder client form-encoded con el método post

app.post('/user', (req, res) => {
    console.log(req.body) //devolverá undefined ya que no puede entender lo que hay en el body
    res.send('Nuevo usuario creado')
})

/* 
Cuando se envían los datos, se añaden unas cabeceras llamadas Headers, que son metadatos que se envían junto con la petición.
Estos headers indican el tipo de contenido que se está enviando, el tamaño, el tipo de petición, etc.
*/

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)