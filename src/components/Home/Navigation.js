import React from "react";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { UserContext} from "../../App";
import { useContext } from "react";


const Navigation = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
            <Link to="/login">
              <button>Login</button>
            </Link>
          </Nav.Item>
          <Nav.Item className="p-3">
            
              <h5>{loggedInUser.name}</h5>
           
          </Nav.Item>
        </Nav>
      </>
    </div>
  );
};

export default Navigation;
