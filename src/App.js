import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import SampleImage from './assets/icons/sample.PNG';
import SampleIcon from './assets/icons/catering.png';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
const App = () => {

    const [signUpModal, showSignUpModal] = useState(false);
    const handleClose = () => showSignUpModal(false);
    const handleShow = () => showSignUpModal(true);


    return (
        <Router>
                <Navbar 
                    showSignUpModal={showSignUpModal} 
                    signUpModal={signUpModal} 
                    handleClose={handleClose}
                    handleShow={handleShow}
                />
                <div>
                    <Route exact path="/"  render={
                        (props) => <Landing 
                            {...props} 
                            showSignUpModal={showSignUpModal} 
                            signUpModal={signUpModal} 
                            handleClose={handleClose}
                            handleShow={handleShow} /> 
                    } />




                    <Route exact path="/dashboard" render={
                        (props) => <Dashboard />
                    
                    } />
                </div>
        </Router>
    )
}

export default App;
