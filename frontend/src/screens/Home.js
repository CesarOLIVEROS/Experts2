import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import UserHome from '../components/UserHome';
import {Navigate } from "react-router-dom";

const Home = () => {
  // usamos el Navigate para determinar el perfil del usuario que se extrajo del inicio de sesion 
  var component = <Navigate to="/profile"/>;
  // condicional para saber que pagina se debe renderizar luego de validar el local Storage
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <UserHome/>
  }
  
  
  return (
    <div>
      {component}
      
    </div>
  )
}

export default Home
 