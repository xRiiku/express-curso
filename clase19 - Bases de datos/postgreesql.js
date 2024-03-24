//Instalamos el paquete de PostgreSQL
// * npm install pg

const express = require('express');
const { Pool } = require('pg');

const app = express();

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432, // Puerto predeterminado de PostgreSQL
});

// Ruta de ejemplo para consultar datos desde la base de datos
app.get('/users', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    const users = result.rows;
    client.release(); // Libera el cliente para que pueda ser reutilizado por otros
    res.json(users);
  } catch (err) {
    console.error('Error al consultar usuarios', err);
    res.status(500).json({ error: 'Error al consultar usuarios' });
  }
});

// Configuración del puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});