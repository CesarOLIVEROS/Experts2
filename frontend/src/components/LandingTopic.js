import React from 'react'
import { Container, Row, Col, Stack, Image, Card } from 'react-bootstrap'
const img = "https://storage-asset.msi.com/global/picture/image/feature/mb/X570/prestige-creation/x570-creation-cooling-hero.jpg";



const LandingTopic = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Stack gap={3} className="align-items-center">
                            <Image src={img} width="512px" height="214px" />
                        </Stack >
                    </Col>
                    <Col sm={4}>
                        <Stack gap={3} className="align-items-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Stack >
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LandingTopic
