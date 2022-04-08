// Importe la libreria de express
const express = require('express');
const app = express();
// creo constante para el puerto de ejecucion de node.js
const port = 3000;
// para usar una forma de publicar que es estatico con express todo lo que no se desea mover
app.use(express.static('public'));
// Se trae el modulo de crudExper.. para obtener lo que se exporta de ese modulo
const db = require('./src/db/crudExperts.js');

// aca se llama la promesa que se dio en el modulo de crud Experts
// db.getExperts();

app.get('/', function (req, res) {
    res.send('Hello World my dad')
  });

  // metodo para traer todos los expertos en un array
app.get('/get-experts', (req, res)=>{
    db.getExperts(function(arrayExperts){
        res.send(arrayExperts);
    });
})

// metodo para traer solo un experto pasando el id.
app.get('/get-expert/:id', (req, res)=>{
    const eid = req.params.id;
    db.getExpert(eid, function(doc){
        res.send(doc);
    });
})


app.listen(port, ()=>{
    console.log('my port is listening ' + port);
});