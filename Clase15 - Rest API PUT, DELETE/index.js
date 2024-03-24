/* 
Para eliminar un producto, primero tenemos que hacer una comprobación de si ese producto existe o no.

Para ello, en el metodo delete, utilizaremos el metodo filter para filtrar los productos que no coincidan con el id que queremos eliminar.
    
    * products.filter((product) => product.id !== parseInt(req.params.id));
    Si es distinto (!==) se van a conservar todos los elementos que no coincidan con el id que queremos eliminar.

    Actualizaremos directamente el arreglo, asignando el resultado de la operación a la variable products.

    * products = products.filter((product) => product.id !== parseInt(req.params.id));
    de esta manera, el array products se actualiza con los productos que no coinciden con el id que queremos eliminar.

    Finalmente, enviamos un status 204, que indica que la operación se ha realizado con éxito, pero no hay contenido que enviar.

    * res.sendStatus(204)

    Si el producto no existe, devolveremos un status 404 con un mensaje de error.

    * if (!productFound) res.status(404).json({error: 'Producto no encontrado'})

    Para actualizar un producto, vamos a utilizar el elemento map, que nos permite recorrer el array y modificar 
    los elementos que coincidan con el id que queremos actualizar.

    * products = products.map((product) => {

        * if (product.id === parseInt(req.params.id)) ? {...product, ...req.body} : product

        con ...product, copiamos todos los atributos del producto, y con ...req.body, copiamos los atributos que
        queremos actualizar. De esta manera, si el id coincide, se actualizan los atributos que queremos modificar.
        
    })

*/