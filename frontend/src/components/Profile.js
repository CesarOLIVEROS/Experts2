import React from 'react';
import { Stack, Image } from 'react-bootstrap';
import { Battery } from 'react-bootstrap-icons';

const Profile = (props) => {
  
    return (
        <Stack gap={2} className="align-items-center">
          <Image
          src='https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-cuenta-de-usuario-perfil-del-icono-del-c%C3%ADrculo-plana-para-aplicaciones-y-sitios-web.jpg'
          roundedCircle
          width="80px"
          height="80px"
          />
          <h4>{props.data.name}</h4>
          <div className='justify-content-center'>
            <Stack gap={2} direction="horizontal">

            <div>{props.data.Location}</div>
            <Battery/>
            </Stack>
            <Stack gap={2} direction="horizontal">
              <div>{props.data.occupation}</div>
            </Stack>
          </div>
        </Stack>
    );
}

export default Profile;
