// Instalamos el driver de MySQL
// * npm install mysql
//realizamos la conexión a la base de datos
const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'tu_host_mysql',
  user: 'tu_usuario_mysql',
  password: 'tu_contraseña_mysql',
  database: 'tu_base_de_datos_mysql'
});

// Conectar a la base de datos MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Rutas de ejemplo
app.get('/', (req, res) => {
  // Ejemplo de consulta a la base de datos
  connection.query('SELECT * FROM tabla_ejemplo', (error, results, fields) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      return res.status(500).json({ error: 'Error al realizar la consulta' });
    }
    res.json(results);
  });
});

// Puerto en el que escucha el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
