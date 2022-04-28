
import React from 'react';
import { Container, Row, Col, Stack} from 'react-bootstrap';
import Profile from './Profile';



const UserHome = () => {
    return (
        <Container fluid="md">
          <Row>
            <Col>
                <Stack gap={3} className="align-items-center">
                 <Profile/>S
                 <p> Aca iria la pagina principal y una imagen
                </p>   
                </Stack>
            </Col>
            </Row>  
        </Container>

    );
}

export default UserHome;
