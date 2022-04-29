import React from 'react'
import { Dropdown } from 'react-bootstrap';

const SearchBar = () => {
    const redirectUrl = "/search-results";

function SaveCity(city){
    localStorage.setItem("city", city);
}

  return (
    <Dropdown className="align-items-center">
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
            En donde necesitas a tu <strong>Experto</strong>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href={redirectUrl} onClick ={() =>{SaveCity("Paris")}}>Paris</Dropdown.Item>
            <Dropdown.Item href={redirectUrl} onClick ={() =>{SaveCity("Londres")}}>Londres</Dropdown.Item>
            <Dropdown.Item href={redirectUrl} onClick ={() =>{SaveCity("Cartagena")}}>Cartagena</Dropdown.Item>
            <Dropdown.Item href={redirectUrl} onClick ={() =>{SaveCity("ChileS")}}>Chile</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchBar;
