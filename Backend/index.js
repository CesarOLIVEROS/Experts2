// ACA SE USAN METODOS DE TIPO HTTP CONSULTARLOS SIEMPRE
// Importe la libreria de express
const { response } = require('express');
const express = require('express');
const app = express();
// creo constante para el puerto de ejecucion de node.js
const port = 3000;
// para usar una forma de publicar que es estatico con express todo lo que no se desea mover
app.use(express.static('public'));
app.use(express.json());
// Se trae el modulo de crudExper.. para obtener lo que se exporta de ese modulo
const dbE = require('./src/db/crudExperts.js');
const dbU = require('./src/db/crudUsers.js');
// importar modulo de axios
const axios = require('axios').default;

// aca se llama la promesa que se dio en el modulo de crud Experts
// db.getExperts();

app.get('/', function (req, res) {
    res.send('Hello World my dad')
});

//-----------------METODOS PARA CRUD DE EXPERTS EN FIREBASE----------------

// metodo para traer todos los expertos en un array
app.get('/get-experts', (req, res) => {
    dbE.getExperts(function (arrayExperts) {
        res.send(arrayExperts);
    });
})

// metodo para traer solo un experto pasando el id.
app.get('/get-expert/:id', (req, res) => {
    const eid = req.params.id;
    dbE.getExpert(eid, function (doc) {
        res.send(doc);
    });
})

//-------METODO PARA AGREGAR UN USUARIO Y USAR API EXTERNA PARA TRAER EL IDIOMA DEL EXPERTO----
app.post('/add-expert', (req, res) => {
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

app.put('/update-expert-totally/:id', (req, res) => {
    const eid = req.params.id;
    const expert = req.body;

    dbE.updateExpertTotally(eid, expert, function (response) {
        res.send(response);
    });
})

//ACTUALIZAR PARCIALMENTE UN DOC DE EXPERT metodo PATCH para modificar parcial
app.patch('/update-expert-partial/:id', (req, res) => {
    const eid = req.params.id;
    const expert = req.body;

    dbE.updateExpertPartial(eid, expert, function (response) {
        res.send(response);
    });
})

// ELIMINAR EXPERT O REGISTRO DE DOC EN FIREBASE
app.delete('/delete-expert/:id', (req, res) => {
    const eid = req.params.id;
    dbE.deleteExpert(eid, function (response) {
        res.send(response);
    })
})

// METODO PARA BUSCAR EXPERT POR UBICACION

app.get('/expert/search/:Location', (req, res)=>{
    const Location = req.params.Location;
    dbE.searchExpert(Location, function(arrayExperts){
        res.send(arrayExperts);
    })
})


//-----------------METODOS PARA CRUD DE USER EN FIREBASE----------------

// metodo para traer solo un user pasando el id.
app.get('/users/:id', (req, res) => {
    const uid = req.params.id;
    dbU.getUser(uid, function (doc) {
        res.send(doc);
    });
})

// Metodo de agregar un user
// Cuando estos metodos reciben algo viene del req y se declara antes del .then(())
// Se le pasa creando la variable y pasando el req.body por que se pasa en el cuerpo de esta funcion.
app.post('/add-user', (req, res) => {
    const user = req.body;
    // luego de obtener el cuerpo del req se pasa por parametr.
    // tambien se le pasa una respuesta al requerimiento
    dbU.addusers(user, function (response) {
        res.send(response);
    });
})

//ACTUALIZAR PARCIALMENTE UN DOC DE USERS metodo PATCH para modificar parcial
app.patch('/update-user-partial/:id', (req, res) => {
    const uid = req.params.id;
    const user = req.body;

    dbU.updateUserPartial(uid, user, function (response) {
        res.send(response);
    });
})


// Actualizacion total del documento no reemplanzando datos se usara el metodo HTTP PUT

app.put('/update-user-totally/:id', (req, res) => {
    const uid = req.params.id;
    const user = req.body;

    dbU.updateUserTotally(uid, user, function (response) {
        res.send(response);
    });
})

// ELIMINAR USER O REGISTRO DE DOC EN FIREBASE
app.delete('/delete-user/:id', (req, res) => {
    const uid = req.params.id;
    dbU.deleteUsers(uid, function (response) {
        res.send(response);
    })
})

app.listen(port, () => {
    console.log('my port is listening ' + port);
});