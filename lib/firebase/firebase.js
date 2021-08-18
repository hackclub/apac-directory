const firebase = require("firebase");
require("dotenv").config();

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  });
}

module.exports = firebase.apps[0].firestore();
