import React from 'react';
import './ForumThread.css';

function ForumThread({ thread }) {
  return (
    <div className="forum-thread">
      <h3>{thread.title}</h3>
      <p className="forum-thread-meta">
        By {thread.author} - {thread.comments} comment(s)
      </p>
      <button className="view-thread-btn">View Thread</button>
    </div>
  );
}

export default ForumThread;
