import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import SampleImage from '../assets/icons/sample.PNG';
import QIcon from '../assets/icons/question.png';
import Navbar from 'react-bootstrap/Navbar';
const MerchantDocument = (props) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndtDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);


    


    return (
        <>
            <Container style={{marginTop: "80px"}}>
<div>
<br/>
 <h3 align="center">Cool! Your account is now setup. <br/> We just have to ask a few documents to verify your account </h3> 
</div>
<br/>

<div>
<Navbar.Brand href="#home" fontSize="6" align="center">Why do I need to be verified? <Image variant="top" src={QIcon} width="18" height="auto" /></Navbar.Brand>
</div>
<CardDeck>
  <Card style={{marginTop: "20px"}}> 
    <Card.Body>
    <div>
    <Card.Title align="left"><b>Identity Information (jpeg/png format)</b></Card.Title>

<InputGroup style={{marginTop: "2px"}}>
    <FormControl
      placeholder="Choose among Valid IDs here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title=""
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
<br/>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Upload ID here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button >Upload</Button>
    </InputGroup.Append>

  </InputGroup>
<br/>
<Card.Title align="left"><b>Business Information (jpeg/png or pdf format)</b></Card.Title>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="BIR Permit"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button >Upload</Button>
    </InputGroup.Append>
    <InputGroup.Append>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Append>
    <InputGroup.Append>
      <InputGroup.Text>N/A</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

<br/>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="SEC Registration"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button >Upload</Button>
    </InputGroup.Append>
    <InputGroup.Append>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Append>
    <InputGroup.Append>
      <InputGroup.Text>N/A</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

</div>
    </Card.Body>
  </Card> 
  

  <Card style={{marginTop: "20px"}}> 
    <Card.Body>
    <div>
      <Card.Title align="left"><b>Your Bank Information</b></Card.Title>
<br/>
<InputGroup style={{marginTop: "2px"}}>
    <FormControl
      placeholder="Choose your bank here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title=""
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
<br/>
  <InputGroup style={{marginTop: "2px"}}>
    <FormControl
      placeholder="Choose your bank account type"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title=""
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

<br/>
  <label htmlFor="basic-url">Name on back account</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>
  
  <label htmlFor="basic-url">Account number</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>
  <Navbar.Brand href="#home" fontSize="6" align="center">How will my bank details be used?<Image variant="top" src={QIcon} width="18" height="auto" /></Navbar.Brand>

</div>
    </Card.Body>
  </Card>
</CardDeck>

<Container style={{ align: "center", marginTop: "80px"}}>
    <Row>
        <Col className="text-center">
            <Button as="input" className="" type="button" value="Submit details to verify" />
        </Col>    
    </Row>
    
</Container>

</Container>
            <Modal show={props.signUpModal} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up!</Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <p>Woohoo, you're reading this text in a modal!</p>
                    <Form.Control className="my-4" placeholder="Where is the party at?" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    <Button variant="primary" onClick={props.handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MerchantDocument
