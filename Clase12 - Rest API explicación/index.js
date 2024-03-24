/* 
Vamos a crear una aplicación que es muy común en el desarrollo backend.
Una Rest API. Esto no es más que un servidor que tiene ciertas url y nos va a permitir procesar datos.

Vamos a hacer que el servidor guarde los datos en un array y cada vez que guardemos, eliminemos o actualicemos algo,
el servidor va a buscar la información en el array.

Esto es conocido como CRUD (Create, Read, Update, Delete).

Para ello, vamos a utilizar las rutas y métodos a través de los métodos HTTP.

vamos a crear un solo array que va a tener una lista de productos.
Cada producto puede tener un id, titulo, nombre, precio, etc

el servidor va a tener una ruta get /products y otra post /products para añadir y mostrar todos los productos.
va a tener otra ruta get /products/:id para mostrar un producto en particular.
va a tener una ruta put  products/:id para actualizar un producto en particular.
va a tener una ruta delete products/:id para eliminar un producto en particular.

Todas estas rutas tienen una recomendación de como crearlas que se llama representational state transfer (REST).
El servidor es un intermediario entre los datos y la aplicación frontend, a este concepto se le llama API (Application Programming Interface).
*/

//* Empezaremos a crear nuestra REST API en una nueva carpeta llamada express-RestAPI

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
11- en server.js, importamos express y morgan ( const express = require('express') y const morgan = require('morgan') 
12- creamos una instancia de express y la guardamos en una constante llamada app ( const app = express() )
13- utilizamos el middleware morgan con el método dev ( app.use(morgan('dev')) )
14- creamos una constante llamada PORT y le asignamos el valor 3000 ( const PORT = 3000 )
15- utilizamos el método listen de la instancia de express para iniciar el servidor en el puerto 3000 
( app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) }) )
16- en la terminal, verificamos que el servidor está corriendo
17- en el navegador, verificamos que el servidor está corriendo
18- si todo ha ido bien, desde thunder client o postman, hacemos una petición get a la url http://localhost:3000
(deberíamos recibir un mensaje de error 404 not found, ya que no hemos creado ninguna ruta)
19- creamos las rutas get, post, put y delete para la url /products
20- creamos una ruta get para la url /products/:id
21- vamos a probar las rutas con thunder client o postman
*/