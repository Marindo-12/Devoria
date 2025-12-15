import { useState, useEffect } from "react";
import "./FeedbackPopup.css";

const emojis = ["😡", "😕", "😐", "😊", "😍"];

export default function FeedbackPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    /* const hasSeenPopup = localStorage.getItem("feedbackPopupShown");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("feedbackPopupShown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    } */
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    const payload = { emoji: selectedEmoji, comment };
    try {
      await fetch("http://localhost:5000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("Thanks for your feedback!");
      setShowPopup(false);
    } catch (err) {
      console.error(err);
      alert("Error sending feedback");
    }
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
        <h2>How was your experience?</h2>
        <div className="emoji-container">
          {emojis.map((e, i) => (
            <span
              key={i}
              className={`emoji ${selectedEmoji === e ? "selected" : ""} cursor-pointer`}
              onClick={() => setSelectedEmoji(e)}
            >
              {e}
            </span>
          ))}
        </div>
        {showCommentBox ? (
          <div className="comment-box">
            <textarea
              placeholder="Add your comment"
              className="focus:outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        ) : (
          <button className="add-comment-btn" onClick={() => setShowCommentBox(true)}>Add Comment</button>
        )}
      </div>
    </div>
  );
}
