import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
    CardDeck,
    Card,
    Image,
    SampleImage,
    SampleIcon,
    InputGroup,
    Button,
    FormControl,
    DropdownButton,
    Dropdown,
    Container } from 'react-bootstrap';
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ScrollToTop from './components/layout/ScrollToTop';
import AccountType from './components/AccountType';
import MerchantProfile from './components/MerchantProfile';
import MerchantDocument from './components/MerchantDocument';
import MerchantCalendar from './components/MerchantCalendar';

const App = () => {

    const [loginModal, showLoginModal] = useState(false);
    const handleLoginClose = () => showLoginModal(false);
    const handleLoginShow = () => showLoginModal(true);

    const [signupModal, showSignupModal] = useState(false);
    const handleSignupClose = () => showSignupModal(false);
    const handleSignupShow = () => showSignupModal(true);




    return (
        <Router>
                <Navbar 
                    showLoginModal={showLoginModal} 
                    loginModal={loginModal} 
                    handleLoginClose={handleLoginClose}
                    handleLoginShow={handleLoginShow}

                    showSignupModal={showSignupModal} 
                    signupModal={signupModal} 
                    handleSignupClose={handleSignupClose}
                    handleSignupShow={handleSignupShow}
                />
                <div>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/"  render={
                        (props) => <Landing 
                            {...props} 
                            showLoginModal={showLoginModal} 
                            loginModal={loginModal} 
                            handleLoginClose={handleLoginClose}
                            handleLoginShow={handleLoginShow} 
                            showSignupModal={showSignupModal} 
                            signupModal={signupModal} 
                            handleSignupClose={handleSignupClose}
                            handleSignupShow={handleSignupShow} /> 
                    } />




                    <Route exact path="/dashboard" render={
                        (props) => <Dashboard />
                    
                    } />
                    <Route exact path="/accountType" render={
                        (props) => <AccountType />
                    
                    } />
                    <Route exact path="/merchantProfile" render={
                        (props) => <MerchantProfile />
                    
                    } />
                    <Route exact path="/merchantDocument" render={
                        (props) => <MerchantDocument />
                    
                    } />

                    <Route exact path="/merchantCalendar" render={
                        (props) => <MerchantCalendar />
                    
                    } />
                </Switch>
                </div>
        </Router>
    )
}

export default App;
