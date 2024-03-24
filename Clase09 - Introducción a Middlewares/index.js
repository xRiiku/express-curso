/* 
Antes de que se ejecute la ruta, se ejecuta el middleware/función.
Si el cliente hace una petición al servidor, primero pasará por la función del middleware y luego pasará a la ruta.
*/

const express = require('express');
const app = express();  

app.use(showInfo)// se ejecuta el middleware en todas las rutas

// Middleware
function showInfo(req, res, next) {
    console.log(`Route: ${req.url} Método: ${req.method}`) //Esto mostrará por consola la ruta que el cliente está pidiendo y qué método está usando
    next() //next() es para que pase a la siguiente función
}

//Ruta
app.get('/profile', (req, res) => {
    res.send('Profile page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)