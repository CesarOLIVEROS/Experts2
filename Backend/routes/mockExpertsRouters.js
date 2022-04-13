// ACA SE USAN METODOS DE TIPO HTTP CONSULTARLOS SIEMPRE
const express = require('express');
const router = express.Router();

// Al usar este mock no traemos los datos desde la DB si no 
// los sacamos desde un JSON para que sean estos datos sinteticos los que se muestren al Backend
// traemos el archivo a usar
var db = require('./mockDBExperts.json');


//-----------------METODOS PARA CRUD DE EXPERTS EN FIREBASE----------------

// metodo para traer todos los expertos en un array por mock server. 
router.get('/', (req, res) => {
    res.send(db);
})

// metodo para traer solo un experto pasando el id.
router.get('/:id', (req, res) => {
    // obtener el id enviado en la consulta
    const eid = req.params.id;
    // crear el 
    var expert = db.filter(function(obj){
        return obj.id === eid;
    })
    res.send(expert[0])
})


//-------METODO PARA AGREGAR UN USUARIO Y USAR API EXTERNA PARA TRAER EL IDIOMA DEL EXPERTO----
router.post('/', (req, res) => {
   // Requiero el body del objeto aca
    const expert = req.body;
    // metodo basico para crear un id de experto
     expert.id = String(db.length +1);
    // al tamaño del arreglo que ya tengo le agrego 1 para aumentar la posicion del objeto y se cree un id consecutivo
    // recordar que el dato del id se debe traer en numero o parsearlo
   // se trae en numero para la operacion pero se debe manejar como string si asi esta en la db
    // expert.id = String(Number(db[db.length-1].id) +1);
   // le agrego a la db el experto con los datos que traia mas el nuevo id
   db.push(expert);
   res.send('Sucess to create Expert');
    
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
    // Traemos los parametros necesarios para buscar y reemplazar el dato en la db o archivo
    const eid = req.params.id;
    const expert = req.body;
    // le asignamos a expert el eid que trae el req 
    expert.id = eid;
    // recorremos el arreglo de documentos y si existe el id buscado le asignamos lo que trae el expert en el 
    // body del json.
    for (let i = 0; i < db.length; i++) {
        if(db[i].id === eid){
            db[i] = expert;
            break;
        }
    }
    res.send('Success to update experts');
})

//ACTUALIZAR PARCIALMENTE UN DOC DE EXPERT metodo PATCH para modificar parcial
router.patch('/:id', (req, res) => {
    
})

// ELIMINAR EXPERT O REGISTRO DE DOC EN FIREBASE
router.delete('/:id', (req, res) => {
    // extraer datos del id
    const eid = req.params.id;
    // Creamos un arreglo nuevo a partir de los elementos que no sean iguales a los que queremos eliminar
    var arreglo = [];
    // creamos nueva variable para que lleve el consecutivo de la cantidad de elementos del arreglo
    var cont = 1;
    // Recorremos el archivo con los datos y creamos el element para ir agregandolo
    for (let i = 0; i < db.length; i++) {
        var element = db[i];
        // Validamos si el elemento que estamos recorriendo es diferente al que se desea eliminar para agregarlo al nuevo arreglo

        if(element.id != eid){
            // asignamos el nuevo id en cada iteraccion del for que sea asignado al nuevo arreglo
            element.id = String(cont);
            // aumentamos contador para cuando pase por el i se valla aumentando solo 
            cont++;
            // agregamos el elemento ya como tal a el arreglo nuevo para luego actualizar el archivo desde donde lo traiamos    
            arreglo.push(element);
        }

    }
    db = arreglo;
    res.send("Success to delete Expert");
})

// METODO PARA BUSCAR EXPERT POR UBICACION

router.get('/search/:Location', (req, res)=>{
   
   const Location = req.params.Location;

   var experts = db.filter(function(obj){
       return obj.Location === Location;
   })
   res.send(experts)
})


module.exports = router;
