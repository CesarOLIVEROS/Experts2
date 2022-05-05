import React from "react";
import { Stack, Image } from "react-bootstrap";
import { Battery } from "react-bootstrap-icons";

// uso el props para pasar la info que ya traigo desde el ResultList y luego le paso alla el dato o lo que deseo que use
const ResultItem = (props) => {
    
    return (
    <Stack gap={4} direction="horizontal">
      <Image
        src={props.data.picture}
        roundedCircle
        width="60px"
        height="60px"
      />
      <div>
        <h5>{props.data.name}</h5>

        <Stack gap={2} direction="horizontal">
         <Battery/> 
        </Stack>
        <Stack gap={2} direction="horizontal">
          
          <div>{props.data.Location}</div>
        </Stack>

        <Stack gap={2} direction="horizontal">
          
          <div>{props.data.occupation}</div>
        </Stack>
      </div>
    </Stack>
  )
}

export default ResultItem
