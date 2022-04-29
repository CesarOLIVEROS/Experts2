import React from 'react'
import { Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import UserHome from '../components/UserHome';
import SearchBar from '../components/SearchBar';
//import ExpertHome from '../components/ExpertHome';

const Home = () => {
  // usamos el Navigate para determinar el perfil del usuario que se extrajo del inicio de sesion 
  var user = JSON.parse(localStorage.getItem("user"));
  
  // condicional para saber que pagina se debe renderizar luego de validar el local Storage
  if(user == undefined){
    return <Navigate to="/"/>;
  }
    
  return (
    <div>
     <UserHome />
      
    </div>
  )
}

export default Home
 