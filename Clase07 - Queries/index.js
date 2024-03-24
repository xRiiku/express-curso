/* 
Adicionalmente al parámetro, podemos colocarle en la URL un ? a esto se le llama query/consulta, que es información
que el navegador le manda al backend para realizar una consulta. 
*/

const express = require('express')

const app = express()

/* En la URL escribimos por ejemplo: localhost:3000/hello/xriku?nombre=dani 
Podemos obtener varias queries utilizando &, por ejemplo: localhost:3000/hello/xriku?user=xriku&nombre=dani*/
app.get('/hello/:username', (req, res) => {
    console.log(req.query) /* Todo parámetro que recibimos en los params, es un String */
    res.send(`Username: ${req.query.user} Name: ${req.query.nombre}`)
})

/* Las queries son muy útiles para la paginación, ya que por ejemplo, en la API rick and morty si visitamos
https://rickandmortyapi.com/api/character nos muestra un JSON de 826 personajes, pero solo muestra 20 por página.
para pasar a la siguiente página, podríamos poner un botón en el frontend (para el usuario) que al cambiar de página,
realice una query con el formato:
https://rickandmortyapi.com/api/character?page=2
https://rickandmortyapi.com/api/character?page=3
etc */

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)