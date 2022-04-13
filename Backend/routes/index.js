const routerExpert = require('./expertsRouter.js');
const routerUsers = require('./usersRouter.js');
const routerMockExperts = require('./mockExpertsRouters.js')

// se crea este archivo para añadir a cada archivo su otra ruta correspondiente
// siendo asi esta exportada para que sea consumida por el index principal
// este archivo le enrutara a cada uno de los modulos donde se necesite ir por cada consulta respectiva.
function routersAPI(app){

    // AL HACER ESTE ENRUTAMIENTO SE DEBE SOLO USAR EL experts y si es un parametro especial 
    // se debe agregar asi, dejando ya todas las consultas de user con la palabra users y asi con las demas consultas.

    app.use('/experts', routerExpert);
    app.use('/users', routerUsers);
    app.use('/mock/experts', routerMockExperts);
}

module.exports = routersAPI;