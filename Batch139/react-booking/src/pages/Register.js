import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export default function Register(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cp, setCp] = useState("")

    const [isActive, setIsActive] = useState(true)


    console.log(email)
    console.log(password)
    console.log(cp)

    function registerUser(e){
        e.preventDefault()

        

        fetch("http://localhost:4000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                mobileNo: mobileNo
            })
        }).then(response => response.json())
        .then(data => {
            
            console.log(data)
            if(data){


                Swal.fire({
                    title: "Registered Successful",
                    icon: "success",
                    text: "Welcome to Course Booking!"
                })
            } else{
                Swal.fire({
                    title: "Duplicate email found",
                    icon: "error",
                    text: "Please provide a different email"
                })
            }
        })

        setFirstName("")
        setLastName("")
        setMobileNo("")
        setEmail("")
        setPassword("")
        setCp("")


    }

    useEffect( () => {
        
        if(email != "" && password != "" && cp != "" &&
            password == cp && mobileNo >= 11){
                setIsActive(false)
            }

    }, [email, password, cp])

    return(
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col xs={10} md={8}>
                <h1>Register</h1>
                <Form 
                className="border p-3" 
                onSubmit={(e) => registerUser(e)} >
                     <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name"
                        value={firstName}
                        onChange={ (e) => {
                            setFirstName(e.target.value)
                        }} />
                    </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name"
                        value={lastName}
                        onChange={ (e) => {
                            setLastName(e.target.value)
                        }} />
                    </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicMobileNo">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile Number"
                        value={mobileNo}
                        onChange={ (e) => {
                            setMobileNo(e.target.value)
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={ (e) => {
                            setEmail(e.target.value)
                        }}
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={ (e) => {
                            setPassword(e.target.value)
                        }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={cp}
                        onChange={(e) => {
                            setCp(e.target.value)
                        }}
                        />
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    type="submit"
                    disabled={isActive}
                    >
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}