/* 
En esta sección vamos a aprender como el servidor puede responder o hacer funcionar diferentes rutas.

vamos a enviar una peticion get a la url /products y cuando el servidor reciba esta petición,
nos va a responder con el array de productos que tenga en ese momento.
Con esto ya sabremos cual es el request y cual es el response. (req, res)

para mostrar la información de los productos, utilizaremos el middleware res.json() que nos permite enviar una respuesta en formato json.
    * const products = [];
    * app.get('/products', (req, res) => {
        * res.json(products)
    * })

vamos a thunder client y vamos a hacer una petición get a la url http://localhost:3000/products
y veremos como nos devuelve un array vacío. []

añadimos diferentes productos al array, creando un array de objetos con diferentes productos.

    * const products = [
        * {
            * id: 1,
            * name: 'Ordenador portátil',
            * price: 1500
        * },
        * {
            * id: 2,
            * name: 'Play Station 5',
            * price: 500
        * },
        * {
            * id: 3,
            * name: 'Xbox Series X',
            * price: 500
        * },
        * {
            * id: 4,
            * name: 'Iphone 12',
            * price: 1000
        * }
    * ]

y comprobamos de nuevo en thunder client que al hacer una petición get a la url http://localhost:3000/products nos devuelve el array de productos.

otra cosa que podemos hacer es enviar una petición post a la url /products pero el servidor va a esperar que yo le mande unos datos.
Le vamos a mandar los datos en formato json, por lo que en thunder client seleccionamos el método post 
y en el body seleccionamos json y añadimos los datos del producto que queremos añadir.

    * {
        * "name": "mouse",
        * "price": 20
    * }
en este caso no añadimos el id, ya que el id lo vamos a generar automáticamente en el servidor.

al ser un json que mandamos desde el body, tenemos que utilizar dobles comillas. 
Y para ver que el servidor recibe los datos, lo hacemos con un console.log(req.body)

La consola nos muestra undefined, ya que no hemos configurado el servidor para que pueda recibir datos en formato json.
para configurar el servidor para que pueda recibir datos en formato json, utilizamos el middleware app.use(express.json())

en el metodo post, añadimos el producto al array de productos con products.push(req.body) pero antes, necesitamos que el objeto que mandamos tenga un id.
para ello utilizaremos 
* (...req.body, id : products.length + 1) 
para que el id sea el número de productos que hay en el array + 1.
    * app.post('/products', (req, res) => {
    * const newProduct = {...req.body, id: products.length + 1}
    * products.push(newProduct);
    * res.send(newProduct)
* });

ahora vamos a comprobar el método get en la ruta /products/:id para obtener un producto en particular.
para ello, añadimos un nuevo endpoint con el método get y la ruta /products/:id
los arrays, tienen un método find que nos permite buscar un elemento en el array que cumpla una condición.
en este caso, queremos buscar el producto que tenga el id que le pasamos por parámetro.
    * app.get('/products/:id', (req, res) => {
        * const productFound = products.find(function(product) {
            * return product.id === parseInt(req.params.id)
        * });
        * res.json(productFound)
    * });

aunque no encuentre ningún producto, el servidor nos responderá con un status 200 OK.
para evitar esto, podemos añadir una condición para que si no encuentra el producto, nos devuelva un status 404 not found.

    *app.get('/products/:id', (req, res) => {
        *const productFound = products.find((product) => product.id === parseInt(req.params.id));

        *if (!productFound) res.status(404).json({error: 'Producto no encontrado'})
        
        else
        *res.json(productFound)
    *});

*/