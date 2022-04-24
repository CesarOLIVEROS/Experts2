import React from 'react';
import {Navigate } from "react-router-dom";

const Profile = () => {
    // usamos el Navigate para determinar el perfil del usuario que se extrajo del inicio de sesion 
  var component = <Navigate to="/"/>;
  // condicional para saber que pagina se debe renderizar luego de validar el local Storage
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <h1>Profile</h1> 
  }
    return (
        <>
            {component}
        </>
    );
}

export default Profile;
