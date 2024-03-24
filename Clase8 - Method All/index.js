/* 
En clases anteriores, hemos visto que con get, put, post, delete, etc, realizábamos peticiones http.
a parte de estos métodos, existe un método llamado all,que no se utiliza mucho, 
pero que nos permite realizar peticiones con cualquier método http.
*/

const express = require('express')

const app = express()

/* all lo que indica, es que esta ruta funciona con cualquier método (get, post, put, delete, etc)*/
app.all('/info', (req, res) => {
    res.send('Server info')
})

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)