import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC96AlaRetCXdoCu7Vhyh7Cpockka6vZ98",
    authDomain: "fir-react-auth-81596.firebaseapp.com",
    projectId: "fir-react-auth-81596",
    storageBucket: "fir-react-auth-81596.appspot.com",
    messagingSenderId: "440028990888",
    appId: "1:440028990888:web:cbae38d72f6bd0c7c1e19d",
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
