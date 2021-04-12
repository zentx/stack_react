const mongoose = require('mongoose');

const Schema = mongoose.Schema;

{/* Modelo para Usuarios en base de datos, contiene ssolamente el nombre de usuario con los
atributos de que debe ser unico el nombre de usuario, con longitud mininma de 3 caracteres
ademas de eliminar espacios blancos al inicio como al final de la cadena */}
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;