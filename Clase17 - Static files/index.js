/* 
Hasta ahora, hemos aprendido que con express podemos contestar a una petición con archivos con el método sendFile.
Estos archivos pueden ser HTML, CSS, JS, imágenes, etc.

Pero normalmente, tendremos que enviar varios archivos html, css, js, imágenes, etc. y no queremos estar enviando uno por uno.
Para eso, utilizamos middlewares que nos permiten servir archivos estáticos.

Cuando nosotros queremos enviar la carpeta static, en lugar de enviar archivo por archivo,
le podemos decir a express que envíe todo lo que esté en esa carpeta.

Para eso, utilizamos:
    * app.use(express.static('./public'))

al hacer público el contenido de los archivos de la carpeta static, podemos acceder a ellos desde el navegador.
si escribimos localhost:3000/styles.css, nos mostrará el contenido del archivo styles.css.
si escribimos localhost:3000/index.js, nos mostrará el contenido del archivo index.js.

cualquier archivo que coloquemos en la carpeta static, será accesible desde el navegador.

si creamos una ruta que contenga el mismo nombre que un archivo en la carpeta static, el navegador
mostrará el contenido del archivo en lugar de la respuesta de la ruta.

por ejemplo, si creamos una ruta 
    * app.get('/styles.css', (req, res) => res.send('Hola Mundo')),

y tenemos un archivo styles.css en la carpeta static, al acceder a localhost:3000/styles.css,
nos mostrará el contenido del archivo styles.css en lugar de 'Hola Mundo'.

si necesitamos que podamos acceder ambas cosas, podemos hacer que todo el contenido al que estamos accediendo
desde la carpeta ./public solo funcione cuando visitamos la ruta /public.

para eso, podemos hacer:
    * app.use('/public', express.static('./public'))
de esta manera, si queremos acceder a los archivos de la carpeta public, debemos escribir localhost:3000/public/nombre_archivo.
y si accedemos a la ruta /public, nos mostrará el contenido de la carpeta public.

pero si visitamos la ruta localhost:3000/styles.css sin poner la ruta /public, nos mostrará el mensaje 'Hola Mundo'.

por lo general, las rutas de los archivos estáticos y públicos se colocan al final del código, después de todas las rutas.
*/