import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types'; 
// import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  // const convertedTimeStamp = TimeStamp(props);
  const heart = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like" onClick={() => props.onLiked(props.id)}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};


export default ChatEntry;
