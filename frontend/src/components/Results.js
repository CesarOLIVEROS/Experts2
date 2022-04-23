import React from 'react'
import { Tab, Col, Nav, Row, } from 'react-bootstrap'


const Results = () => {
    return (

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={5}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={7}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <h1>ACa se modifica el texto a mostrar de primero</h1>
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            
                        <h1>ACa se modifica el texto a mostrar de segundo</h1>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

    )
}

export default Results
