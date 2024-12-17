import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForumThread from "./ForumThread";
import "./Forum.css";

function Forum() {
  const navigate = useNavigate();
  const [selectedThread, setSelectedThread] = useState(null); // Manage thread details popup

  const threads = [
    {
      id: 1,
      title: "Best camping spots for beginners?",
      author: "John Doe",
      comments: 5,
      imageUrl:
        "C:UsersAsusDesktopCampingBazzar--WEB-publicassetsgoogle-play.png",
      details:
        "Discover the best spots for first-time campers, with tips and suggestions to make your adventure memorable!",
    },
    {
      id: 2,
      title: "How to choose the best hiking boots",
      author: "Jane Smith",
      comments: 3,
      details:
        "Find out how to pick the perfect hiking boots that match your needs and ensure comfort during your hikes.",
    },
    {
      id: 3,
      title: "Camping gear reviews - Tent edition",
      author: "Mike Lee",
      comments: 7,
      details:
        "An in-depth review of the top tents available on the market, with pros and cons to help you decide.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredThreads = threads.filter((thread) =>
    thread.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const closeThreadDetails = () => setSelectedThread(null);

  return (
    <div className="forum-container1">
      <div className="forum-header">
        <h2 className="forum-title">Explore the Camping Community</h2>
        <p className="forum-description">
          Dive into discussions, share your stories, and find valuable tips from
          fellow adventurers.
        </p>
      </div>

      <div className="forum-search1">
        <input
          type="text"
          placeholder="Search for threads..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="forum-search1-input"
        />
      </div>

      <div className="forum-threads">
        {filteredThreads.map((thread) => (
          <ForumThread
            key={thread.id}
            thread={thread}
            onViewDetails={() => setSelectedThread(thread)} // Pass selected thread to open modal
          />
        ))}
      </div>

      {selectedThread && (
        <div className="thread-modal">
          <div className="thread-modal-content">
            <button className="thread-modal-close" onClick={closeThreadDetails}>
              &times;
            </button>
            <h3 className="thread-modal-title">{selectedThread.title}</h3>
            <p className="thread-modal-meta">
              By {selectedThread.author} - {selectedThread.comments} comment(s)
            </p>
            <p className="thread-modal-details">{selectedThread.details}</p>
          </div>
        </div>
      )}

      <div className="new-thread-btn-container">
        <button
          className="new-thread-btn"
          onClick={() => navigate("/community-forum")}
        >
          Start a New Thread
        </button>
      </div>
    </div>
  );
}

export default Forum;
