import React, { useState } from "react";
import Logs from '../Videospages/logo.jpg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import './game.css';
import { gamesData } from "./games";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Games() {
    const [gameDatas]=useState(gamesData);
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
                    <Col lg={3}  className="mt-0">
                        <div>
                            <div className="videos_Sections_game">
                                <div className="aa"><h4 className="vi">Groups</h4><span className="icons12"><i class="bi bi-gear-fill"></i></span></div>

                                <div>
                                    <div className="search11" ><i className="fa fa-search" aria-hidden="true"></i>
                                        <input className="input_search11" type="text" placeholder="Search..." /></div>
                                </div>

                                <div>
                                    <div className="list">
                                        <div className="vsual1 "><i class="bi bi-tv-fill active1"></i><span className="spa">Play Games</span></div>
                                        <div className="vsual1"><i class="bi bi-camera-video-fill"></i><span className="spa">Notifications</span></div>
                                        
                                        
                                    </div>
                                    <div className="bode1"></div>
                                    
                                    <div className="mt-4 ">
                                        <h5 className="p-2">Your Games <span className="call">See all</span></h5>
                                        <p className="p-2">Facebook (sometimes shortened to FB) is a social networking service and website started in</p>
                                        <div className="vssu"><i class="bi bi-bookmark-fill"></i><span className="spa">Notifications</span></div>
                                    </div>
                                    </div>
                            <div className="bode1"></div>

                            <div className="groups_all">
                                   <div className="groups_le">
                                      <h5 className="mx-3">Categories</h5>
                                   </div>
                                   <div className="allGames_icons">
                                        <div className="game_ikus"><i class="bi bi-controller"></i><span className="spa">All games</span></div>
                                        <div className="game_ikus"><i class="bi bi-arrow-right-circle"></i><span className="spa">Action</span></div>
                                        <div className="game_ikus"><i class="bi bi-plus-square-fill"></i><span className="spa">Adventure</span></div>
                                        <div className="game_ikus"><i class="bi bi-binoculars-fill"></i><span className="spa">Arcade</span></div>
                                        <div className="game_ikus"><i class="bi bi-align-middle"></i><span className="spa">Battle</span></div>
                                        <div className="game_ikus"><i class="bi bi-align-bottom"></i><span className="spa">Board</span></div>
                                        <div className="game_ikus"><i class="bi bi-bank"></i><span className="spa">Builder</span></div>
                                        <div className="game_ikus"><i class="bi bi-card-image"></i><span className="spa">Card</span></div>
                                        <div className="game_ikus"><i class="bi bi-backpack3-fill"></i><span className="spa">Casion</span></div>
                                        <div className="game_ikus"><i class="bi bi-badge-hd-fill"></i><span className="spa">Design</span></div>
                                        <div className="game_ikus"><i class="bi bi-code-square"></i><span className="spa">Match</span></div>
                                        <div className="game_ikus"><i class="bi bi-binoculars-fill"></i><span className="spa">Merge</span></div>
                                        <div className="game_ikus"><i class="bi bi-tv-fill "></i><span className="spa">Puzzle</span></div>
                                        <div className="game_ikus"><i class="bi bi-binoculars-fill"></i><span className="spa">Quick-Play</span></div>
                                        <div className="game_ikus"><i class="bi bi-align-middle"></i><span className="spa">Quiz and trivia</span></div>
                                        <div className="game_ikus"><i class="bi bi-bank"></i><span className="spa">Raceing</span></div>
                                        <div className="game_ikus"><i class="bi bi-tv-fill "></i><span className="spa">Role-Playing</span></div>
                                        <div className="game_ikus"><i class="bi bi-tv-fill "></i><span className="spa">Runners</span></div>
                                        <div className="game_ikus"><i class="bi bi-bank"></i><span className="spa">Simulations</span></div>
                                        <div className="game_ikus"><i class="bi bi-tv-fill "></i><span className="spa">Solitaire</span></div>
                                        <div className="game_ikus"><i class="bi bi-tv-fill "></i><span className="spa">Sport</span></div>
                                        <div className="game_ikus"><i class="bi bi-controller"></i><span className="spa">Word</span></div>
                                        
                                   </div>
                            </div>

                            </div>
                        </div>
                    </Col>

                    <Col lg={9} >
                    <Row>
                          {
                          
                            gameDatas.map(game =>(
                                <Col lg={3}>
                                    <Row>
                                    <Card style={{width:'240px',height:'250px' ,backgroundColor:'rgb(32, 32, 32)'}} className="mt-3">
                                        <Card.Img variant="top" src={game.imgurl} alt="" width={230} height={200} className="px-0"/>
                                        <Card.Body>
                                            <Card.Title className="titles1234">{game.title}</Card.Title>
                                            <div className="but">{game.name}</div>
                                           
                                        </Card.Body>
                                        </Card>
                                        </Row>
                                </Col>
                                     
                                     
                             )) 
                          }
                         </Row>
                    </Col>
                </Row>
            </Container>

        </>

    )
}
export default Games