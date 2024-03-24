const express = require('express');
const morgan = require('morgan');
const app = express();
let products = [
    {
        id: 1,
        name: 'Ordenador portátil',
        price: 1500
    },
    {
        id: 2,
        name: 'Play Station 5',
        price: 500
    },
    {
        id: 3,
        name: 'Xbox Series X',
        price: 500
    },
    {
        id: 4,
        name: 'Iphone 12',
        price: 1000
    }
]
app.use(morgan('dev'));
app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products)
});

app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct);
    res.send(newProduct)
});

app.put('/products/:id', (req, res) => {
    const newData = req.body;
    const productFound = products.find((product) => product.id === parseInt(req.params.id));

    if (!productFound) res.status(404).json({error: 'Producto no encontrado'})

    products = product.map((product) => {
        product.id === parseInt(req.params.id) ? {...product, ...newData} : product
    });

    res.json('Producto actualizado con éxito')
});

app.delete('/products/:id', (req, res) => {
    const productFound = products.find((product) => product.id === parseInt(req.params.id));

    if (!productFound) res.status(404).json({error: 'Producto no encontrado'})

    products = products.filter((product) => product.id !== parseInt(req.params.id));
        res.sendStatus(204)

        res.json('Producto eliminado con éxito')
});

app.get('/products/:id', (req, res) => {
    const productFound = products.find((product) => product.id !== parseInt(req.params.id));

    if (!productFound) res.status(404).json({error: 'Producto no encontrado'})
    
    //else
    res.json(productFound)
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});