import { initializeApp } from "../node_modules/firebase/app";
import { getAnalytics } from "../node_modules/firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyADp7YWjDL4o_cEFJEqCGj4RWIQyIh3Jo0",
    authDomain: "clouddatabases-d31e4.firebaseapp.com",
    projectId: "clouddatabases-d31e4",
    storageBucket: "clouddatabases-d31e4.appspot.com",
    messagingSenderId: "52586128232",
    appId: "1:52586128232:web:e83d04fb2544dd39cd6cdd",
    measurementId: "G-PYD467T3P8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  let contact = firebase.database().ref('infos');


document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;
}