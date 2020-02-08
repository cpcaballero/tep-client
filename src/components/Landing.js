import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import SampleImage from '../assets/icons/sample.PNG';
import VenueIcon from '../assets/icons/location.png';
import CateringIcon from '../assets/icons/catering.png';
import EntertainmentIcon from '../assets/icons/entertainment.png';
import MediaIcon from '../assets/icons/media_coverage.png';
import EventDetailingIcon from '../assets/icons/event_detailing.png';
import GiveawayIcon from '../assets/icons/giveaway.png';

import VenueImage from '../assets/icons/venues.jpg';
import CateringImage from '../assets/icons/catering.jpg';
import EntertainmentImage from '../assets/icons/entertainment.jpg';
import MediaImage from '../assets/icons/meda-coverage.jpg';
import EventDetailingImage from '../assets/icons/event-detailing.jpg';
import GiveawayImage from '../assets/icons/giveaways.jpg';



const Landing = (props) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndtDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    return (
        <>
            <div className="fill-height">
                <div className="headerImage">
                    <Col xs={12} sm={8} md={6} lg={4} className="mx-xs-1 mx-md-5" style={{marginTop:"50px"}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Book your event needs in one place</Card.Title>
                                    <Form.Control as="select" className="my-4">
                                        <option>What are we celebrating about?</option>
                                        <option>...</option>
                                    </Form.Control>
                                    <Form.Control className="my-4" placeholder="Where is the party at?" />
                                    <Row>
                                        <Col>
                                            <DateRangePicker
                                                startDate={startDate} // momentPropTypes.momentObj or null,
                                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                                endDate={endDate} // momentPropTypes.momentObj or null,
                                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                                onDatesChange={({ startDate, endDate }) => { setStartDate(startDate); setEndtDate(endDate); } }// PropTypes.func.isRequired,
                                                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                                onFocusChange={setFocusedInput} // PropTypes.func.isRequired,
                                                startDatePlaceholderText="When will it be?"
                                                endDatePlaceholderText="Until when?"
                                                block={true}
                                                withPortal={false}
                                                required={true}
                                            />
                                        </Col>
                                    </Row>
                                    <Form.Control as="select" className="my-4">
                                        <option>How many people are we expecting?</option>
                                        <option>Less than 10 people</option>
                                        <option>10 - 20 people</option>
                                        <option>20 - 50 people</option>
                                        <option>50 - 100 people</option>
                                        <option>100 - 150 people</option>
                                        <option>150 - 200 people</option>
                                        <option>200 - 250 people</option>
                                        <option>250 - 300 people</option>
                                        <option>300 - 350 people</option>
                                        <option>More than 350 people</option>
                                    </Form.Control>
                                    {/* <DatePicker onChange={onChange}/> */}
                                    <Button className="headerActionButton rounded-0 btn-block" variant="info"> Let's get the planning started! </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
            <Container fluid style={{marginTop: "60px"}}>
                <div className="mx-1 w-100">
                    <InputGroup className="w-75" style={{marginTop: "20px"}}>
                        <FormControl
                            placeholder="What can we help you find?"
                            aria-label="What can we help you find?"
                            aria-describedby="basic-addon2"
                            className="rounded-0"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Filters"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item href="#">Latest</Dropdown.Item>
                                <Dropdown.Item href="#">Most Viewed</Dropdown.Item>
                                <Dropdown.Item href="#">Rating</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <CardDeck className="mx-1">
                    <div className="col-sm-4 col-md-2 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={SampleImage} />
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <span>
                                        <Image variant="top" src={VenueIcon} width="50" height="auto" /><br />Venues
                                    </span>
                                </Card.Title>
                                <Card.Text>
                                    Church, Restaurant, Garden, Hall, etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-2 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={CateringImage} />
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <span>
                                        <Image variant="top" src={CateringIcon} width="50" height="auto" /><br />Catering
                                    </span>
                                </Card.Title>
                                <Card.Text>
                                    Japanese, Mediterranean, Vegetarian, Halal, etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-2 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={EntertainmentImage} />
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <span>
                                        <Image variant="top" src={EntertainmentIcon} width="50" height="auto" /><br />Entertainment
                                    </span>
                                </Card.Title>
                                <Card.Text>
                                    Singer, DJ, Band, Hosting, Talents, etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-2 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img variant="top" src={MediaImage} />
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <span>
                                        <Image variant="top" src={MediaIcon} width="50" height="auto" /><br />Media Coverage
                                    </span>
                                </Card.Title>
                                <Card.Text>
                                    Videographer, Photographer, Live Streaming, etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-2 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img variant="top" src={EventDetailingImage} />
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <span>
                                        <Image variant="top" src={EventDetailingIcon} width="50" height="auto" /><br />Event Detailing
                                    </span>
                                </Card.Title>
                                <Card.Text>
                                    Coordinator, Lights and Sounds, Tailoring, Florist, Decor, etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-2 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img variant="top" src={GiveawayImage} />
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <span>
                                        <Image variant="top" src={GiveawayIcon} width="50" height="auto" /><br />Giveaways
                                    </span>
                                </Card.Title>
                                <Card.Text>
                                    Invitation, Souvenirs, Photo Booth, etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
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

export default Landing
