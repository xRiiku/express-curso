// instalar express ==> npm i express

/* 
--> Modelo cliente servidor para comunicar el frontend con el backend mediante el protocolo HTTP.
--> El cliente hace una petición, y envía datos de petición al servidor (Request) 
--> El servidor responde a esa petición (Response)
*/

/* Diferencia HTTP (nodejs) vs express */

// ----------------- NODE JS -----------------
//* const http = require('http')

/* Para enviar la peticion http debemos leer el archivo html, para ello,  importamos el modulo file system de node*/
//* const fs = require('fs')

//* const server = http.createServer((req, res) => {
    //Con la constante read leemos la ruta del archivo que queremos enviar al frontend
    //* const read = fs.createReadStream('./static/index.html') 
    //* read.pipe(res) //enviamos lo que ha leido, al response

//})
//* const PORT = 3000
//* server.listen(PORT)
//* console.log(`Server on port ${PORT}`)

//iniciamos el servidor escribiendo node index.js

// ----------------- EXPRESS -----------------

const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => { //http://localhost:3000
    res.sendFile('./static/index.html',{ //con esto, enviamos el archivo index.html
        root: __dirname //En express debemos indicar la ruta del directorio inicial para evitar el error.
    })

})

app.listen(PORT)
console.log(`Server on port ${PORT}`)