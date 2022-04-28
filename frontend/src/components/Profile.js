import React from 'react';
import { Stack, Image } from 'react-bootstrap';
import { Battery } from 'react-bootstrap-icons';

const Profile = () => {
  
    return (
        <Stack gap={2} className="align-items-center">
          <Image
          src='https://google.com,png'
          roundedCircle
          width="80px"
          height="80px"
          />
          <h4>Jorge Luis Hernandez</h4>
          <div className='justify-content-center'>
            <Stack gap={2} direction="horizontal">

            <div>Paris</div>
            <Battery/>
            </Stack>
            <Stack gap={2} direction="horizontal">
              <div>Clases de programación</div>
            </Stack>
          </div>
        </Stack>
    );
}

export default Profile;
