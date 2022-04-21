import React from 'react'
import { Form, Button } from 'react-bootstrap'


const ExpertRegister = () => {
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }}> Registrate !!!</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su usuario" />

                    </Form.Group>

                    <Form.Select>
                        <option>Amazonas</option>
                        <option>Antioquia</option>
                        <option>Atlantico</option>
                        <option>Boyaca</option>
                    </Form.Select>

                    <Form.Group className="mb-3" controlId="formBasicCelphone">
                        <Form.Label>Numero de contacto</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su numero de celular" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDNI">
                        <Form.Label>DNI</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su numero de documento" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicBio">
                        <Form.Label>Biografia</Form.Label>
                        <Form.Control as="textarea" rows={3} type="text" placeholder='Escribe una breve reseña tuya'/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ margin: 10 }}>
                        Enviar
                    </Button>



                </Form>
            </div>
        </>
    )
}

export default ExpertRegister
