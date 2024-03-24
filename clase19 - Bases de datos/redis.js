//Instalamos el paquete de Redis
// * npm install redis

const express = require('express');
const redis = require('redis');

// Configuración de Express
const app = express();
const port = 3000;

// Crear una instancia del cliente Redis
const client = redis.createClient();

// Manejador de errores para el cliente Redis
client.on('error', (err) => {
    console.error('Error de conexión Redis:', err);
});

// Ruta de ejemplo para almacenar y recuperar datos en Redis
app.get('/redis/:key', (req, res) => {
    const { key } = req.params;

    // Almacenar un valor en Redis
    client.set(key, 'valor_de_prueba', (err, reply) => {
        if (err) {
            console.error('Error al almacenar en Redis:', err);
            return res.status(500).send('Error interno del servidor');
        }

        console.log('Valor almacenado en Redis:', reply);
        // Recuperar el valor almacenado de Redis
        client.get(key, (err, value) => {
            if (err) {
                console.error('Error al recuperar desde Redis:', err);
                return res.status(500).send('Error interno del servidor');
            }

            console.log('Valor recuperado de Redis:', value);
            res.send(`El valor de ${key} en Redis es: ${value}`);
        });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express iniciado en http://localhost:${port}`);
});