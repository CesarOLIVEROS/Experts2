import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Results from '../components/Results';
import {Navigate } from "react-router-dom";


const Searchresults = () => {
    // usamos el Navigate para determinar el perfil del usuario que se extrajo del inicio de sesion 
    var component = <Navigate to="/" />;
    // condicional para saber que pagina se debe renderizar luego de validar el local Storage
    if (JSON.parse(localStorage.getItem('session')) != undefined) {
        component = <Container>
            <Row>
                <Col>
                    <Results />
                </Col>
            </Row>
        </Container>
    }
    return (
        <>
            {component}
        </>
    );
}

export default Searchresults;
