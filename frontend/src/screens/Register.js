import React from 'react';
import { Stack} from 'react-bootstrap';
import ExpertRegister from '../components/ExpertRegister';
import {Navigate } from 'react-router-dom';

const Register = () => {
    // usamos el Navigate para determinar el perfil del usuario que se extrajo del inicio de sesion 
    var component = <Navigate to="/" />;
    // condicional para saber que pagina se debe renderizar luego de validar el local Storage
    if (JSON.parse(localStorage.getItem('session')) != undefined) {
        component = <Stack gap={2} className="col-md-5 mx-auto">
            <ExpertRegister />
        </Stack>
    }

        return (
            <>
               {component}

            </>
        );
    }

export default Register
