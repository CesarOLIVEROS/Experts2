import React from 'react';
import { Stack } from 'react-bootstrap';
import ExpertRegister from '../components/ExpertRegister';


const Register = () => {
    return (
        <>
        <Stack gap={2} className="col-md-5 mx-auto">
            <ExpertRegister/>
        </Stack>
        </>
    );
}

export default Register;
