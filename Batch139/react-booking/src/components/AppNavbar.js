import { Nav, Navbar} from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Fragment, useState } from "react"
import UserContext from "../UserContext"
import { useContext } from "react" 


export default function AppNavbar(){
    

    const {user, setUser, unsetUser} = useContext(UserContext)

    // const [user, setUser] = useState(localStorage.getItem("email"))
    console.log(user)
    
    
    let navigate = useNavigate();

    function logout(e){
        e.preventDefault()

        unsetUser();
        navigate('/');
        window.location.reload()
        
    }
    
    let leftNav = (user.id !== undefined) ? 
    <Nav.Link onClick={logout}>Logout</Nav.Link>
    : 
    <Fragment>
    <Nav.Link as={NavLink} to="/register" >Register</Nav.Link>
    <Nav.Link as={NavLink} to="/login" >Login</Nav.Link> 
    </Fragment>

    return(
        <Navbar bg="primary" expand="lg" >
            <Navbar.Brand as={Link} to="/" >React Booking</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/courses" >Courses</Nav.Link>
                    <Nav>
                        {leftNav}
                    </Nav>
                    {/* <Nav.Link as={NavLink} to="/register" >Register</Nav.Link>
                    <Nav.Link as={NavLink} to="/login" >Login</Nav.Link> 
                    <Nav.Link as={NavLink} to="/logout" >Logout</Nav.Link>  */}
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}
