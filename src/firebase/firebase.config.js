import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_apiKey,
  //   authDomain: process.env.REACT_APP_authDomain,
  //   projectId: process.env.REACT_APP_projectId,
  //   storageBucket: process.env.REACT_APP_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
  //   appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyDnqf46z05p1clRQuLaB3ezDJWLvve0Glg",
  authDomain: "dental-care-534b0.firebaseapp.com",
  projectId: "dental-care-534b0",
  storageBucket: "dental-care-534b0.appspot.com",
  messagingSenderId: "813169450210",
  appId: "1:813169450210:web:ce856d0fe3ae712274d2bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
