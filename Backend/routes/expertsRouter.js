// ACA SE USAN METODOS DE TIPO HTTP CONSULTARLOS SIEMPRE

const express = require('express');
// Traemos la conexion a la DB
const dbE = require('../src/db/crudExperts.js');
// importar modulo de axios para consumir APIs externas
const axios = require('axios').default;
const router = express.Router();


//-----------------METODOS PARA CRUD DE EXPERTS EN FIREBASE----------------

// metodo para traer todos los expertos en un array
router.get('/', (req, res) => {
    dbE.getExperts(function (arrayExperts) {
        res.send(arrayExperts);
    });
})

// metodo para traer solo un experto pasando el id.
router.get('/:id', (req, res) => {
    const eid = req.params.id;
    dbE.getExpert(eid, function (doc) {
        res.send(doc);
    });
})

//-------METODO PARA AGREGAR UN USUARIO Y USAR API EXTERNA PARA TRAER EL IDIOMA DEL EXPERTO----
router.post('/', (req, res) => {
    const expert = req.body;
    // con variable obtenemos del cuerpo de la peticion el pais
    const country = expert.Location;
    // traemos de axios el metodo GET y le pasamos direccion de la API externa y le sumamos la variable que estemos buscando
    // en este caso pasamos pais para luego en el json data buscar el lenguaje de ese pais.
    axios.get('https://restcountries.com/v3.1/name/' + country)
        .then(function (response) {
            // luego de traer la respuesta le agrego al experto o al object el dato a travez de una variable
            expert.languages = response.data[0].languages;
        })
        .catch(function (error) {
            // en caso de error se puede manejar con las convenciones de numeros desde el 100 al 500
            res.status(400).send(error);
        })
        // La consulta a la API debe hacerse con el nombre de la data en ingles
        .then(function () {
            // esta es la promesa que siempre se ejecuta y se enviaria para la promesa en la base de datos
            dbE.addExpert(expert, function (response) {
                // este callback llamaria al callback de crudExpert y podemos darle condicional para 
                // definir que estatus mostrar a esta peticion.
                if(response == 'Success to create a new expert'){
                    // aca el codigo del estatus y la respuesta de el callback de crudExpert
                    res.status(201).send(response);
                }else{
                    // TAMBIEN si llega a este punto se presento un error en la peticion del usuario
                    res.status(400).send(response);
                }
             });
        });
    // luego de obtener el cuerpo del req se pasa por parametr.
    // tambien se le pasa una respuesta al requerimiento
     
})

// Metodo de agregar un expert
// Cuando estos metodos reciben algo viene del req y se declara antes del .then(())
// Se le pasa creando la variable y pasando el req.body por que se pasa en el cuerpo de esta funcion.
/*app.post('/add-expert', (req, res) => {
    const expert = req.body;
    // luego de obtener el cuerpo del req se pasa por parametr.
    // tambien se le pasa una respuesta al requerimiento
    dbE.addExpert(expert, function (response) {
        res.send(response);
    });
})*/

// Actualizacion total del documento no reemplanzando datos se usara el metodo HTTP PUT

router.put('/:id', (req, res) => {
    const eid = req.params.id;
    const expert = req.body;

    dbE.updateExpertTotally(eid, expert, function (response) {
        res.send(response);
    });
})

//ACTUALIZAR PARCIALMENTE UN DOC DE EXPERT metodo PATCH para modificar parcial
router.patch('/:id', (req, res) => {
    const eid = req.params.id;
    const expert = req.body;

    dbE.updateExpertPartial(eid, expert, function (response) {
        res.send(response);
    });
})

// ELIMINAR EXPERT O REGISTRO DE DOC EN FIREBASE
router.delete('/:id', (req, res) => {
    const eid = req.params.id;
    dbE.deleteExpert(eid, function (response) {
        res.send(response);
    })
})

// METODO PARA BUSCAR EXPERT POR UBICACION

router.get('/search/:Location', (req, res)=>{
    const Location = req.params.Location;
    dbE.searchExpert(Location, function(arrayExperts){
        res.send(arrayExperts);
    })
})

module.exports = router;
