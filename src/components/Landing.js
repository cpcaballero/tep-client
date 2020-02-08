import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

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
