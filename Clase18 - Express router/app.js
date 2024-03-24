/* 
Hasta el momento, hemos creado un unico archivo que contiene todas las rutas de nuestra aplicacion. 
Sin embargo, a medida que nuestra aplicacion crece, este archivo se vuelve mas y mas grande y dificil de mantener. 
Para solucionar esto, Express nos permite crear un router, que es un objeto que nos permite definir rutas de manera modular.

Para hacer esto, dividiremos la aplicacion en diferentes archivos y al final 
unirlos todos en una sola aplicacion, eso es lo que conocemos como router.

Vamos a la carpeta de la aplicacion (express-API) y creamos una nueva carpeta llamada routes.
En la cual guardaremos solo rutas que express pueda visitar luego.
*/

/* Para poder utilizar las rutas, debemos importarlas en el archivo principal, */
const express = require("express");
const path = require("path");
const apiRouter = require("./routes/api_router.js");//Importamos el archivo api_router.js

const app = express();

const staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));

app.use("/api", apiRouter); //Indicamos que las rutas que empiecen con /api hacen referencia a las rutas definidas en api_router.js

app.listen(3000);
console.log("server on port 3000");