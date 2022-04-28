import React from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

import ResultItem from "./ResultItem";
import Profile from "./Profile";

import { searchExpert } from "../apis/ExpertsCRUD";

const ResultList = () => {
  const city = localStorage.getItem("city");
  searchExpert()

 
  return (
    <Tab.Container id="list-group-tabs-example">
      <Row>
        <Col sm={5}>
          <ListGroup>
                <ResultItem/>
          </ListGroup>
        </Col>

        <Col sm={7}>
          <Tab.Content>
            <ResultItem/>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ResultList;