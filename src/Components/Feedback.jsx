import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import "./FeedbackSection.css";

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([]); // Store all feedbacks from Firebase
  const [userFeedback, setUserFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const feedbackCollection = collection(db, "feedbacks"); // Firestore collection name

  // Fetch feedbacks from Firebase
  const fetchFeedbacks = async () => {
    const q = query(feedbackCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const feedbackList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFeedbacks(feedbackList);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = async () => {
    if (userFeedback.trim() === "" || rating === 0) {
      alert("Please give both feedback and rating ⭐");
      return;
    }

    try {
      // Add feedback to Firebase
      await addDoc(feedbackCollection, {
        name: "Anonymous", // You can replace with logged-in user name
        feedback: userFeedback,
        rating: rating,
        createdAt: new Date(),
      });

      setShowMessage(true);
      setUserFeedback("");
      setRating(0);

      // Refresh feedback list
      fetchFeedbacks();

      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding feedback: ", error);
    }
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
              style={{ backgroundColor: "#FF9800" }}
            >
              “
            </div>
            <p className="feedback-text">{item.feedback}</p>
            <h3 className="client-name">{item.name}</h3>
            <p className="client-role">Rating: {item.rating} ⭐</p>
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
