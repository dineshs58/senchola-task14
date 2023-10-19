import React, { useState } from "react";
import Logs from '../Videospages/logo.jpg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import './video.css';
import { datas } from "./datas";
import Card from 'react-bootstrap/Card';


function Videos() {
    const [data] = useState(datas);
  
    return (
        <>
            <div className='detail'>
                <div className="header_section " id="navbar1234">
                    <div className="left_head">
                        <img src={Logs} width="50px" height="50px" alt='tele' id="images1" />
                        <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>

                    </div>
                    <div className="center_head">
                        <ul>
                            <li className="active"><a href=""><i className="fa fa-home" aria-hidden="true" title="HOME"></i></a></li>
                            <li><i className="fa fa-television" aria-hidden="true" title="WHATCH"></i></li>
                            <li><i className="fa fa-users" aria-hidden="true" title="GROUPS"></i></li>
                            <li><i className="fa fa-gamepad" aria-hidden="true" title="GAMES"></i></li>
                        </ul>
                    </div>
                    <div className="right_head ">
                        <ul>
                            <li><i class="bi bi-grid-3x3-gap-fill"></i></li>
                            <li><i className="fa fa-commenting" aria-hidden="true" title="MESSAGES"></i></li>
                            <li><i className="fa fa-bell-o" aria-hidden="true" title="NOTIFICATION"></i></li>
                            <li><Link to='/login'><img src={require('../Components/images/2.jpg')} className='loves' alt='tele' /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Container fluid>
                <Row>
                    <Col lg={4} md={12} className="mt-0">
                        <div>
                            <div className="videos_Sections">
                                <div className="aa"><h4 className="vi">Videos</h4><span className="icons12"><i class="bi bi-gear-fill"></i></span></div>

                                <div>
                                    <div className="search1" ><i className="fa fa-search" aria-hidden="true"></i>
                                        <input className="input_search1" type="text" placeholder="Search..." /></div>
                                </div>

                                <div>
                                    <div className="list">
                                        <div className="vsual "><i class="bi bi-tv-fill active1"></i><span className="spa">Home</span></div>
                                        <div className="vsual"><i class="bi bi-camera-video-fill"></i><span className="spa">Live</span></div>
                                        <div className="vsual"><i class="bi bi-archive-fill"></i><span className="spa">Reels</span></div>
                                        <div className="vsual"><i class="bi bi-easel3-fill"></i><span className="spa">Shows</span></div>
                                        <div className="vsual"><i class="bi bi-arrow-up-right-circle-fill"></i><span className="spa">Explores</span></div>
                                        <div className="vsual"><i class="bi bi-bookmark-fill"></i><span className="spa">Saved Videos</span></div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </Col>

                    <Col lg={7} md={12} >
                        {
                            data.map(u => (

                                <Card className="mt-3">
                                    <div className="fel">
                                        <img src={u.image} className="profile_images1" alt="" />  <span><i class="bi bi-three-dots"></i></span>
                                        <div className="poss">
                                            <h4 className="titles">{u.title}</h4>
                                            <p>4 October  2 30</p>
                                        </div>

                                    </div>


                                    <Card.Img variant="top" src={u.image} className="images_cards" />
                                  
                                    <Card.Body>
                                        <Card.Title>
                                            <div className="icon_kus">
                                                <h5><i class="bi bi-hand-thumbs-up"></i> 14</h5>
                                                <h5><i class="bi bi-chat"></i> 50</h5>
                                                <h5><i class="bi bi-share"></i> 60</h5>
                                                <h6>Views {u.rating.count}</h6>
                                            </div>
                                        </Card.Title>

                                    </Card.Body>
                                </Card>

                            ))
                        }
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Videos