import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate} from "react-router-dom";
import UserContext from "../UserContext";
import Swal from "sweetalert2";

export default function Login(){



    const { user, setUser } = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isActive, setIsActive] = useState(true)

    let navigate = useNavigate();

    function loginUser(e){
        e.preventDefault()


        fetch("http://localhost:4000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(response => response.json())
        .then(data => {
            
            console.log(data)
            console.log(data !== "undefined")
            if(data){

                localStorage.setItem("token", data.access)
                userDetails(data.access)

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Welcome to Course Booking!"
                })

                navigate("/courses")
            } else{
                Swal.fire({
                    title: "Login Unsuccessful",
                    icon: "error",
                    text: "Please try again"
                })
            }
        })

        setEmail("")
        setPassword("")
        

        
    }

    const userDetails = (token) => {

        fetch("http://localhost:4000/api/users/details", {
            headers: {
                "Authorization":  `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
            setUser({
                id: data._id,
                isAdmin: data.isAdmin
            })
        
        })
    }

    console.log(user)
    useEffect( () => {
        
        if(email != "" && password != ""){
                setIsActive(false)
            }

    }, [email, password])

    return(

        // (user.id !== null) ? 
        // window.location.href = "http://localhost:3000/courses"

        // :

        <Container>
        <Row className="justify-content-center">
            <Col xs={10} md={8}>
                <h1>Login</h1>
                <Form onSubmit={(e) => loginUser(e)}>
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
                    <Button variant="primary" type="submit" disabled={isActive}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
    )
}