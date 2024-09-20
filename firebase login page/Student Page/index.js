import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE7X9J2PECu-jSEgHo4caldAUfekRfBQQ",
    authDomain: "login-signup-form-95f4c.firebaseapp.com",
    projectId: "login-signup-form-95f4c",
    storageBucket: "login-signup-form-95f4c.appspot.com",
    messagingSenderId: "461722634309",
    appId: "1:461722634309:web:5c024fc8f2239b490bfb2c",
    measurementId: "G-G5Z9B3H76E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//const auth = getAuth();

document.getElementById('signup_btn').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup_email').value;
    const password = document.getElementById('signup_password').value;
    const name = document.getElementById('signup_name').value;
    const LastName = document.getElementById('signup_lname').value;
    const Cnic = document.getElementById('signup_cnic').value;

const user = userCredential.user;
            set(ref(database, 'users/' + user.uid), {
                name: name,
                email: email,
                password: password,
                LastName: LastName,
                Cnic: Cnic,
            });
    });            
