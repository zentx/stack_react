const router = require('express').Router();
let Note = require('../models/note.models');

{/* Solicitudes GET  */}
router.route('/').get((req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: ' + err));
});

{/* Solicitudes POST con el termino add donde obtiene datos en su formato y los guarda a DB  */}
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newNote = new Note({
        username,
        title,
        description,
        date,
    });
    
    newNote.save()
        .then(() => res.json('Nota anadida!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

{/* Solicitud GET para obtener una nota por medio de ID del objeto creado en MongoDB */}
router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(400).json('Error: ' + err));
});


{/* Solicitud DELETE para eliminar una nota por medio de ID del objeto creado en MongoDB */}
router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json('Nota eliminada'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;