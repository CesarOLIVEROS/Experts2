import React from "react";
import { Stack, Image } from "react-bootstrap";
import { Battery } from "react-bootstrap-icons";

const ResultItem = () => {
    
    return (
    <Stack gap={4} direction="horizontal">
      <Image
        src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
        roundedCircle
        width="60px"
        height="60px"
      />
      <div>
        <h5>Jorge Luis H</h5>

        <Stack gap={2} direction="horizontal">
         <Battery/> 
        </Stack>

        <Stack gap={2} direction="horizontal">
          
          <div>Clases de Programación</div>
        </Stack>
      </div>
    </Stack>
  )
}

export default ResultItem
