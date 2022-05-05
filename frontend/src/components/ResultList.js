import React, { useState, useEffect} from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

import ResultItem from "./ResultItem";
import Profile from "./Profile";

import { searchExpert } from "../apis/ExpertsCRUD";

const ResultList = () => {
  const city = localStorage.getItem("city");
  const [results, setResults] = useState([]); 
  useEffect(() => {
    // llamando la funcion del api y pasando los parametros de la funcion del api
    // Se usa el callback de la funcion en la api para actualizar el useState con el setResults
    searchExpert(city, setResults);
    // Se pasa el arreglo desocupado para que solo se actualice con el renderizado del componente
  },[]);

  // defaultactiveKey es para dejar un valor a mostrar desde el  inicio del renderizado del componente.
 
  // el props que se pasa en el componente qu eestamos renderizando es el de la data para que se muestre en la actualizacion o renderizacion del componente
  return (
    
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
      <Row>
        <Col sm={5}>
          <ListGroup>
          {/* funcion map devuelve con un JSX que deberia ser el componente actualizado, un nuevo arreglo con los datos que se le pasen en la funcion */}
          {results.map((results, index)=>(

            <ListGroup.Item action href={"#" + index}>
                  <ResultItem data={results}/>
            </ListGroup.Item>
          ))}
          
          </ListGroup>

        </Col>

        <Col sm={7}>
          <Tab.Content>
            {results.map((results, index)=>(
              <Tab.Pane eventKey={"#" + index}><Profile data={results}/></Tab.Pane>

            ))}
            
            </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ResultList;