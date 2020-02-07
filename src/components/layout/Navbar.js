import React, {useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.PNG';


const TepNavbar = (props) => {

    
    const [transparentClass, setTransparentClass] = useState("hide-no-transition");
    const [linkColor, setLinkColor] = useState("white");

    



    return (
        <Navbar bg="custom-primary" variant="light" fixed="top" expand="lg">
            
                <Navbar.Brand href="/">
                    <img src={Logo} height="50" alt="logo" />
                    <span style={{fontSize: "1.3em", fontWeight: "bold", color:"gray"}}>The Event Planner</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link href="/programs" style={navStyling}>Plan an event</Nav.Link>
                        <Nav.Link href="#link" style={navStyling}>Serve on an event</Nav.Link>
                        <Nav.Link href="/about" style={navStyling}>Help</Nav.Link>
                        <Nav.Link onClick={props.showSignUpModal} style={navStyling}>Signup</Nav.Link>
                        <Nav.Link href="/contact" style={navStyling}>Login</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>
    );
    
};

const navStyling = {
    color: "black", 
    textDecoration: "none", 
}


// NavbarTCS.propTypes = {

// }

export default TepNavbar;
