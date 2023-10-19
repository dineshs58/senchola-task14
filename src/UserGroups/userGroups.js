import React, { useState } from "react";
import Logs from '../Videospages/logo.jpg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import './user.css';
import { UserDatas } from "./usersData";
import Card from 'react-bootstrap/Card';



function Users() {
    const [Datas_sec]=useState(UserDatas);
    return (
        <>

            <div className='detail'>
                <div className="header_section " id="navbar123">
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
                            <div className="videos_Sections1">
                                <div className="aa"><h4 className="vi">Groups</h4><span className="icons12"><i class="bi bi-gear-fill"></i></span></div>

                                <div>
                                    <div className="search1" ><i className="fa fa-search" aria-hidden="true"></i>
                                        <input className="input_search1" type="text" placeholder="Search..." /></div>
                                </div>

                                <div>
                                    <div className="list">
                                        <div className="vsual "><i class="bi bi-tv-fill active1"></i><span className="spa">Your feed</span></div>
                                        <div className="vsual"><i class="bi bi-camera-video-fill"></i><span className="spa">Discover</span></div>
                                        <div className="vsual"><i class="bi bi-archive-fill"></i><span className="spa">Your groups</span></div>
                                        
                                    </div>
                                    <div className="text-center mt-4 back">
                                        <h5><i class="bi bi-plus"></i>  Create New Group</h5>
                                    </div>
                                    </div>
                            <div className="bode"></div>

                            <div className="groups_all">
                                   <div className="groups_le">
                                      <h5 className="mx-3">Group You've Joine<span className="spans_le">See all</span></h5>
                                   </div>
                            </div>

                            <div>
                            {
                            Datas_sec.map(user => (

                               
                                    <div className="fel">
                                        <img src={user.image} className="profile_images1" alt="" />  <span><i class="bi bi-chevron-down"></i></span>
                                        <div className="poss">
                                            <h4 className="titles12">{user.title}</h4>
                                            <p>4 October  2 30</p>
                                        </div>

                                    </div>
                                
                            ))
                        }

                            </div>

                            </div>

                          

                        </div>
                    </Col>

                    <Col lg={7} md={12} >
                        <h5 className="text-gray">Recent activity</h5>
                        {
                            Datas_sec.map(user => (

                                <Card className="mt-3">
                                    <div className="fel">
                                        <img src={user.image} className="profile_images1" alt="" />  <span><i class="bi bi-three-dots"></i></span>
                                        <div className="poss">
                                            <h4 className="titles">{user.title}</h4>
                                            <p>4 October  2 30</p>
                                        </div>

                                    </div>


                                    <Card.Img variant="top" src={user.image} className="images_cards" />
                                    <Card.Body>

                                        <div className="mx-3"><i class="bi bi-hand-thumbs-up-fill"></i> 14</div>
                                        <div className="bots1234"></div>
                                    <div className="icon_kus">
                                        <h5><i class="bi bi-hand-thumbs-up"></i>  Like 14</h5>
                                        <h5><i class="bi bi-chat"></i>  Commend 50</h5>
                                        
                                    </div>
                                    <div className="bots1234"></div>

                                        <Card.Title>
                                            <div className="icon_kus">
                                                <h5><i class="bi bi-hand-thumbs-up"></i>  Like 14</h5>
                                                <h5><i class="bi bi-chat"></i>  Commend 50</h5>
                                                <h5><i class="bi bi-share"></i>  Share 60</h5>
                                                <h6>Views {user.rating.count}</h6>
                                            </div>
                                            <div className="input_levels">
                                                <div className="searchs">
                                                    <img className="profile_images1" src={user.image} alt='' />
                                                </div>
                                                <div id="Ground"><i class="bi bi-search"></i><input type='text' placeholder="Search...." /><i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile-fill"></i>  <i class="bi bi-emoji-smile-upside-down-fill"></i>  <i class="bi bi-heart-fill"></i></div>
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
export default Users