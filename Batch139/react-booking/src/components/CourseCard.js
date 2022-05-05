import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function CourseCard({courseProp}){
    // console.log(courseProp)

    const {name, description, price} = courseProp

    // Use the state hook for this component to be able to store its state
    // States are used to keep track of information related to individual components

    // Syntax:
    //  const [getter, setter] = useState(initialGetterValue)

    const [count, setCount] = useState(0)
    const [seats, setSeats] = useState(10)

    const [isDisabled, setIsDisabled] = useState(false)

    useEffect( () => {

        if(seats === 0){
            setIsDisabled(true)
        }
    }, [seats])


    function enroll() {
		if(seats > 0) {
			setCount(count + 1);
			console.log('Enrollees: ' + count)
			setSeats(seats - 1)
			console.log('Seats: ' + seats)
		} else {
			alert("No more seats available")
		}
		
	}

    return(

        <Container className="mb-4">
            <Row className="justify-content-center">
                <Col xs={10} md={8}>
                    <Card className="p-4">
                        <Card.Title> {name} </Card.Title>
                        <Card.Body>
                            <Card.Subtitle>Description:</Card.Subtitle>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Subtitle>Price:</Card.Subtitle>
                            <Card.Text>
                                {price}
                            </Card.Text>
                            <Card.Text>Enrollees: {count} </Card.Text>
							<Card.Text>Seats Available: {seats} </Card.Text>
                            <Button variant="primary" onClick={enroll} >Enroll</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

// Check if the CourseCard component is getting the correct prop types
// Proptypes are used for validating information passed to a component and isa tool normally used to help devlopers ensure the correct information is passed from one component to the next.

CourseCard.propTypes = {
    courseProp: PropTypes.shape({

        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}