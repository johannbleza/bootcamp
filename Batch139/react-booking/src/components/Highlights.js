import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Highlights(){

    return(
        
        <Container fluid className="mb-4">
            <Row>
                {/* Card 1 */}
                <Col xs={12} md={4}>
                    <Card className="cardHighlights p-3">
                        <Card.Body>
                            <Card.Title>Learn from Home</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sem nec lacus rhoncus ullamcorper. Proin convallis diam eget faucibus mattis. In sit amet fringilla mi. Integer congue pretium sapien, quis molestie nunc malesuada vel. Nullam luctus magna eu dui mollis tempor. Donec ante metus, vehicula vitae neque eu, tempor congue ligula. In hac habitasse platea dictumst. Pellentesque tristique velit nisl, ut fermentum leo egestas nec.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                {/* Card 2 */}
                <Col xs={12} md={4}>
                    <Card className="cardHighlights p-3">
                        <Card.Body>
                            <Card.Title>Study Now, Pay Later</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sem nec lacus rhoncus ullamcorper. Proin convallis diam eget faucibus mattis. In sit amet fringilla mi. Integer congue pretium sapien, quis molestie nunc malesuada vel. Nullam luctus magna eu dui mollis tempor. Donec ante metus, vehicula vitae neque eu, tempor congue ligula. In hac habitasse platea dictumst. Pellentesque tristique velit nisl, ut fermentum leo egestas nec.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                {/* Card 3 */}
                <Col xs={12} md={4}>
                    <Card className="cardHighlights p-3">
                        <Card.Body>
                            <Card.Title>Be Part of Our Community</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sem nec lacus rhoncus ullamcorper. Proin convallis diam eget faucibus mattis. In sit amet fringilla mi. Integer congue pretium sapien, quis molestie nunc malesuada vel. Nullam luctus magna eu dui mollis tempor. Donec ante metus, vehicula vitae neque eu, tempor congue ligula. In hac habitasse platea dictumst. Pellentesque tristique velit nisl, ut fermentum leo egestas nec.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}