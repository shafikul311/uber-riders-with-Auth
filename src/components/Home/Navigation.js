
import React from 'react';

import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item className="p-3">
    
     <Link to="/home">Home</Link>
    </Nav.Item>
    <Nav.Item className="p-3">
    
    <Link to="/rideNow">Destination</Link>
      
    </Nav.Item>
    <Nav.Item className="p-3">
       
       <Link to="/blog">Blog</Link>
     
    </Nav.Item>
    
    <Nav.Item className="p-3">
   <Link to="/login"><button>Login</button></Link>
    </Nav.Item>
   
  </Nav>

</>
        </div>
    );
};

export default Navigation;