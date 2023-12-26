import React, { useState, useEffect } from 'react';
import '../App.css';
import dp1 from "../sources/dp1.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import { IoShareSocial } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
const MessageForm = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const navigate=useNavigate();
  
  
  const viewAllComments = (index) => {
    const messageComments = comments[index] || [];
    alert(`Comments for Message ${index + 1}:\n${messageComments.join('\n')}`);
  };
  // Load messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(prev => [...prev, ...storedMessages]);
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    setLikes(storedLikes);

    const storedComments = JSON.parse(localStorage.getItem('comments')) || {};
    setComments(storedComments);
  }, []);

  // Load messages from localStorage on component mount
useEffect(() => {
  const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
  setMessages([...storedMessages]);
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== '' && description.trim() !== '' && content.trim() !== '' && name.trim() !== '') {
      const newMessage = { title, link, description, content, name };

      // Update messages state
      setMessages([...messages, newMessage]);

      // Clear form fields
      setTitle('');
      setLink('');
      setDescription('');
      setContent('');
      setName('');

      // Update local storage with the updated messages
      localStorage.setItem('messages', JSON.stringify([...messages, newMessage]));
    }
  };

  const handleEdit = (index) => {
    const selectedMessage = messages[index];
    setTitle(selectedMessage.title);
    setLink(selectedMessage.link);
    setDescription(selectedMessage.description);
    setContent(selectedMessage.content);
    setName(selectedMessage.name);

    // Remove the selected message from the messages array
    const updatedMessages = messages.filter((msg, i) => i !== index);
    setMessages(updatedMessages);
  };

  const handleDelete = (index) => {
    const updatedMessages = messages.filter((msg, i) => i !== index);
  
    // Update local storage and state
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
  };
  
  
  const gotoHome = () => {
    navigate("/");
  }
  
  
  
  const handleLike = (index) => {
    setLikes(prevLikes => {
      const newLikes = { ...prevLikes, [index]: (prevLikes[index] || 0) + 1 };
      localStorage.setItem('likes', JSON.stringify(newLikes));
      return newLikes;
    });
  };

  const handleComment = (index) => {
    const comment = prompt("Enter your comment:");
    if (comment) {
      setComments(prevComments => {
        const newComments = { ...prevComments, [index]: [...(prevComments[index] || []), comment] };
        localStorage.setItem('comments', JSON.stringify(newComments));
        return newComments;
      });
    }
  };

  return (
    <div className='entire-msg'>
      <div className="message-form-container">
        <form onSubmit={handleSubmit} className="message-form msgform">
          <label>
            Image:
            <input style={{ width: "100%" }}
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="input-field ifname msg-input"
            />
          </label>
          <br />
          <label>
            Title:
            <input style={{ width: "100%" }}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field ifname msg-input"
            />
          </label>
          <br />
          <label>
            Description:
            <input style={{ width: "100%" }}
              className="input-field ifname msg-input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <label>
            Content:
            <input style={{ width: "100%" }}
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="input-field ifmsg msg-input"
            />
          </label>
          <br />
          <label>
            Name:
            <input style={{ width: "100%" }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field ifmsg msg-input"
            />
          </label>
          <br />
          <button
            style={{ width: "102.4%" }}
            type="submit" className="submit-button msg-input">
            Submit
          </button>
        </form>
      </div>
      <section id='posts'>
                <div className='posts-div'>
                    <ul id="navbar-posts">

                        <Link to={"../"}><li>
                            <a className='active'><nobr>All Posts(32)</nobr></a>
                        </li></Link>

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

                        <button className='b1 b11'><nobr>Write a Post</nobr></button>
                        <button onClick={gotoHome} className='b2 b12'><nobr>Leave Group</nobr></button>
                    </ul>
                </div>

            </section>
      <div className='output-msg'>
        {messages.map((msg, index) => (
          msg && msg.title && msg.description && msg.content && msg.name && (
            <div key={index} className="feed">
              <img src= {msg.link} />
              <h4>{msg.title}</h4>
              <div className='flex-btw'>
                <h3>{msg.description}<br>
                </br></h3>
              </div>
              <p>{msg.content}</p>
              <img className='dp' src={dp1} />
              <h4 className='username'>{msg.name}</h4>

              
              <div className='flex-btw'>
                <p style={{marginLeft:"30%" , zIndex:"100"}} className='views'>1.4k views</p>
              </div>
              <div className='icon-div'>
              <button style={{cursor:"pointer"}} className="icons icon-di" onClick={() => handleEdit(index)}><CiEdit /></button>
              <button style={{cursor:"pointer"}} className="icons icon-di" onClick={() => handleDelete(index)}><MdDelete /></button>
              </div>
              <div className='icon-div icon-di2'>
              <button style={{ cursor: "pointer",marginLeft:"1.4%"}} className="icons icon-di2" onClick={() => handleLike(index)}><FaThumbsUp /></button>
              <div className='disp'>
              <p>{likes[index] || 0}</p>
              </div> 
              <button style={{ cursor: "pointer",marginTop:"-2%" }} className="icons icon-di2" onClick={() => handleComment(index)}><FaComment /> {comments[index] ? comments[index].length : 0}</button>
              <button style={{ cursor: "pointer",left:"2%" }} className="icons icon-di2" onClick={() => viewAllComments(index)}>View All Comments</button>
              </div>
            </div>

          )
        ))}
      </div>
    </div>
  );
};

export default MessageForm;
