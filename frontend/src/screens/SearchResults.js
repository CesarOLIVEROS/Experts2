import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {Navigate } from "react-router-dom";
import ResultList from '../components/ResultList';


const SearchResults = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    const city = localStorage.getItem("city");
  
    if (user == undefined) {
      return <Navigate to="/" />;
    } 

    return (
        <Container>
            <Row>
                <h1>Ciudad: {city}</h1>
            </Row>
            <Row>
                <Col>
                    <ResultList/>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchResults
