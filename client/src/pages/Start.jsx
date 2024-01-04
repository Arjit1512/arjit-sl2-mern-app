import React, { useState } from 'react';
import Popup from '../pages/popup.jsx';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import pic1 from "../sources/pic1.jpeg";
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
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

const Start = () => {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isSignUp, setSignUp] = useState(true);
    const navigate = useNavigate();
    const handleCreateAccountClick = () => {
        console.log("Create account clicked");
        setSignUp(true);
        setPopupVisible(true);
    };

    const handlePopupClose = () => {
        setPopupVisible(false);
    };

    const gotoHome = () => {
        navigate("/home");
    }
    
    const gotoTask = () => {
        navigate("/task");
    }

    const openEditPopup = () => {
        setSignUp(true); // Assuming you want to show the signup form when the Edit button is clicked
        setPopupVisible((prevVisible) => !prevVisible); // Toggle the visibility state
        console.log("Edit button clicked");
    };

    return (
        <>
            <section id='navbar'>
                <div className='navbar'>
                    <a className='navbar-brand'><span>ATG</span>.WORLD</a>
                    <div className='navbar-search'>
                        <input type='text' value='  Search for your favorite groups in ATG' name='search'></input>
                    </div>
                    <p onClick={handleCreateAccountClick} className='navbar-click' style={{ color: "blue", cursor: "pointer" }}>Create account. It's free!</p>

                    {/* Conditional rendering of the Popup */}
                    {isPopupVisible && <Popup onClose={handlePopupClose} isPopupVisible={isPopupVisible} isSignUp={isSignUp} />}

                </div>
            </section>


            <section id="hero1">
                <button class='join-grp' id='joinGroupBtn'>Join Group</button>

                <div class="about">
                    <div class='move'>
                        <button class='join-grp join-grp2' id='goBackBtn'>&lt;--</button>
                    </div>
                    <h1>Computer Engineering</h1>
                    <h5>142,765 Computer Engineers follow this</h5>
                </div>
            </section>


            <section id='posts'>
                <div className='posts-div'>
                    <ul id="navbar-posts">

                        <Link to={"../"}><li>
                            <a className='active' style={{ fontSize: "16px" }}><nobr>All Posts(32)</nobr></a>
                        </li></Link>

                        <button className='filter-btn'><nobr>Filter: All</nobr></button>

                        <Link to={"../"}><li>
                            <a>Article</a>
                        </li></Link>

                        <Link to={"../"}><li>
                            <a>Event</a>
                        </li></Link>

                        <Link to={"../"}><li>
                            <a>Education</a>
                        </li></Link>

                        <Link to={"../"}><li>
                            <a>Job</a>
                        </li></Link>

                    </ul>
                </div>

                <div className='posts2-div'>
                    <ul id="navbar-posts2">

                        <button onClick={gotoTask} className='b1'><nobr>Write a Post</nobr></button>
                        <button onClick={gotoHome} className='b2'><nobr>Join Group</nobr></button>
                    </ul>
                </div>
                <div className='pink-circle'>
                    <button onClick={openEditPopup} className='static-btn'><MdOutlineEdit /></button>
                </div>
            </section>



            <section id='last'>
                <div className='feed'>
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
                        <div className='p3 loc3'>
                            <button className='icons more bt3 bt1'><MdModeEdit /></button>

                            <p className='border3'><nobr>Noida, India</nobr></p>
                            <p>Your location will help us<br></br> serve better and extend a personalised experience.</p>
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