import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import SampleImage from '../assets/icons/sample.PNG';
import UploadIcon from '../assets/icons/upload.png';
import Navbar from 'react-bootstrap/Navbar';
const MerchantProfile = (props) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndtDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);


    


    return (
        <>
            <Container style={{marginTop: "80px"}}>
<div>
 <h3 align="center">We'd love to see you on board! Let's get your business up to speed</h3> 
</div>
<CardDeck>
  <Card style={{marginTop: "20px"}}> 
    <Card.Body>
    <div>
    <Navbar.Brand href="#home"><Image variant="top" src={UploadIcon} width="30" height="auto" /> Click to add logo</Navbar.Brand>
 <br/>
    
<label htmlFor="basic-url">Business Name</label>
  <InputGroup className="mb-3">
    <FormControl
    //   placeholder="Username"
    //   aria-label="Username"
    //   aria-describedby="basic-addon1"
    />
  </InputGroup>

  <label htmlFor="basic-url">Business Address</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>

  <label htmlFor="basic-url">Business Mobile Number</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>

  <label htmlFor="basic-url">Business Landline Number</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>
  
  <label htmlFor="basic-url">Business Email Address</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>
</div>
    </Card.Body>
  </Card> 
  
  <Card style={{marginTop: "20px"}}> 
    <Card.Body>
    <div>
      <Card.Title align="center"><b>Social Media Sites: Promote you business' pages</b></Card.Title>
<br/>
<label htmlFor="basic-url">Business Name</label>
  <InputGroup className="mb-3">
    <FormControl
    //   placeholder="Username"
    //   aria-label="Username"
    //   aria-describedby="basic-addon1"
    />
  </InputGroup>

  <label htmlFor="basic-url">Facebook Link</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>

  <label htmlFor="basic-url">Twitter Link</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>

  <label htmlFor="basic-url">Instagram Link</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>
  
  <label htmlFor="basic-url">YouTube Channel link</label>
  <InputGroup className="mb-3">
    <FormControl
    />
  </InputGroup>

</div>
    </Card.Body>
  </Card>
</CardDeck>

<Container style={{ align: "center", marginTop: "80px"}}>
    <Row>
        <Col className="text-center">
            <Button as="input" className="" type="button" value="Save my business profile" />
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

export default MerchantProfile
