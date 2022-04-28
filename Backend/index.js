// Importaremos la funcion del index de Routes para ejecutar el programa y que este nos enrute 
// solo se debera pasar la variable a usar y la ruta a la carpeta sin necesidad de especificar el archivo.
const routersAPI = require('./routes');
// Importe la libreria de express
const express = require('express');
var cors = require('cors');
const app = express();
// creo constante para el puerto de ejecucion de node.js
const port = 5000;
// para usar una forma de publicar que es estatico con express todo lo que no se desea mover
app.use(cors());

app.use(express.static('public'));
app.use(express.json());

// Pasaremos al enrutador ed routersAPI la app que se usa aca con express
 routersAPI(app);



app.listen(port, () => {
    console.log('my port is listening ' + port);
});