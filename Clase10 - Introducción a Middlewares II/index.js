/* 
En la clase anterior, accedimos a la ruta /profile y /about, sin necesidad de estar logueados.
En esta clase, vamos a crear un middleware que nos permita verificar si el usuario está logueado o no.
Si está logueado, podrá acceder a la ruta /dashboard sino, será le indicará que no tiene permisos.

Si no tiene permisos, el middleware no permitirá que el usuario acceda a la ruta, devolviendo al navegador un mensaje de error.
Por lo tanto, no llegará a la ruta que el usuario está pidiendo, porque el middleware se ejecutará antes de que llegue a la ruta,
haciendo de filtro
*/

const express = require('express');
const app = express();  

/* 
Podemos apilar middleware, es decir, que podemos tener varios middleware en una misma ruta.
Por ejemplo, si queremos que el usuario tenga que loguearse y después verificar que lo haya hecho correctamente,
utilizaremos dos middleware, uno para verificar que esté logueado y otro para verificar que lo haya hecho correctamente.

middleware 1 == logger -> middleware 2= isAuthenticated -> ruta= /dashboard

*/

// Este middleware sería el logger
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Método: ${req.method}`) //Esto mostrará por consola la ruta que el cliente está pidiendo y qué método está usando
    next() //next() es para que pase a la siguiente función
})

//ruta antes del middleware para que cualquiera pueda acceder
app.get('/profile', (req, res) => {
    res.send('profile page')
})

//Este middleware sería el isAuthenticated
/* 
En este colocaremos un condicional que va a comprobar que llegue un query llamado login y como valor tiene que tener una especie de texto

si escribimos en el navegador http://localhost:3000/dashboard?login=drc89.sxm@gmail.com debería mostrarnos la página dashboard
Si no escribimos nada o escribimos un valor distinto, nos mostrará un mensaje de error
*/
app.use((req, res, next) => {
    if (req.query.login === 'drc89.sxm@gmail.com') {
        next()
    } else {
        res.send('No autorizado')
    }
    next()
})

//Ruta
app.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})

/* 
Si queremos que el middleware se ejecute en todas las rutas, lo colocamos antes de las rutas.
Sino, las rutas que estén antes del middleware, no se verán afectadas por el middleware.

por ejemplo, si colocamos la ruta /profile antes del middleware, cualquiera podrá acceder a esa ruta sin necesidad de estar logueado
*/

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)