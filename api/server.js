const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ruta para procesar la solicitud POST del formulario
app.post('/api/empleado', (req, res) => {
  const formData = req.body; // Datos enviados desde el formulario
  console.log('Datos del formulario:', formData);

  // Aquí puedes realizar cualquier lógica de procesamiento necesario
  // (por ejemplo, guardar los datos en una base de datos, etc.)

  // Responder al cliente con un mensaje de éxito
  res.json({ message: '¡Datos recibidos con éxito!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
