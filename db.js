const firebase = require("firebase/app");
const firebaseAuth = require("firebase/auth");
const firebaseAdmin = require("firebase-admin/app");
const firestore = require("firebase/firestore");
//initializeApp();
const config = require('./config');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');

var admin = require("firebase-admin");

var serviceAccount = require("./risekathon-app-firebase-adminsdk-qxt4j-2ae64c41be.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



const app =  firebase.initializeApp(config.firebaseConfig);
const db = getFirestore();

module.exports = {app,admin,db,firestore}