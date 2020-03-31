import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Badge, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts'
import ListGroup from 'react-bootstrap/ListGroup'
import Donut from 'react-svg-donuts';
import { Doughnut } from 'react-chartjs-2';


import SampleImage from '../assets/icons/sample.PNG';
import SampleIcon from '../assets/icons/catering.png';
import InputGroup from 'react-bootstrap/InputGroup';

import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import VenueIcon from '../assets/icons/location.png';
import CateringIcon from '../assets/icons/catering.png';
import EntertainmentIcon from '../assets/icons/entertainment.png';
import MediaIcon from '../assets/icons/media_coverage.png';
import EventDetailingIcon from '../assets/icons/event_detailing.png';
import GiveawayIcon from '../assets/icons/giveaway.png';


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

  const donutChart = {
    series: [10700, 40112, 7098, 6488],
    labels: ['MyService 1', 'MyService 2', 'MyService 3', 'MyService 4'],
    responsive: [{
      breakpoint: 1000,
      options: {
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true
                },
                size: '150%'
              }
            }
          }
        },
        legend: {
          position: "bottom"
        }
      }
    }],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 960,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      
      plotOptions: {
        pie: {
          customScale: 1.0,
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              },
              size: '150%'
            }
          }
        }
      },
    },
  };

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
          <Container fluid style={{marginTop:"90px"}}>
            <h2>Dashboard</h2>
            <CardDeck className="mx-1">
                <div className="col-md-2 mx-0 px-2">
                  <Card className="px-0 mx-1 h-100 rounded-0" >
                    <Card.Body text="black"  className="pb-0  px-2" style={{ backgroundColor: "#E8F6F7" }}>
                      <Card.Title>
                        <span className="h3"><b>4</b></span><br /> 
                        <small>Services</small>
                      </Card.Title>
                      
                    </Card.Body>
                    <Card.Footer>
                      <a href="#" style={{color: "black", textDecoration: "none"}} className="d-flex justify-content-between">
                        {'View Details'}
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
                <div className="col-md-2 mx-0 px-2">
                  <Card className="px-0 mx-1 h-100 rounded-0" >
                    <Card.Body className="pb-0  px-2" style={{ color:"white", backgroundColor: "#2B91AA" }}>
                      <Card.Title >
                        <span className="h3"> <b>0</b> </span><br />                      
                        <small >Events this week</small>
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <a href="#" style={{color: "black", textDecoration: "none"}} className="d-flex justify-content-between">
                        {'View Details'}
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
                <div className="col-md-2 mx-0 px-2">
                  <Card className="px-0 mx-1 h-100 rounded-0" >
                    <Card.Body text="black"  className="pb-0  px-2" style={{ backgroundColor: "#F4F2EA" }}>
                      <Card.Title>
                        <span className="h3"><b>12</b></span><br/>
                        <small>Pending Bookings</small> 
                      </Card.Title>

                    </Card.Body>
                    <Card.Footer>
                      <a href="#" style={{color: "black", textDecoration: "none"}} className="d-flex justify-content-between">
                        {'View Details'}
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
                <div className="col-md-2 mx-0 px-2">
                  <Card  className="px-0 mx-1 h-100 rounded-0"  >
                    <Card.Body  text="white" className="pb-0  px-2" style={{color:"white", backgroundColor: "#838383"}}>
                      <Card.Title>
                        <span className="h3"><b>4.8</b> </span> <br />
                        <small>Customer Ratings</small>  
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <a href="#" style={{color: "black", textDecoration: "none"}} className="d-flex justify-content-between">
                        {'View Details'}
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
                <div className="col-md-2 mx-0 px-2">
                  <Card className="px-0 mx-1 h-100 rounded-0"  >
                    <Card.Body text="black" className="pb-0  px-2" style={{backgroundColor: "#FCD997"}}>
                      <Card.Title>
                        <span className="h3"><b>2</b></span><br />
                        <small>Service/s marked as favorite</small>
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <a href="#" style={{color: "black", textDecoration: "none"}} className="d-flex justify-content-between">
                        {'View Details'}
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
                <div className="col-md-2 mx-0 px-2">
                  <Card  className="px-0 mx-1 h-100 rounded-0"  >
                    <Card.Body  className="pb-0 px-2" style={{color:"white", backgroundColor: "#51729F"}}>
                      <Card.Title text="white">
                        <span className="h3"> <b>&#8369; 82,278.00</b> </span><br />
                        <small>Earned with TEP</small>
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <a href="#" style={{color: "black", textDecoration: "none"}} className="d-flex justify-content-between">
                        {'View Details'}
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
            </CardDeck>
            <Row className="mt-5">
                <div className="col-lg-8 order-2 order-md-1">
                  <div className="border-bottom mb-5">
                    <div className="d-flex flex-row mb-3">
                      <span className="h4 mr-auto">Most Viewed Products/Services</span>
                      <FormControl as="select" className="col-6 col-sm-4 col-md-3">
                        <option>This month</option>
                      </FormControl>
                    </div>
                    <Table>
                      <thead style={{backgroundColor:"lightGray"}}>
                        <tr>
                          <th colspan="2">Product/Service</th>
                          <th>Clicks</th>
                          <th>Improvement From Previous</th>
                          <th>Favorite Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td  style={{verticalAlign: "middle"}} className="py-4"><Image src={CateringIcon} width="50" height="auto" /></td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25">MyService #1 </td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25">300</td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25" style={{color: "green", fontWeight: "bold"}}>100</td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25" style={{color: "green", fontWeight: "bold"}}>77</td>
                        </tr>
                        <tr>
                          <td  style={{verticalAlign: "middle"}} className="py-4"><Image src={EventDetailingIcon} width="50" height="auto" /></td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25">MyService #2 </td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25">300</td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25" style={{color: "green", fontWeight: "bold"}}>100</td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25" style={{color: "green", fontWeight: "bold"}}>61</td>
                        </tr>
                        <tr>
                          <td  style={{verticalAlign: "middle"}} className="py-4"><Image src={CateringIcon} width="50" height="auto" /></td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25">MyService #3 </td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25">300</td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25" style={{color: "green", fontWeight: "bold"}}>100</td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25" style={{color: "green", fontWeight: "bold"}}>48</td>
                        </tr>
                        <tr>
                          <td  style={{verticalAlign: "middle"}} className="py-4"><Image src={EventDetailingIcon} width="50" height="auto" /></td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25">MyService #4 </td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25">300</td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25" style={{color: "green", fontWeight: "bold"}}>100</td>
                          <td  style={{verticalAlign: "middle"}} className="py-4 w-25" style={{color: "green", fontWeight: "bold"}}>26</td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-center my-3">
                      <a href="#">See more</a>
                    </div>
                  </div>
                  <div className="borde mb-5">
                    <div className="d-flex flex-row mb-3">
                      <span className="h4 mr-auto">Sales Distribution</span>
                      <FormControl as="select" className="col-6 col-sm-4 col-md-3">
                        <option>This month</option>
                      </FormControl>
                    </div>
                    <div className="d-flex justify-content-center text-center my-5 py-2">
                      {/* <Doughnut data={...} /> */}
                      {/* <Chart options={donutChart.options} series={donutChart.series} type="donut" width="380" /> */}
                    </div>
                    <div className="d-flex justify-content-center my-3">
                      <a href="#">See more</a>
                    </div>
                  </div>

                  
                </div>
                <div className="col-lg-4 order-1 order-md-2">
                  <Col className="px-0 mx-0">
                    <Card border="secondary">
                      <Card.Body className="px-2 pb-1 mx-2">
                        <Card.Title>
                          <span className="h5">Messages</span>{' '}
                          <Badge pill variant="danger" style={{color: "white"}} > 1 </Badge>
                        </Card.Title>
                        <Card border="secondary my-2" >
                          <Card.Body>
                            <Card.Title className="d-flex flex-row align-items-center">
                              <i class="fas fa-2x fa-user-circle"></i>&nbsp;&nbsp;
                              {'John L. Doe'} 
                              <small className="ml-auto font-weight-bold">3 hours ago</small>
                            </Card.Title>
                            <Card.Text style={{fontStyle:"italic"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Card.Text>
                          </Card.Body>
                        </Card>
                        <div className="d-flex justify-content-end mt-2"><u>See All</u></div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="px-0 mx-0 mt-4">
                    <Card border="secondary">
                      <Card.Body className="px-2 pb-1 mx-2">
                        <Card.Title>
                          <span className="h5">Customer Reviews</span>{' '}
                          <Badge pill variant="danger" style={{color: "white"}} > 2 </Badge>
                        </Card.Title>
                        <Card border="secondary my-2" >
                          <Card.Body>
                            <Card.Title className="d-flex flex-row align-items-center">
                              <i class="fas fa-2x fa-user-circle"></i>&nbsp;&nbsp;
                              <div>
                                {'John L. Doe'}<br />
                                <small>{'July 20, 2019'}</small>
                              </div>
                              <small className="ml-auto font-weight-bold">
                                <i class="text-warning fas fa-star"></i>
                                <i class="text-warning fas fa-star"></i>
                                <i class="text-warning fas fa-star"></i>
                                <i class="text-warning fas fa-star"></i>
                                <i class="text-warning fas fa-star"></i>
                              </small>
                            </Card.Title>
                            
                            <Card.Text style={{fontStyle:"italic"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card border="secondary my-2" >
                          <Card.Body>
                            <Card.Title className="d-flex flex-row align-items-center">
                              <i class="fas fa-2x fa-user-circle"></i>&nbsp;&nbsp;
                              <div>
                                {'Joanna L. Dee'}<br />
                                <small>{'July 20, 2019'}</small>
                              </div>
                              <small className="ml-auto font-weight-bold">
                                <i class="text-warning fas fa-star"></i>
                                <i class="text-warning fas fa-star"></i>
                                <i class="text-warning fas fa-star"></i>
                                <i class="text-warning fas fa-star"></i>
                                <i class="text-warning fas fa-star"></i>
                              </small>
                            </Card.Title>
                            
                            <Card.Text style={{fontStyle:"italic"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Card.Text>
                          </Card.Body>
                        </Card>
                        <div className="d-flex justify-content-end mt-2"><u>See All</u></div>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
            </Row>
            {/* <BarChart data={data}  /> */}

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
