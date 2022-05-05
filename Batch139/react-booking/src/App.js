import { Fragment, useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

import AppNavbar from './components/AppNavbar'
import Home from './pages/Home';
import Courses from './pages/Courses';
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { UserProdiver } from './UserContext';
import { useNavigate } from 'react-router-dom';

function App() {
  // React Context is nothing but a global state to the app. It is a way to make a particular data available to all the components no matter how they are nested. Context helps you broadcast the data and changes happening to that data, to all components

  const [user, setUser] = useState({
      id: null,
      isAdmin: null
  })

  // function for clearing localStorage on logout
 
  const unsetUser = () => {
    localStorage.clear();

    setUser ({
      id:null,
      isAdmin:null
    })
  }

  useEffect( () => {

    fetch("http://localhost:4000/api/users/details", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }      
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)

      if (data !== "undefined"){
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
      } else {
        setUser({
          id: null,
          isAdmin: null
        })
      }
    })

  }, [])

 if(window.location.href.indexOf("/register") > -1 && localStorage.id !== undefined) {
  window.location.href = "http://localhost:3000/courses";
}


  return(
      <UserProdiver value={{user, setUser, unsetUser}}>
        
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<ErrorPage />} />
          
          </Routes>
      </BrowserRouter> 
      </UserProdiver>
  )

}

export default App;
