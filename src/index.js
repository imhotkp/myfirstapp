import {initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import{getAuth, onAuthStateChanged,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
const firebaseapp = initializeApp({
    apiKey: "AIzaSyDmzZW_8wAEy1r_G0EJDtH4zRtTXWrDX4Q",
    authDomain: "fir-5904f.firebaseapp.com",
    projectId: "fir-5904f",
    storageBucket: "fir-5904f.appspot.com",
    messagingSenderId: "390953150257",
    appId: "1:390953150257:web:5e90f419db7b0677a6f210",
    measurementId: "G-2YRLEKF9H1"
  });
const auth=getAuth(firebaseapp);
// onAuthStateChanged(auth,user=>{
// if(user=null){
//     console.log('no user')
// }else{
//     console.log('logged in!')
// }

// });
document.getElementById("login-form").addEventListener("submit",(event)=>{
    event.preventDefault()});
    auth.onAuthStateChanged((user)=>{
        if(user){
            location.replace("welcome.html")
        }
    })

     login=(auth)=>{
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
auth.signInWithEmailAndPassword(email,password);
    }