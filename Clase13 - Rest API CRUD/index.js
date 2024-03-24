//* Entramos en nuestra carpeta del proyecto express-RestAPI y realizamos los siguientes pasos.

/* 
1- Crear una nueva carpeta llamada express-RestAPI
2- Abrir la terminal y navegar hasta la carpeta creada
3- Ejecutar el comando npm init -y para inicializar un proyecto de node
4- Ejecutar el comando npm install express para instalar express
5- ejecutar el comando npm install morgan para instalar morgan 
(aquí podemos instalar cualquier otro middleware que necesitemos, como cors, nodemon, jwt, etc)
6- ejecutar el comando npm install nodemon -D para instalar nodemon como dependencia de desarrollo 
(esto nos permitirá reiniciar el servidor de manera automática cada vez que guardemos un cambio)
7- abrimos el archivo package.json y en la sección de scripts, agregamos el siguiente script:
    "start": "nodemon server.js"
8- creamos un archivo llamado server.js
9- iniciamos el servidor con el comando npm start
10- abrimos el navegador y vamos a la url http://localhost:3000
11- en server.js, importamos express y morgan 
    ( const express = require('express') )
    ( const morgan = require('morgan') ) 
12- creamos una instancia de express y la guardamos en una constante llamada app 
    ( const app = express() )
13- utilizamos el middleware morgan con el método dev 
    ( app.use(morgan('dev')) )
14- creamos una constante llamada PORT y le asignamos el valor 3000 
    ( const PORT = 3000 )
15- utilizamos el método listen de la instancia de express para iniciar el servidor en el puerto 3000 
    ( app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) }) )
16- en la terminal, verificamos que el servidor está corriendo
17- en el navegador, verificamos que el servidor está corriendo
18- si todo ha ido bien, desde thunder client o postman, hacemos una petición get a la url http://localhost:3000
(deberíamos recibir un mensaje de error 404 not found, ya que no hemos creado ninguna ruta)
19- creamos las rutas get, post, put y delete para la url /products
    ( app.get('/products', (req, res) => { res.send('Obteniendo productos') }) )
    ( app.post('/products', (req, res) => { res.send('Creando productos') }) )
    ( app.put('/products', (req, res) => { res.send('Actualizando productos') }) )
    ( app.delete('/products', (req, res) => { res.send('Eliminando productos') }) )
20- creamos una ruta get para la url /products/:id
    ( app.get('/products/:id', (req, res) => { res.send('Obteniendo un producto en particular') }) )
21- vamos a probar las rutas con thunder client o postman
*/