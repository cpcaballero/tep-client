import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Landing = (props) => {

    const [newDate, setNewDate] = useState(new Date())

    const onChange = newDate => setNewDate(newDate);

    


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
                                    <Form.Row>
                                        <Form.Control as="date" placeholder="When will it be?" />
                                    </Form.Row>
                                    <Row>
                                        <Col>
                                            <DateTimePicker
                                                onChange={onChange}
                                                value={newDate}
                                            />
                                        </Col>
                                        <Col>
                                            <DateTimePicker
                                                onChange={onChange}
                                                value={newDate}
                                            />
                                        </Col>
                                    </Row>
                                    <DatePicker onChange={onChange}/>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                


                {/* <div className="text">
                    <span className="title">Coding Classes for All</span>
                    <span className="subtitle">KIDS TO PROFESSIONALS</span>
                    <Button className="headerActionButton" variant="light" size="lg"> Learn More </Button>
                </div> */}
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
