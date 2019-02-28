import firebase from 'firebase'; 

var config = {
    apiKey: "AIzaSyCNK9B_C9BX6MMgDZImisH0JPWo9nb6zlU",
    authDomain: "project-five-cb8d7.firebaseapp.com",
    databaseURL: "https://project-five-cb8d7.firebaseio.com",
    projectId: "project-five-cb8d7",
    storageBucket: "project-five-cb8d7.appspot.com",
    messagingSenderId: "174120752785"
};
firebase.initializeApp(config);

export default firebase;