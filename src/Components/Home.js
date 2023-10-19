import React from 'react';
import './Home.css';
import Logo from '../Components/images/logo.jpg';
import {Link} from 'react-router-dom';



const Home = () => {
  return (
    <>
   
    <div className='detail'>
    <div className="header_section " id="navbar">
    <div className="left_head">
        <img src={Logo} width="50px" height="50px" alt='tele' id="images1" />
        <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
        
        </div>
    <div className="center_head">
        <ul>
            <Link to=''><li className="active"><i className="fa fa-home" aria-hidden="true" title="HOME"></i></li></Link>
            <Link to="/video"><li><i className="fa fa-television" aria-hidden="true" title="WHATCH"></i></li></Link>
            <Link to="/group"><li><i className="fa fa-users" aria-hidden="true" title="GROUPS"></i></li></Link>
            <Link to="/gameslevels"><li><i className="fa fa-gamepad" aria-hidden="true" title="GAMES"></i></li></Link>
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


<div className="full_details">
        <div className="left_side">
            <div className="lists">
            
                <div className="profile"><img src={require('../Components/images/3.jpg')} /><span className='span1'>Dinesh S</span></div>
                <div className="b profile1"><i class="bi bi-people-fill"></i><span className='span1'>Friends</span></div>
                <div className="c profile1"><i class="bi bi-bookmark-fill"></i><span className='span1'>Saved</span></div>
                <div className="d profile1"><i class="bi bi-stopwatch"></i><span className='span1'>Memories</span></div>
                <div className="e profile1"><i class="bi bi-people-fill"></i><span className='span1'>Groups</span></div>
                <div className="f profile1"><i class="bi bi-play-btn"></i><span className='span1'>Videos</span></div>
                <div className="g profile1"><i class="bi bi-shop"></i><span className='span1'>Marketplaces</span></div>
                <div className="h profile1"><i class="bi bi-building-lock"></i><span className='span1'>Feeds</span></div>
                <div className="i profile1"><i class="bi bi-calendar2-event-fill"></i><span className='span1'>Events</span></div>
                <div className="j profile1"><i class="bi bi-reception-4"></i><span className='span1'>Ads Manager</span></div>
                <div className="k profile1"><i class="bi bi-heart-fill"></i><span className='span1'>Foundaries</span></div>
                <div className="l profile1"><i class="bi bi-caret-down-fill"></i><span className='span1'>See More</span></div>
                
            </div>
        </div>
    </div>


    <div className="center_side">
            <div className="centrbox">
                {/* <div className="header">
                    <a className="active" href=""><i className="fa fa-book" aria-hidden="true"></i>Stories</a>
                    <a href=""><i className="fa fa-window-restore" aria-hidden="true"></i>Reels</a>
                    <a href=""><i className="fa fa-video-camera" aria-hidden="true"></i>Rooms</a>
                </div> */}
                <div className="borders"></div> 
                 <div className="boxcount_1">
                    <div className="box1">
                        <img src={require('../Components/images/7.jpg')} className='satus' alt=''/>
                        <div className='status_names'>
                        <h4>DiNESH</h4>
                        <p>Mass</p>
                        </div>
                    </div>
                    <div className="box2">
                        <img src={require('../Components/images/8.jpeg')} className='satus' alt=''/>
                        <div className='status_names'>
                        <h4>Ramesh</h4>
                        <p>Talent Boys</p>
                        </div>
                    </div>
                    <div className="box3">
                        <img src={require('../Components/images/5.jpg')} className='satus' alt=''/>
                        <div className='status_names'>
                        <h4>Praveen</h4>
                        <p>Daty Boy</p>
                        </div>
                    </div>
                    <div className="box4">
                        <img src={require('../Components/images/6.jpg')} className='satus' alt=''/>
                        <div className='status_names'>
                        <h4>Kumar</h4>
                        <p>Smart Boy</p>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="next_box">
                <div className="left_head">
                    <a href="" id="images1"><img src={require('../Components/images/2.jpg')} width="50px" height="50px" /></a>
                    <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                     
               </div>
                <div className="borders1"></div>
                <div className="header1">
                    <a className="active" href=""><i class="fa fa-video-camera" aria-hidden="true"></i> Live Videos</a>
                    <a href=""><i class="bi bi-file-image"></i>Photo/Videos</a>
                    <a href=""><i class="fa fa-smile-o" aria-hidden="true"></i>Feeling/Activite</a>
                </div>
            </div>

            <div className="box_content">
                <div className="centerhead">
                    <a href="" id="images1"><img src={require('../Components/images/2.jpg')} width="50px" height="50px" /></a>
                    <div className="name12" >
                        <h3 className='names'>Arun <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3>
                        <p className='parais'>June 17 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                {/* <div className="borders2"></div> */}
                <div className="images_boxes">
                    <img src={require('../Components/images/2.jpg')} width="100%" height="400px"  />
                </div>
                <div className="borders2"></div>
                <div className="likes">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="likes1">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="left_head">
                    <a href="" id="images1"><img src={require('../Components/images/6.jpg')} width="50px" height="50px"/></a>
                    <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                </div>
            </div>
<br></br>
            <div className="centrbox">
                <div className="boxcount_1">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                 </div>
                 
            </div>

            <div className="box_content">
               <h4>Suggested for you</h4>
                <div className="borders2"></div>
                <div className="centerhead">
                    <a href="" id="images1"><img src={require('../Components/images/6.jpg')} width="50px" height="50px" /></a>
                    <div className="name12" >
                        <h3 className='names'>Kumar <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3>
                        <p className='parais' >Aug 01 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                    <div className="borders2"></div>
                    <div className="images_boxes">
                        <img src={require('../Components/images/6.jpg')} width="100%" height="400px" />
                    </div>
                    <div className="borders2"></div>
                    <div className="likes">
                        <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i> <i className="fa fa-share" aria-hidden="true">8  Share</i></span></a>
                    </div>
                <div className="borders2"></div>

                <div className="likes1">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span><span><i className="fa fa-share" aria-hidden="true">Share</i></span></a>
                </div>
            </div>
            <div className="box_content">
                <h4>Suggested for you</h4>
                 <div className="borders2"></div>
                 <div className="centerhead">
                     <a href="" id="images1"><img src={require('../Components/images/7.jpg')} width="50px" height="50px" /></a>
                     <div className="name12" >
                         <a href=""><h3>Ramesh  <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                         <p>June 17 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                     </div>
                 </div>
                     <div className="borders2"></div>
                     <div className="images_boxes">
                         <img src={require('../Components/images/7.jpg')} width="100%" height="400px" />
                     </div>
                     <div className="borders2"></div>
                     <div className="likes">
                         <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i> <i className="fa fa-share" aria-hidden="true">8  Share</i></span></a>
                     </div>
                 <div className="borders2"></div>
 
                 <div className="likes1">
                     <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span></a>
                 </div>
             </div>
             <div className="box_content">
                <h4>Suggested for you</h4>
                 <div className="borders2"></div>
                 <div className="centerhead">
                     <a href="" id="images1"><img src={require('../Components/images/8.jpeg')} width="50px" height="50px" /></a>
                     <div className="name12" >
                         <a href=""><h3>Karthick<span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                         <p>May 30 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                     </div>
                 </div>
                     <div className="borders2"></div>
                     <div className="images_boxes">
                         <img src={require('../Components/images/8.jpeg')} width="100%" height="400px" />
                     </div>
                     <div className="borders2"></div>
                     <div className="likes">
                         <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Kathir And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i> <i className="fa fa-share" aria-hidden="true">8  Share</i></span></a>
                     </div>
                 <div className="borders2"></div>
 
                 <div className="likes1">
                     <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span><span><i className="fa fa-share" aria-hidden="true">Share</i></span></a>
                 </div>
             </div>

             <div className="box_content">
                <div className="centerhead">
                    <a href="" id="images1"><img src={require('../Components/images/4.jpg')} width="50px" height="50px" /></a>
                    <div className="name12" >
                        <a href=""><h3>Praveen <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                        <p>October 19 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                <div className="borders2"></div>
                <div className="images_boxes">
                    <img src={require('../Components/images/4.jpg')} width="100%" height="400px"/>
                </div>
                <div className="borders2"></div>
                <div className="likes">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="likes1">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="left_head">
                    <a href="" id="images1"><img src={require('../Components/images/8.jpeg')} width="50px" height="50px" /></a>
                    <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                </div>
            </div>


            <div className="centrbox">
                <div className="boxcount_1">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                 </div>
            </div>



            <div className="box_content">
                <div className="centerhead">
                    <a href="" id="images1"><img src={require('../Components/images/7.jpg')} width="50px" height="50px" /></a>
                    <div className="name12" >
                        <a href=""><h3>Sekar <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                        <p>May 20 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                <div className="borders2"></div>
                <div className="images_boxes">
                    <img src={require('../Components/images/6.jpg')} width="100%" height="400px" /> 
                </div>
                <div className="borders2"></div>
                <div className="likes">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="likes1">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="left_head">
                    <a href="" id="images1"><img src={require('../Components/images/6.jpg')} width="50px" height="50px" /></a>
                    <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                </div>
            </div>
        </div>  


        <div className="right_side">
            <div className="icons">
              <div className="heading"><h3>Contacts</h3></div>
              <div className="save">
                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </div> 
            </div>
            <div className="lis">
                <div className="profile"><img src={require('../Components/images/6.jpg')} /><span>Dinesh</span></div>
                <div className="profile"><img src={require('../Components/images/2.jpg')} /><span>Ramesh</span></div>
                <div className="profile"><img src={require('../Components/images/3.jpg')} /><span>Kumar</span></div>
                <div className="profile"><img src={require('../Components/images/4.jpg')} /><span>Rajesh</span></div>
                <div className="profile"><img src={require('../Components/images/5.jpg')} /><span>Chandrapandi</span></div>
                <div className="profile"><img src={require('../Components/images/6.jpg')} /><span>kaviya</span></div>
                <div className="profile"><img src={require('../Components/images/7.jpg')} /><span>Muthu</span></div>
                <div className="profile"><img src={require('../Components/images/8.jpeg')} /><span>Siva prakash</span></div>
                <div className="profile"><img src={require('../Components/images/1.jpg')}/><span>Suresh</span></div>
                <div className="profile"><img src={require('../Components/images/2.jpg')}/><span>Nivas</span></div>
                <div className="profile"><img src={require('../Components/images/3.jpg')}/><span>keneshwara</span></div>
                <div className="profile"><img src={require('../Components/images/4.jpg')} /><span>Praveena</span></div>
                <div className="profile"><img src={require('../Components/images/5.jpg')} /><span>Gayathri</span></div>
                <div className="profile"><img src={require('../Components/images/6.jpg')} /><span>Sakthivel</span></div>
                <div className="profile"><img src={require('../Components/images/7.jpg')} /><span>Akash</span></div>
                <div className="profile"><img src={require('../Components/images/8.jpeg')} /><span>Amritha</span></div>
                <div className="profile"><img src={require('../Components/images/3.jpg')} /><span>Suvithra.S</span></div>
                <div className="profile"><img src={require('../Components/images/6.jpg')} /><span>Keerthi</span></div>
                <div className="profile"><img src={require('../Components/images/5.jpg')} /><span>Kavitha</span></div>
                <div className="profile"><img src={require('../Components/images/6.jpg')} /><span>pavithra</span></div>
                <div className="profile"><img src={require('../Components/images/3.jpg')} /><span>Bala Ganesh</span></div>
                <hr></hr>
            </div>
        </div>
        
</div>
</>
  )
}

export default Home