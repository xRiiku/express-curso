//Instalamos el paquete de MongoDB
// * npm install mongoose

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/nombre_de_la_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión a MongoDB establecida');
})
.catch(err => {
  console.error('Error al conectar a MongoDB:', err.message);
});

// Definir un esquema y modelo de ejemplo
const Schema = mongoose.Schema;
const ejemploSchema = new Schema({
  nombre: String,
  edad: Number
});

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema);

// Ruta para agregar un nuevo ejemplo a la base de datos
app.post('/ejemplos', async (req, res) => {
  try {
    const nuevoEjemplo = new Ejemplo(req.body);
    await nuevoEjemplo.save();
    res.status(201).json(nuevoEjemplo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Escuchar en un puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
