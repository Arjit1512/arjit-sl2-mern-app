import React, { useState, useEffect } from 'react';
import Popup from '../pages/popup.jsx';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import pic1 from "../sources/pic1.jpeg";
import unga1 from "../sources/unga1.jpeg";
import l1 from "../sources/l1.jpeg";
import l2 from "../sources/l2.jpeg";
import l3 from "../sources/l3.jpeg";
import l4 from "../sources/l4.jpeg";
import dp1 from "../sources/dp1.jpeg";
import pic2 from "../sources/pic2.jpg";
import dp2 from "../sources/dp2.jpeg";
import pic3 from "../sources/pic3.jpg";
import dp3 from "../sources/dp3.jpeg";
import { IoShareSocial } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import MessageForm from './MessageForm.jsx';

const Start = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isSignUp, setSignUp] = useState(true);
    const [firstName, setFirstName] = useState(""); // Add a state for first name
    const navigate = useNavigate();

    const handlePopupClose = () => {
        setPopupVisible(false);
    };

    const handleCreateAccountClick = () => {
        console.log("Create account clicked");
        setSignUp(true);
        setPopupVisible(true);
    };

    const handleSubmit = () => {
        navigate("/");
    };

    const handleUpdateFirstName = (newFirstName) => {
        // Update the first name in the state
        setFirstName(newFirstName);
        // Close the popup
        handlePopupClose();
    };

    return (
        <>
            <section id='navbar'>
                <div className='navbar'>
                    <a className='navbar-brand'><span>ATG</span>.WORLD</a>
                    <div className='navbar-search'>
                        <input type='text' value='  Search for your favorite groups in ATG' name='search'></input>
                    </div>

                    <div className='feed feed1'>
                        <img className='dp111' src={unga1} />
                        <div className='ungah4'>
                            <h4 className='username'><nobr>{firstName || 'Siddharth Nayal'}</nobr></h4>
                        </div>
                    </div>
                    {/* Conditional rendering of the Popup */}
                    {isPopupVisible && <Popup onClose={handlePopupClose} isPopupVisible={isPopupVisible} isSignUp={isSignUp} />}

                </div>
            </section>



            <div className='brder'></div>
            
            <MessageForm />
                

            <section id='last'>

            
            
              
              <div style={{paddingTop:"0.8%"}} className='feed'>
                    <img src={pic1} />
                    <h4>Article</h4>
                    <div className='flex-btw'>
                        <h3>What if famous brands had regular fonts? Meet<br>
                        </br>RegulaBrands!</h3>
                        <button className='icons more'><MdMoreHoriz /></button>
                    </div>
                    <p>I've worked in UX for the better part of a decade. From now on, I plan to rei..</p>
                    <img className='dp' src={dp1} />
                    <h4 className='username'>Sarthak Kamra</h4>


                    <div className='flex-btw'>
                        <p className='views'>1.4k views</p>

                        <button className='icons share bt-share'><IoShareSocial /></button>
                    </div>

                    <div className='last2'>
                        <div className='p3 loc3 loc33'>
                            <button className='icons more bt3 bt1'><MdModeEdit /></button>

                            <p className='border3'><nobr>Enter your location</nobr></p>
                            <p>Your location will help us<br></br> serve better and extend a personalised experience.</p>
                        </div>


                        <div className='lists'>
                            <h2>RECOMMENDED GROUPS</h2>

                            <div className='flex-btw flex-lists'>
                                <img src={l1} alt=""></img>
                                <div className='leisure'>
                                    <p>Leisure</p>
                                </div>
                                <button className='follow'>Follow</button>
                            </div>


                            <div className='flex-btw flex-lists'>
                                <img src={l2} alt=""></img>
                                <div className='leisure'>
                                    <p>Activism</p>
                                </div>
                                <button className='follow'>Follow</button>
                            </div>

                            <div className='flex-btw flex-lists'>
                                <img src={l3} alt=""></img>
                                <div className='leisure'>
                                    <p>MBA</p>
                                </div>
                                <button className='follow'>Follow</button>
                            </div>

                            <div className='flex-btw flex-lists'>
                                <img src={l4} alt=""></img>
                                <div className='leisure'>
                                    <p>Theory</p>
                                </div>
                                <button className='follow'>Follow</button>
                            </div>

                        </div>


                    </div>
                    
                </div>

               
                <div className='feed'>
                    <img src={pic2} />
                    <h4>Education</h4>
                    <div className='flex-btw'>
                        <h3>Tax Benefits for Investment under National Pen<br>
                        </br>Scheme launched by Government</h3>
                        <button className='icons more'><MdMoreHoriz /></button>
                    </div>
                    <p>I've worked in UX for the better part of a decade. From now on, I plan to rei..</p>
                    <img className='dp' src={dp2} />
                    <h4 className='username'>Sarah West</h4>


                    <div className='flex-btw'>
                        <p className='views'>1.4k views</p>

                        <button className='icons share bt-share'><IoShareSocial /></button>
                    </div>
                </div>

                <div className='feed'>
                    <img src={pic3} />
                    <h4>Meetup</h4>
                    <div className='flex-btw'>
                        <h3>Finance & Investment Elite Social Mixer Website<br>
                        </br>@Lujiazui</h3>
                        <button className='icons more'><MdMoreHoriz /></button>
                    </div>
                    <div className='more3'>
                        <button className='icons more bt3'><IoBagOutline /></button>
                        <div className='p3'>
                            <p><nobr>Fri, 12 Oct, 2018</nobr></p>
                        </div>

                        <button className='icons more bt3'><IoLocationOutline /></button>
                        <div className='p3 loc3'>
                            <p><nobr>Ahmedabad, India</nobr></p>
                        </div>

                    </div>
                    <button className='meetup'>Visit Website</button>
                    <div className='test3'>
                        <img className='dp dp3' src={dp3} />
                        <h4 className='username username3'>Ronal Jones</h4>
                    </div>

                    <div className='flex-btw flex-btw3'>
                        <p className='views views3'>1.4k views</p>

                        <button className='icons share bt-share bt-share3'><IoShareSocial /></button>
                    </div>
                </div>

                <div className='feed'>
                    <h4>Job</h4>
                    <div className='flex-btw'>
                        <h3>Software Development                             </h3>
                        <button className='icons more'><MdMoreHoriz /></button>
                    </div>
                    <div className='more3'>
                        <button className='icons more bt3'><IoBagOutline /></button>
                        <div className='p3'>
                            <p><nobr>Innovaccer Analytics Private Ltd.</nobr></p>
                        </div>

                        <button className='icons more bt3'><IoLocationOutline /></button>
                        <div className='p3 loc3'>
                            <p><nobr>Noida, India</nobr></p>
                        </div>

                    </div>
                    <button className='meetup' style={{ color: "green" }}>Apply on Timesjobs</button>
                    <div className='test3'>
                        <img className='dp dp3 dp4' src={dp1} />
                        <h4 className='username username3'>Joseph Gray</h4>
                    </div>

                    <div className='flex-btw flex-btw3'>
                        <p className='views views3'>1.4k views</p>

                        <button className='icons share bt-share bt-share3'><IoShareSocial /></button>
                    </div>
                </div>

                
            </section>

            <section id='last2'>

            </section>
        </>
    )
}

export default Start