import React, {useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
    useParams,
    useHistory
} from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.PNG';


const TepNavbar = (props) => {
    let history = useHistory();
    let segmentStr = history.location.pathname;
    // const getParams = () => {
    //     return useParams();
    // }
    useEffect(() => {
        console.log("trigger")
        segmentStr = history.location.pathname;
        console.log(segmentStr);
        console.log(window.location.pathname);
    })
    console.log(history.location.pathname);
    const [transparentClass, setTransparentClass] = useState("hide-no-transition");
    const [linkColor, setLinkColor] = useState("white");

    const guestLinks = (
        <>
            <Nav.Link href="/programs" style={navStyling}>Plan an event</Nav.Link>
            <Nav.Link href="#link" style={navStyling}>Serve on an event</Nav.Link>
            <Nav.Link href="/about" style={navStyling}>Help</Nav.Link>
            <Nav.Link onClick={props.showSignupModal} style={navStyling}>Signup</Nav.Link>
            <Nav.Link onClick={props.showLoginModal} style={navStyling}>Login</Nav.Link>
        </>
    );
    const merchantLinks = (
        <Nav.Link href="/" style={segmentStr == "/" || segmentStr == "/accountType" ? navStyling : lightNavStyling}>Sample Merchant (Logout)</Nav.Link>
    );



    return (
        <Navbar bg={ segmentStr == "/" || segmentStr == "/accountType" ? 'custom-primary' : 'dark' } variant="light" fixed="top" expand="lg">
            
                <Navbar.Brand href="/">
                    <img src={Logo} height="50" alt="logo" />
                    <span style={{fontSize: "1.3em", fontWeight: "bold", color: segmentStr == "/" || segmentStr == "/accountType" ? 'gray' : 'white'}}>The Event Planner</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        { segmentStr == "/" || segmentStr == "/accountType" ? guestLinks : merchantLinks }
                        
                        

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

const lightNavStyling = {
    color : "white",
    textDecoration: "none"
}


// NavbarTCS.propTypes = {

// }

export default TepNavbar;
