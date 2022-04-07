const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./pruebaweb1-c24e7-dc2f0a1642a7.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// CONsulta para añadir un experto

var services ={
    Name: "Ingeniero electronico",
    Description:"Hago muy buenos microchips",
    Expirience: 10,
    photo: ["www. 123.com"]
}
db.collection("experts").add({
    Name: "Luis",
    Location: "Bogota, Cundinamarca COL",
    services: [services],
    Cel: "23432453",
    DNI: "3453452234",
    Bio: "Soy ingeniero electronico....",
    ContactLink:"fsjdfljsa.com",
    Ocupation:"Ing. Elctric in M<INTIC",
    Photoperfil: "www.jfsakhf.com",
})
.then((doc)=>{
    console.log(`Docuemnto registrado con el id ${doc.id}`);
})
.catch((Error)=>{
    console.log("Error at moment insert data", Error);
})