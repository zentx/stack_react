const router = require('express').Router();
let User = require('../models/user.model');

{/* Solicitudes GET  */}
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

{/* Solicitudes POST con el termino add donde obtiene el username para crear un nuevo user  */}
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('Usuario anadido!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

{/* Solicitud GET para obtener un usuario por medio de ID del objeto creado en MongoDB */}
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

{/* Solicitud DELETE para eliminar un usuario por medio de ID del objeto creado en MongoDB */}
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Usuario eliminada'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;