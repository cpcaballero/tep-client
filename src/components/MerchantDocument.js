import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import SampleImage from '../assets/icons/sample.PNG';
import QIcon from '../assets/icons/question.png';
import Navbar from 'react-bootstrap/Navbar';
const MerchantDocument = (props) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndtDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [infoModal, toggleInfoModal] = useState(false);
    const infoModalClose = () => toggleInfoModal(false);
    const infoModalShow = () => toggleInfoModal(true);

    let history = useHistory();

    const navToDashboard = () => {
      history.push('dashboard');
    }


    return (
        <>
          <Container style={{marginTop: "80px"}}>
            <div>
              <br/>
              <h3 align="center">Cool! Your account is now setup. <br/> We just have to ask a few documents to verify your account </h3> 
            </div>
            <br/>

            <div>
              <Link 
                className="text-center" 
                onClick={ infoModalShow} 
                fontSize="6" 
                style={{textDecoration: "none", color: "inherit"}}>
                  <u>Why do I need to be verified? 
                    <Image variant="top" src={QIcon} width="18" height="auto" />
                  </u>
              </Link>
            </div>
            <CardDeck>
              <Card style={{marginTop: "20px"}}> 
                <Card.Body>
                  <div>
                    <Card.Title align="left"><b>Identity Information (jpeg/png format)</b></Card.Title>
                    <FormControl as="select">
                      <option>Choose Among Valid IDs here</option>
                    </FormControl>
                    <br/>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Upload ID here"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <Button variant="info">Upload</Button>
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
                        <Button variant="info">Upload</Button>
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
                        <Button variant="info">Upload</Button>
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
                    <FormControl as="select">
                      <option>Choose your bank here</option>
                    </FormControl>
                    <br/>
                    <FormControl as="select">
                      <option>Choose your bank account type</option>
                    </FormControl>
                    <br/>
                    <label htmlFor="basic-url">Name on bank account</label>
                    <InputGroup className="mb-3">
                      <FormControl
                      />
                    </InputGroup>
                    <label htmlFor="basic-url">Account number</label>
                    <InputGroup className="mb-3">
                      <FormControl
                      />
                    </InputGroup>
                    <Link 
                      href="#home" 
                      fontSize="6" 
                      className="text-center" 
                      style={{textDecoration: "none", color: "inherit"}}>
                        <u>How will my bank details be used?
                          <Image variant="top" src={QIcon} width="18" height="auto" />
                        </u>
                    </Link>
                  </div>
                  </Card.Body>
              </Card>
            </CardDeck>
            <Container style={{ align: "center", marginTop: "40px", marginBottom: "40px"}}>
              <Row>
                <Col className="text-center">
                  <Button variant="info" type="button" onClick={navToDashboard}> Submit details to verify </Button>
                </Col>    
              </Row>
            </Container>
          </Container>
          <Modal show={infoModal} onHide={infoModalClose}>
              <Modal.Header closeButton>
                  <Modal.Title>What does it mean to be verified?</Modal.Title>
              </Modal.Header> 
              <Modal.Body>
                  <p>To maintain quality of merchants and to protect our customers, TEP must verify the validity of merchants. Verified merchants will have the check mark beside their business/merchant name.</p> 
                  <p>Details asked for verification will be reviewed by our team. Depending on the type of your business, additional information may be required. Rest assured that all information and documents submitted will be kept confidential and secured in our network. These information will not be sold or forwarded to any third party entity.</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="info" onClick={infoModalClose}>Got it, thanks!</Button>
              </Modal.Footer>
          </Modal>
        </>
    )
}

export default MerchantDocument
