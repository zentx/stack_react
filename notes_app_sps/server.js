const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

{/* Habilita todas las solicitudes CORS  */}
app.use(cors());
app.use(express.json());

{/* Obtiene cadena de conexión a partir de variables de entorno  */}
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
{/* Una vez que la conexión este lista mostrara mensaje de conexion correcta */}
connection.once('open', () => {
    console.log("Se ha establecido una conexion correcta con la base de datos MongoDB");
})

const notesRouter = require('./routes/notes');
const usersRouter = require('./routes/users');

{/* Rutas de la API */}
app.use('/servicio/api_notes_app/notes', notesRouter);
app.use('/servicio/api_notes_app/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});