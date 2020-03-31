import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import SampleImage from '../assets/icons/sample.PNG';
import VenueIcon from '../assets/icons/location.png';
import CateringIcon from '../assets/icons/catering.png';
import EntertainmentIcon from '../assets/icons/entertainment.png';
import MediaIcon from '../assets/icons/media_coverage.png';
import EventDetailingIcon from '../assets/icons/event_detailing.png';
import GiveawayIcon from '../assets/icons/giveaway.png';
import Navbar from 'react-bootstrap/Navbar';

import VenueImage from '../assets/icons/venues.jpg';
import CateringImage from '../assets/icons/catering.jpg';
import EntertainmentImage from '../assets/icons/entertainment.jpg';
import MediaImage from '../assets/icons/meda-coverage.jpg';
import EventDetailingImage from '../assets/icons/event-detailing.jpg';
import E1 from '../assets/icons/event_detailing.png';
import GiveawayImage from '../assets/icons/giveaways.jpg';

import F1 from '../assets/icons/featured-toprated-01.jpg';
import F2 from '../assets/icons/featured-02.jpg';
import F3 from '../assets/icons/featured-03.jpg';
import F4 from '../assets/icons/featured-04.jpg';

import T2 from '../assets/icons/toprated-02.jpg';
import T3 from '../assets/icons/toprated-03.jpg';
import T4 from '../assets/icons/toprated-04.jpg';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

const Landing = (props) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndtDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [rememberMe, setRememberMe] =  useState(false);
    const handleLoginToSignup = () => {
        props.handleLoginClose(); 
        props.handleSignupShow();
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    const responseGoogle = (response) => {
        console.log(response);
    }
    let history = useHistory();
    const navigateAccountType = () => {
        history.push('accountType')
    }
    const navigateDashboard = () => {
        history.push('dashboard')
    }
    

    let days = [];
    let years = [];
    let months = moment.monthsShort();
    for(let i = 1; i<=31; i++){
        days.push(i);
    }
    for(let j = 1930; j<=2002; j++){
        years.push(j);
    }


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
                                        <option>For how many people?</option>
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

{/* 1st ------------------------------------------------------------------------------------------------------------- */}

            <Container fluid style={{marginTop: "60px"}}>
                <div className="mx-1">
                    
                    <div>
                        <InputGroup className=" rounded-0" style={{marginTop: "20px"}}>
                            <span className="h4">What can we help you find? &nbsp;&nbsp;&nbsp;  </span>
                            <FormControl
                                placeholder="Search"
                                aria-label="What can we help you find?"
                                aria-describedby="basic-addon2"
                                className="rounded-0 w-100 col-sm-6 col-md-4"
                            />
                            <InputGroup.Append className="rounded-0">
                                <Button variant="outline-secondary"><i className="fas fa-search rounded-0" style={{color: "black"}}></i></Button>
                                <DropdownButton
                                    as={InputGroup.Append}
                                    variant="outline-secondary"
                                    title={
                                        <i class="fas fa-sliders-h"></i>
                                    }
                                    className="rounded-0"
                                >
                                    <Dropdown.Item href="#">Price</Dropdown.Item>
                                    <Dropdown.Item href="#">Most Booked</Dropdown.Item>
                                    <Dropdown.Item href="#">Rating</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
                <CardDeck  className="mx-1 my-3">
                    <div className="col-sm-4 col-md-2 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={SampleImage} />
                            <Card.Body className="text-center">
                            
                                <Card.Title>
                                    <span>
                                        <Image variant="top" src={VenueIcon} width="50" height="auto" /><br/><b>Venues</b>
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
                                        <Image variant="top" src={CateringIcon} width="50" height="auto" /><br/><b>Catering</b>
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
                                        <Image variant="top" src={EntertainmentIcon} width="50" height="auto" /><br/><b>Entertainment</b>
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
                                        <Image variant="top" src={MediaIcon} width="50" height="auto" /><br/><b>Media Coverage</b>
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
                                        <Image variant="top" src={EventDetailingIcon} width="50" height="auto" /><br/><b>Event Detailing</b>
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
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* 2nd ------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
<br/>
            <Container fluid style={{marginTop: "20px"}}>
                <div className="mx-1 w-100">
                    <InputGroup className="w-100" style={{marginTop: "20px"}}>
                    <h4>Featured Merchants &nbsp;&nbsp;&nbsp;  </h4>
                    </InputGroup>
                </div>
                
                <CardDeck className="mx-1 my-3">
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <Image variant="top" src={VenueIcon} width="50" height="auto" /><br /><b>Boracay Hotel & Resort A</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Venue - Aklan <br/> PHP 150,000 / day<br/>400 pax </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F2} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <Image variant="top" src={CateringIcon} width="50" height="auto" /><br /><b>Heavenly Eats Catering</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Catering - Varied<br/> PHP 75,000 / day<br/>6 different foods </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F3} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <Image variant="top" src={GiveawayIcon} width="50" height="auto" /><br /><b>Peter Parker Images</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Photobooth <br/> PHP 30,000 / day<br/>500 shots </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img variant="top" src={F4} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <Image variant="top" src={E1} width="50" height="auto" /><br /><b>Succulent Flowers</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Florist <br/> PHP 1,500 / arrangement<br/>4 flower variations </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </div>
                </CardDeck>
                <div className="pt-5 pb-3 text-right h5" >
                    <a href="#" style={{color: "#959595"}} >See More Featured Merchants</a>
                </div>
            </Container>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* 3rd ---------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
<br/>
            <Container fluid style={{marginTop: "20px"}}>
                <div className="mx-1 w-100">
                    <InputGroup className="w-75" style={{marginTop: "20px"}}>
                    <h4>Top Rated - Venues &nbsp;&nbsp;&nbsp;  </h4>
                    </InputGroup>
                </div>
                <CardDeck className="mx-1 my-3">
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <Image variant="top" src={VenueIcon} width="50" height="auto" /><br /><b>Boracay Hotel & Resort A</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Venue - Aklan <br/> PHP 150,000 / day<br/>Weddings, Receptions, Gatherings </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={T2} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <Image variant="top" src={VenueIcon} width="50" height="auto" /><br /><b>Garden of Divine Word </b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Venue - Quezon City <br/> PHP 175,000 / day<br/>Weddings, Debut, Birthday</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={T3} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <Image variant="top" src={VenueIcon} width="50" height="auto" /><br /><b>San Sebastian Church</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Venue - Manila <br/> PHP 30,000 / day<br/>Weddings, Baptism </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img variant="top" src={T4} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <Image variant="top" src={VenueIcon} width="50" height="auto" /><br /><b>TGIF BGC High Street</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Venue - Taguig <br/> PHP 12,500 / night<br/>Gatherings, Meetings, Celebration </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </CardDeck>
                <div className="pt-5 pb-3 text-right h5" >
                    <a href="#" style={{color: "#959595"}} >See More Top Rated Venues</a>
                </div>
            </Container>
            <br /><br /><br /><br />
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
            <Modal show={props.loginModal} onHide={props.handleLoginClose} className="rounded-0">
                <Modal.Header closeButton className="rounded-0">
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header> 
                <Modal.Body className="rounded-0">
                    <FacebookLogin
                        appId="" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                        callback={responseFacebook}
                        cssClass="btn btn-primary btn-block rounded-0 btn-facebook "
                        
                    />
                    <GoogleLogin
                        clientId=""
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        className="w-100 rounded-0 text-center mx-auto my-3 d-flex flex-row justify-content-center align-items-center"  
                    />
                    <div className="text-center mx-auto h6 font-weight-bold my-3">or </div>
                    <Form.Control className="my-4 rounded-0" placeholder="Email" />
                    <Form.Control type="password" className="my-4 rounded-0" placeholder="Password" />
                    <Form.Check
                        custom
                        inline
                        label="Remember me"
                        value={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        type="checkbox"
                        id="custom-inline-checkbox-3"
                    />
                    <Button className="headerActionButton rounded-0 btn-block" variant="info" onClick={navigateDashboard }> Login </Button>
                    <div className="text-center my-3">
                        {/* <Link className="text-danger font-weight-bold">Forgot Password?</Link> */}
                    </div>
                    <div classsName="text-left my-2">Don't have an account? 
                        <Link onClick={handleLoginToSignup } className="text-info font-weight-bold">Sign Up</Link> 
                    </div>
                </Modal.Body>
            </Modal>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
            <Modal show={props.signupModal} onHide={props.handleSignupClose} className="rounded-0">
                <Modal.Header closeButton className="rounded-0">
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header> 
                <Modal.Body classname="rounded-0">
                    <div className="text-center">
                        Sign Up with&nbsp;
                        <Link className="text-info font-weight-bold">Facebook</Link>&nbsp;or&nbsp; 
                        <Link className="text-info font-weight-bold">Google</Link>
                    </div>
                    <div className="text-center mx-auto h6 font-weight-bold my-3">or </div>
                    <Form.Control className="my-3 rounded-0" placeholder="Email Address" />
                    <Form.Control className="my-3 rounded-0" placeholder="First Name" />
                    <Form.Control className="my-3 rounded-0" placeholder="Last Name" />
                    <Form.Control type="password" className="my-3 rounded-0" placeholder="Password" />
                    <Form.Control type="password" className="my-3 rounded-0" placeholder="Confirm Password" />
                    <h6>Birthday</h6>
                    <div>
                        <small>To signup, you need to be at least 18. Other people who use TEP won't see your birthday.</small>
                    </div>
                    <div>
                        <Form.Row>
                            <Col>
                                <Form.Control inline as="select" className="my-1">
                                    <option>Month</option>
                                    {
                                        months.map((month) => <option>{month}</option>)
                                    }
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control inline as="select" className="my-1">
                                    <option>Day</option>
                                    {
                                        days.map((day) => <option>{day}</option>)
                                    }
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control inline as="select" className="my-1">
                                    <option>Year</option>
                                    {
                                        years.map((year) => <option>{year}</option>)
                                    }
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </div>
                    <div className="my-3">
                        <Form.Check
                            custom
                            inline
                            label={<span>I hereby agree on The Event Planner's <u>Terms and Conditions</u></span>}
                            value={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            type="checkbox"
                            id="custom-inline-checkbox-3"
                        />
                    </div>
                    <Button 
                        onClick={navigateAccountType} 
                        className="headerActionButton rounded-0 btn-block" 
                        variant="info"> 
                            Signup 
                    </Button>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default Landing
