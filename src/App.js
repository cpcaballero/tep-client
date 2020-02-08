import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'

import SampleImage from './assets/icons/sample.PNG';

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
                    <CardDeck>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
                    <Route exact path="/dashboard" render={
                        (props) => <Dashboard />
                    
                    } />
                </div>
        </Router>
    )
}

export default App;
