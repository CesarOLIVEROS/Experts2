import React, { Profiler } from 'react'
import { Tab, Col, Nav, Row, } from 'react-bootstrap'
import ResultItem from './ResultItem'


const Results = () => {
    return (

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={5}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                            <ResultItem/>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            <ResultItem/>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" >
                            <ResultItem/>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4" >
                            <ResultItem/>
                        </ListGroup.Item>
                    </ListGroup>,
                </Col>
                <Col sm={7}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            <Profile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <Profile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                            <Profile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                            <Profile/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

    )
}

export default Results
