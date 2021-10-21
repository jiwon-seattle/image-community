import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDSI3Fs-PmJtNqy023J1u_zfMPjbkbzs0",
  authDomain: "image-comm-10b01.firebaseapp.com",
  projectId: "image-comm-10b01",
  storageBucket: "image-comm-10b01.appspot.com",
  messagingSenderId: "821952854814",
  appId: "1:821952854814:web:5c14cf149f22fe9799270f",
  measurementId: "G-Z6PQDF5NKL"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};