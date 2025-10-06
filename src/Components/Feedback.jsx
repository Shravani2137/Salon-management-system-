import React, { useState } from "react";
import "./FeedbackSection.css";

const FeedbackSection = () => {
  const feedbacks = [
    {
      name: "Aarav Mehta",
      role: "Regular Client",
      feedback:
        "Amazing salon! The staff is friendly, and the services are top-notch. I always leave feeling refreshed.",
      color: "#4CAF50",
    },
    {
      name: "Priya Sharma",
      role: "First-Time Visitor",
      feedback:
        "Loved the ambiance and professional service. Highly recommend to anyone looking for a great experience!",
      color: "#2196F3",
    },
    {
      name: "Rohan Patel",
      role: "Loyal Customer",
      feedback:
        "Booking is smooth, and stylists are very talented. My go-to place for haircuts and grooming.",
      color: "#FF9800",
    },
  ];

  const [userFeedback, setUserFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (userFeedback.trim() === "" || rating === 0) {
      alert("Please give both feedback and rating ⭐");
      return;
    }
    setShowMessage(true);
    setUserFeedback("");
    setRating(0);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <section className="feedback-section">
      <h2 className="feedback-title">
        Client Feedback <span>& Testimonial</span>
      </h2>
      <p className="feedback-subtext">
        Hear from our happy customers who trusted us with their beauty and care.
      </p>

      <div className="feedback-container">
        {feedbacks.map((item, index) => (
          <div className="feedback-card" key={index}>
            <div
              className="quote-circle"
              style={{ backgroundColor: item.color }}
            >
              “
            </div>
            <p className="feedback-text">{item.feedback}</p>
            <h3 className="client-name">{item.name}</h3>
            <p className="client-role">{item.role}</p>
          </div>
        ))}
      </div>

      <div className="give-feedback">
        <h3>Give Your Feedback</h3>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={value <= rating ? "star selected" : "star"}
              onClick={() => handleRating(value)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          placeholder="Write your feedback here..."
          className="feedback-input"
          value={userFeedback}
          onChange={(e) => setUserFeedback(e.target.value)}
        ></textarea>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {showMessage && (
        <div className="success-popup">
          🎉 Feedback submitted successfully!
        </div>
      )}
    </section>
  );
};

export default FeedbackSection;
