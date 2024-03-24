const express = require('express')

const app = express()
const PORT = 3000

// ROUTING

app.get('/', (req, res) => { //http://localhost:3000
    res.send('Hello World')
})

app.get('/about', (req, res) => { //http://localhost:3000/about
    res.send('About')
})

app.get('/weather', (req, res) => { //http://localhost:3000/weather
    res.send('The current weather is Nice')
})

/* 
Cuando ponemos una ruta que no existe, recorrerá todas las rutas y al ver
que no existe la que hemos solicitado, accederá a la siguiente funcion:  
*/
app.use((req,res) =>{
    //* res.send('No se encontró tu página') 
    /* 
    Responde con un código de error 200, este error indica que todo fue bien en el servidor
    Y ha respondido correctamente sin errores. 
    */
   //Para que en lugar de devolver error 200, devuelva 404, le encadenamos el status 404
    res.status(404).send('No se encontró tu página')
})
/* En caso de no tener esta función, devolvería un error 404 cannot get /NombreQueHayamosPuesto el cual indica que no ha encontrado nada.*/

app.listen(PORT)
console.log(`Server on port ${PORT}`)