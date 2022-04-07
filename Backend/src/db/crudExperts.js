const db = require('./firebase.js');

// Para obtener los datos se extraen dentro de una promesa
// pero para usarlos se debera usar esa promesa dentro de un a
// funcion para luego exportar el resultado.

// Obtener todos los experts dentro de una funcion

function getExperts(){
    // retornamos lo que trae de la db
    return db.collection("experts").get()
    // luego usamos la promesa para usar la referencia
    .then((refDoc)=>{
        // se itera la referencia con un forEach y se usa una arrow function 
        // para imprimir los valores de ID y data del documento traido
        refDoc.forEach(doc =>{
            console.log(doc.id, "=>", doc.data());
        })
    })
    .catch(error =>{
        console.log("Error to get user ", error);
    })
}

module.exports ={
    getExperts,
}