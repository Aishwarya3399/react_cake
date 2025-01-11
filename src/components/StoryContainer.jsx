import React, { useState } from "react";
import "./StoryContainer.css";

const StoryComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  // Handle video click to show modal and set video source
  const handleVideoClick = (videoUrl) => {
    setVideoSrc(videoUrl);
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    setVideoSrc(""); // Clear video URL when modal is closed
  };

  const videos = [
    "https://www.youtube.com/embed/j6hv7Jcm5XQ?mute=1",
    "https://www.youtube.com/embed/j6hv7Jcm5XQ?mute=1",
    "https://www.youtube.com/embed/j6hv7Jcm5XQ?mute=1",
    "https://www.youtube.com/embed/j6hv7Jcm5XQ?mute=1",
    "https://www.youtube.com/embed/j6hv7Jcm5XQ?mute=1",
  ];

  return (
    <div className="shorts col-md-12 col-lg-12">
      <div className="story-container">
        {videos.map((videoUrl, index) => (
          <div
            key={index}
            className="story"
            data-aos="zoom-in"
            onClick={() => handleVideoClick(videoUrl)}
          >
            <iframe src={videoUrl} frameBorder="0" allowFullScreen></iframe>
            <div className="play-text">Play Now</div>
          </div>
        ))}
      </div>

      {/* Modal for playing video */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close-button"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  &times;
                </button>
                <iframe src={videoSrc} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryComponent;
