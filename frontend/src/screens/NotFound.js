import React from 'react';
import { Alert } from 'react-bootstrap';

const Notfound = () => {
    return (
        <>
            <Alert key="1" variant={'danger'}>
                Not Found Page 
                <Alert.Link href="/ "> go back to home</Alert.Link>. Give it a click if you
                like.
            </Alert>
        </>
    );
}

export default Notfound;
