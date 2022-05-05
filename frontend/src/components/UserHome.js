
import React from 'react';
import { Container, Row, Col, Stack} from 'react-bootstrap';
import { Battery } from 'react-bootstrap-icons';

import SearchBar from './SearchBar';

const UserHome = () => {
    var user = JSON.parse(localStorage.getItem("user"));


    return (
        <Container fluid="md">
          <Row>
            <Col>
                <Stack gap={3} className="align-items-center">
                    <Battery/>
                    <SearchBar/>   
                </Stack>
                <h1>Bienvenido {user.name}</h1>
            </Col>
            </Row>  
        </Container>

    );
}

export default UserHome;
