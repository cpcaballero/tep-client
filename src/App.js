import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';

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
                </div>
        </Router>
    )
}

export default App;
