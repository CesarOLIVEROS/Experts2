// ACA SE USAN METODOS DE TIPO HTTP CONSULTARLOS SIEMPRE

const express = require('express');
// Se trae el modulo de crudExper.. para obtener lo que se exporta de ese modulo
const dbU = require('../src/db/crudUsers.js');

// CREAR EL ENRUTADOR PARA USAR EL PROGRAMA
const router = express.Router();


//-----------------METODOS PARA CRUD DE USER EN FIREBASE----------------

// metodo para traer solo un user pasando el id.
router.get('/:id', (req, res) => {
    const uid = req.params.id;
    dbU.getUser(uid, function (doc) {
        res.send(doc);
    });
})

// Metodo de agregar un user
// Cuando estos metodos reciben algo viene del req y se declara antes del .then(())
// Se le pasa creando la variable y pasando el req.body por que se pasa en el cuerpo de esta funcion.
router.post('/', (req, res) => {
    const user = req.body;
    // luego de obtener el cuerpo del req se pasa por parametr.
    // tambien se le pasa una respuesta al requerimiento
    dbU.addusers(user, function (response) {
        res.send(response);
    });
})

//ACTUALIZAR PARCIALMENTE UN DOC DE USERS metodo PATCH para modificar parcial
router.patch('/:id', (req, res) => {
    const uid = req.params.id;
    const user = req.body;

    dbU.updateUserPartial(uid, user, function (response) {
        res.send(response);
    });
})


// Actualizacion total del documento no reemplanzando datos se usara el metodo HTTP PUT

router.put('/:id', (req, res) => {
    const uid = req.params.id;
    const user = req.body;

    dbU.updateUserTotally(uid, user, function (response) {
        res.send(response);
    });
})

// ELIMINAR USER O REGISTRO DE DOC EN FIREBASE
router.delete('/:id', (req, res) => {
    const uid = req.params.id;
    dbU.deleteUsers(uid, function (response) {
        res.send(response);
    })
})

// como es un solo exports no se debe expresar como JSON
module.exports= router;