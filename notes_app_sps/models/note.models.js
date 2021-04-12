const mongoose = require('mongoose');

const Schema = mongoose.Schema;

{/* Modelo para las Notas en base de datos, contiene los datos de usuario, titulo de nota, 
descripcion/contenido y fecha  */}
const noteSchema = new Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
},
{
    timestamps: true,
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;