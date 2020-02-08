import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import SampleImage from '../assets/icons/sample.PNG';
import SampleIcon from '../assets/icons/catering.png';
import Navbar from 'react-bootstrap/Navbar';
const AccountType = (props) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndtDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);


    


    return (
        <>
            <Container style={{marginTop: "80px"}}>
<div>
 <h3 align="center">Which best describes you?</h3> 
</div>
<CardDeck>
  <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title align="center"><b>Customer</b></Card.Title>
      <Card.Text>
        Together with hundreds of our merchants and service providers, pick only the best for you perfect event.
      </Card.Text>
    </Card.Body>
  </Card> <Card style={{marginTop: "20px"}}> 
    <Card.Img variant="top" src={SampleImage} />
    <Card.Body>
      <Card.Title align="center"><b>Merchant</b></Card.Title>
      <Card.Text>
        Sell you products and services to customers, make you craft stand out in out marketplace and provide value to different events.
    </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>



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

export default AccountType
