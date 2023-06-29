var app_fireBase = {};
(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyBlk8gpluigfsHonf_Dnr3kh9U7H7K6OrQ",
    authDomain: "library-assign.firebaseapp.com",
    databaseURL: "https://library-assign-default-rtdb.firebaseio.com",
    projectId: "library-assign",
    storageBucket: "library-assign.appspot.com",
    messagingSenderId: "224629357085",
    appId: "1:224629357085:web:853386badb85d3ad73a4f4",
    measurementId: "G-BXB9Q9610J"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_fireBase = firebase;
})();
