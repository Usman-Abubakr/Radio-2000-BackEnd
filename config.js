const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyDcCFq6Ac_UZgjCPQFTGeYrvGIcwLum-P4",
    authDomain: "radio-2000-backend.firebaseapp.com",
    projectId: "radio-2000-backend",
    storageBucket: "radio-2000-backend.appspot.com",
    messagingSenderId: "392782694789",
    appId: "1:392782694789:web:d762815724edc6d810dcec",
    measurementId: "G-8HK3TMBGS2"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Stations = db.collection('Stations');
const Users = db.collection('Users');
module.exports = Stations;
module.exports = Users;