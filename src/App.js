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
<Container style={{marginTop: "20px"}}>

<div>
    <InputGroup style={{marginTop: "2px"}}>
    <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    <Button variant="outline-secondary">Search</Button>
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    </InputGroup.Append>
  </InputGroup>
</div>
<CardDeck>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>


<CardDeck>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>


<CardDeck>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title>
      <Image variant="top" src={SampleIcon} width="50" height="auto" /> Cattering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

<Container style={{marginTop: "20px"}}></Container>
</Container>

                    <Route exact path="/dashboard" render={
                        (props) => <Dashboard />
                    
                    } />
                </div>
        </Router>
    )
}

export default App;
