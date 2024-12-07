import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import ForumThread from './ForumThread'; // Import the corrected ForumThread component
import './Forum.css';

function Forum() {
  const navigate = useNavigate(); // Initialize navigate

  const threads = [
    { id: 1, title: 'Best camping spots for beginners?', author: 'John Doe', comments: 5 },
    { id: 2, title: 'How to choose the best hiking boots', author: 'Jane Smith', comments: 3 },
    { id: 3, title: 'Camping gear reviews - Tent edition', author: 'Mike Lee', comments: 7 },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredThreads = threads.filter(thread =>
    thread.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="forum-container">
      <div className="forum-header">
        <h2 className="forum-title">Camping Community</h2>
        <p className="forum-description">
          Share your experiences, ask questions, and connect with fellow adventurers.
        </p>
      </div>

      <div className="forum-search">
        <input
          type="text"
          placeholder="Search for threads..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="forum-search-input"
        />
      </div>

      <div className="forum-threads">
        {filteredThreads.map((thread) => (
          <ForumThread key={thread.id} thread={thread} />
        ))}
      </div>

      <div className="new-thread-btn-container">
        <button
          className="new-thread-btn"
          onClick={() => navigate('/community-forum')} // Navigate to CommunityForum
        >
          Start a New Thread
        </button>
      </div>
    </div>
  );
}

export default Forum;
