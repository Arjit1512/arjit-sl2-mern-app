import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Task.css';
import '../App.css';
import dp from "../sources/default.png";
import Loader from "../components/Loader.jsx"; 

const Task = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
                alert("No data to show");
            });
    }, []);

    const handleUserClick = (user) => {
        console.log("User has been clicked");
        setSelectedUser(user);
    };

    return (
        <div className="Task">
            <h1>User List</h1>

            {loading ? (
                <Loader />
            ) : (
                <div className="user-list">
                    {users.map((user, index) => (
                        <div key={`${user.id}-${user.profile.firstName || index}`} className="user-item items-of-user">
                            <img
                                className="user-img"
                                src={user.avatar || dp}
                                alt={`Image of ${user.profile.firstName}`}
                                onClick={() => handleUserClick(user)}
                            />

                            <div className='user-details'>
                                <span className='span-class'><p>{user.profile.firstName}</p></span>
                                <p>{user.profile.email}</p>

                                <div className='slight-change'>
                                    <p className='job'>{user.jobTitle}</p>
                                </div>
                            </div>

                            <div className='gray-border'></div>
                            <div className='gray-line'></div>
                            <div className='gray-line2'></div>
                        </div>
                    ))}
                </div>
            )}

            {selectedUser && (
                <div className='selected-user-details-container'>
                    <div className='selected-user-details'>
                        <h2>Selected User Details</h2>
                        <img className="user-img" src={selectedUser.avatar} alt={`Avatar of ${selectedUser.profile.firstName}`} />

                        <div className='user-details'>
                            <div className='seperate-div'>
                                <div className='name-div'>
                                    <span className='span-class'><p>{selectedUser.profile.firstName} {selectedUser.profile.lastName}</p></span>
                                </div>
                                <p><span style={{ fontWeight: "700" }}>Email: </span>{selectedUser.profile.email}</p>
                                <p><span style={{ fontWeight: "700" }}>Bio: </span>{selectedUser.Bio}</p>

                                <div className='slight-change'>
                                    <p><span style={{ fontWeight: "700", color: "black" }}>Job: </span>{selectedUser.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Task;
