import React, { useState } from "react";
import "./ForumThread.css";

function ForumThread({ thread, onViewDetails }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="forum-thread-item">
      <h3>{thread.title}</h3>
      <p className="forum-thread-meta-info">
        By {thread.author} - {thread.comments} comment(s)
      </p>
      <button className="forum-view-thread-btn" onClick={handleModalOpen}>
        View Thread
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="forum-thread-modal-container show">
          <div className="forum-thread-modal-content">
            <button
              className="forum-modal-close-btn"
              onClick={handleModalClose}
            >
              X
            </button>
            <img
              className="forum-thread-modal-image"
              src={thread.imageUrl}
              alt={thread.title}
            />
            <h3 className="forum-thread-modal-title">{thread.title}</h3>
            <p className="forum-thread-modal-category">
              Category: {thread.category}
            </p>
            <p className="forum-thread-modal-description">
              {thread.description}
            </p>
            <div className="forum-thread-seller-info">
              <h4>Seller Info</h4>
              <p>{thread.seller}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForumThread;
