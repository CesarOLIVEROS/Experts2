const db = require('./firebase.js');


// funcion para traer un documento en especifico
function getUser(uid, callback){
    return db.collection("users").doc(uid).get()
    .then((refDoc)=>{
        if(refDoc.exists){
            // el refDoc ya contiene todo solo lo devuelvo con el callback y .data
            callback(refDoc.data());
        }else{

            callback('No such data');
        }
    })
    .catch(Error=>{
        callback('Error to get user', Error);
    })
}

// la funcion para agregar recibe un objeto que puede ser de cualquier forma en esta ocasion lo llamamos expert y le pasamos el callback que se llamara en index.js
function addusers(user, callback){
    // solo pasamos el objeto y añadimos con el add
    return db.collection('users').add(user)
    .then(() => {
        callback('Success to create a new user');
    })
    .catch((err)=>{
        callback('Error to create user ', err)
    })
}

// funcion para actualizar los datos del user
function updateUserTotally(uid, user, callback){
    return db.collection('users').doc(uid).set(user)
    .then(()=>{
        callback('Success to update User')

    })
    .catch((error)=>{
        callback('error to update User', error)
    })
}


// ELIMINAR EL USER DE LA DB 

function deleteUsers(uid, callback){
    return db.collection('users').doc(uid).delete()
    .then(()=>{
        callback('Success delete User');

    })
    .catch((error)=>{
        callback('Error to Delete User en CRUD', error)
    })
}

// ACTUALIZAR USER DE MANERA PARCIAL ojo con los nombres de los atributos dentro de la base de datos.

function updateUserPartial(uid, user, callback){
    return db.collection('users').doc(uid).update(user)
    .then(()=>{
        callback('Success to update user')
    })
    .catch((error)=>{
        callback('error to update User', error)
    })
}

module.exports = {
    getUser,
    updateUserTotally,
    updateUserPartial,
    deleteUsers,
    addusers
}