const db = require('./firebase.js');

// Para obtener los datos se extraen dentro de una promesa
// pero para usarlos se debera usar esa promesa dentro de un a
// funcion para luego exportar el resultado.

// Obtener todos los experts dentro de una funcion

function getExperts(callback){
    // retornamos lo que trae de la db
    return db.collection("experts").get()
    // luego usamos la promesa para usar la referencia
    .then((refDoc)=>{
        // se itera la referencia con un forEach y se usa una arrow function 
        // para imprimir los valores de ID y data del documento traido
        var arrayExperts = []; 
        refDoc.forEach(doc =>{
            //console.log(doc.id, "=>", doc.data());
            arrayExperts.push(doc.data());
        })
        callback(arrayExperts);
    })
    .catch(error =>{
        // console.log("Error to get user ", error)
        callback('Error to get experts ', error);
    })

}
// funcion para traer un documento en especifico
function getExpert(eid, callback){
    return db.collection("experts").doc(eid).get()
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

module.exports ={
    getExperts,
    getExpert
} 