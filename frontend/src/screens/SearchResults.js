import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Results from '../components/Results';


const Searchresults = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Results/>
                </Col>
            </Row>
        </Container>
    );
}

export default Searchresults;
