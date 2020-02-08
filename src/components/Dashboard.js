import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import PieChart from 'react-minimal-pie-chart';
import DonutChart from 'react-donut-chart';
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'
import Donut from 'react-svg-donuts';
import BarChart from "react-svg-bar-chart"


const Landing = (props) => {

    const [newDate, setNewDate] = useState(new Date())

    const onChange = newDate => setNewDate(newDate);

    const dataPie = [
    {value: 100, stroke: "#22594e", strokeWidth: 6},
    {value: 60, stroke: "#2f7d6d"},
    {value: 30, stroke: "#3da18d"},
    {value: 20, stroke: "#69c2b0"},
    {value: 10, stroke: "#a1d9ce"},
  ];

  // The donut will be half filled
const progress = 50;
 
// The value will be wrapped inside a <strong> tag.
const renderProgress = progress => <strong>{progress}%</strong>;


const data = []
  
for (let x = 1; x <= 30; x++) {
    data.push({x: x, y: Math.floor(Math.random() * 100)})
}
    return (
        <>
            <div className="fill-height">
                    {/* <Col xs={12} sm={8} md={6} lg={4} className="mx-xs-1 mx-md-5" style={{marginTop:"50px"}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Book your event needs in one place</Card.Title>
                                    <Form.Control as="select" className="my-4">
                                        <option>MAINE What are we celebrating about?</option>
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
                    </Col> */}
                
                {/* <PieChart
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
                />; */}



<ListGroup horizontal className="mb-2" cborderColor="white" style={{marginTop: "80px"}}>
<ListGroup.Item> 
  <Card bg="primary" text="white" style={{ width: '20rem' }}>
    <Card.Body>
      <Card.Text>
       <font size="6"> <b>0</b> </font> <br/>
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{ width: '18rem', color: 'white' }}><font size="4"><b>Events this week</b></font></Card.Footer>
  </Card>
  <br />
  </ListGroup.Item>
  <ListGroup.Item>
  <Card bg="secondary" text="white" style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Text>
       <font size="6"> <b>12</b> </font> <br/>
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{ width: '18rem', color: 'white' }}><font size="4"><b>Pending Bookings</b></font></Card.Footer>
  </Card>
  <br />
  </ListGroup.Item>
  <ListGroup.Item>
  <Card bg="success" text="white" style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Text>
       <font size="6"> <b>4.8</b> </font> <br/>
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{ width: '18rem', color: 'white' }}><font size="4"><b>Customer Ratings</b></font></Card.Footer>
  </Card>
  <br />
  </ListGroup.Item>
  <ListGroup.Item>
  <Card bg="danger" text="white" style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Text>
       <font size="6"> <b>14</b> </font> <br/>
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{ width: '18rem', color: 'white' }}><font size="4"><b>Services marked as favorite</b></font></Card.Footer>
  </Card>
  <br />
  </ListGroup.Item>
  <ListGroup.Item>
  <Card bg="warning" text="white" style={{ width: '20rem' }}>
  <Card.Body>
      <Card.Text>
       <font size="6"> <b>Php 82,278.00</b> </font> <br/>
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{ width: '18rem', color: 'white' }}><font size="4"><b>Earned with TEP</b></font></Card.Footer>
  </Card>
  <br />
  </ListGroup.Item>
  </ListGroup>

  <Donut progress={progress} onRender={renderProgress} />

<BarChart data={data}  />

  <Table >
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</Table>



  <Table >
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</Table>

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
