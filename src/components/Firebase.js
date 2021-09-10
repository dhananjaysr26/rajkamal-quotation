import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD48QvbGmE2mju1xVWr7MXrXOkL-L3VjOw",
    authDomain: "rajkamal-49a56.firebaseapp.com",
    databaseURL: "https://rajkamal-49a56-default-rtdb.firebaseio.com",
    projectId: "rajkamal-49a56",
    storageBucket: "rajkamal-49a56.appspot.com",
    messagingSenderId: "204246291761",
    appId: "1:204246291761:web:862eec570234f3a0d18c10"
};
firebase.initializeApp(firebaseConfig);

export default firebase;