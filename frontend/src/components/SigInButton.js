// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// Configure Firebase.
const config = {
  // Api Key configurada en el proyecto de la firebase
    apiKey: "AIzaSyCELfD0zb0v2LtwMD0NaoK7U21aQrsoOdA",

    authDomain: "pruebaweb1-c24e7.firebaseapp.com",
  
    projectId: "pruebaweb1-c24e7",
  
    storageBucket: "pruebaweb1-c24e7.appspot.com",
  
    messagingSenderId: "878317647478",
  
    appId: "1:878317647478:web:7898c04439ba425e7a9157"
  
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // este signInSuccesUrl se activa luego de configurar todo para redirigir el usuario que ya ingreso a la web
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (authResult) => {
      // Todo esto se guarda en el objeto con el fin de extraer de la local storage o la sesion iniciada la info del usuario
      const user ={
        name: authResult.user.displayName,
        email: authResult.user.email,
        img: authResult.user.photoURL,
        id: authResult.user.uid,
        isNew: authResult.additionalUserInfo,
      }
      // esto se extrae con comandos de la web => https://www.robinwieruch.de/local-storage-react/
      localStorage.setItem('user', JSON.stringify(user));
            
      return true;
    },
  },
};

function SignInButton() {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInButton