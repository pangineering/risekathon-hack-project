import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {getAllUsers, reset_user} from '../features/users/userSlice'

function HeaderNav() {
  const { user } = useSelector((state) => state.auth);


  console.log(user)


  return (
    <Navbar bg="dark" variant="dark">
      {user ? (
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Projects</Link>
            <Link to="/vendors">Vendors</Link>
            <Link to="/companies">Company</Link>
            
          </Nav>
        </Container>
      ) : (
        <></>
      )}
    </Navbar>
  );
}

export default HeaderNav;
