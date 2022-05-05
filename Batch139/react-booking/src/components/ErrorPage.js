import { Col, Container, Row } from "react-bootstrap";

export default function ErrorPage(){

    return(
        <Container className="my-5">
            <Row>
                <Col xs={10} md={8}>
                    <div className="jumbotron">
                        <h1>404 - Not Found</h1>
                        <p>
                            The Page your are looking for cannot be found
                        </p>
                    </div>
                </Col>  
            </Row>
        </Container>
    )
}