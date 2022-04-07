const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./pruebaweb1-c24e7-dc2f0a1642a7.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
